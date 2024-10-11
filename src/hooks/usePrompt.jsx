import { useCallback, useEffect } from "react";
import { useBlocker } from "react-router-dom";

export function usePrompt(when, message) {
    const blocker = useBlocker(when);

    useEffect(() => {
        if (blocker.state === "blocked" && !when) {
            blocker.reset();
        }
    }, [blocker, when]);

    useEffect(() => {
        if (when) {
            window.onbeforeunload = (event) => {
                event.preventDefault();
                event.returnValue = message;
            };
        } else {
            window.onbeforeunload = null;
        }
        return () => {
            window.onbeforeunload = null;
        };
    }, [when, message]);

    const handleBlockedNavigation = useCallback(
        (tx) => {
            if (window.confirm(message)) {
                blocker.proceed();
            } else {
                blocker.reset();
            }
        },
        [blocker, message]
    );

    return [handleBlockedNavigation, blocker.state === "blocked"];
}
