import {
    Card,
    CardHeader,
    CardBody,
    Image,
    CardFooter,
} from "@nextui-org/react";

function MyCard({ id, title, author, date, img, category }) {
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
    });

    return (
        <Card
            isPressable
            onPress={() => {
                console.log("card with id: '" + id + "' was pressed");
            }}
            className="py-4"
        >
            <CardHeader className=" overflow-visible py-2 relative">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={img}
                />
                <p className="text-md bg-red-600 text-white z-10 absolute bottom-2 left-3 px-3">
                    {category}
                </p>
            </CardHeader>
            <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-sm">
                    By {author} - {dateFormatter.format(new Date(date))}
                </p>
                <h4 className="font-bold text-large">{title}</h4>
            </CardBody>
        </Card>
    );
}
export default MyCard;
