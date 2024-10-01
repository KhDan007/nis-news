export const Footer = () => {
    return (
        <footer className="footer flex flex-col items-center">
            <div className="footer__top w-full text-center text-4xl md:text-5xl lg:text-6xl text-white py-6 md:py-8 lg:py-10 bg-red-600">
                NEWS
            </div>
            <div className="container">
                <div className="footer__bottom py-4 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="footer__col flex flex-col items-center justify-center">
                        <h4 className="text-2xl font-bold">SECTIONS</h4>
                        <ul className="text-lg underline">
                            <li>News</li>
                            <li>Culture</li>
                            <li>Sport</li>
                            <li>Technology</li>
                            <li>Health</li>
                            <li>Travel</li>
                            <li>Education</li>
                            <li>Environment</li>
                        </ul>
                    </div>
                    <div className="footer__col flex flex-col items-center justify-center">
                        <h4 className="text-2xl font-bold">ABOUT</h4>
                        <ul className="text-lg underline">
                            <li>ABOUT</li>
                            <li>ABOUT</li>
                            <li>ABOUT</li>
                            <li>ABOUT</li>
                            <li>ABOUT</li>
                        </ul>
                    </div>
                    <div className="footer__col flex flex-col items-center justify-center">
                        <h4 className="text-2xl font-bold">RESOURCES</h4>
                        <ul className="text-lg underline">
                            <li>RESOURCES</li>
                            <li>RESOURCES</li>
                            <li>RESOURCES</li>
                            <li>RESOURCES</li>
                            <li>RESOURCES</li>
                        </ul>
                    </div>
                    <div className="footer__col flex flex-col items-center justify-center">
                        <p className="text-md">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Architecto fugiat tenetur, unde laudantium
                            eius voluptate id, modi eaque qui voluptatem ullam
                            odit magnam cumque. Assumenda modi magnam distinctio
                            sint pariatur.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
