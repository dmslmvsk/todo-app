import { useTodos } from "../hooks/useTodos";

const Header = () => {
    const { data, error, isPending } = useTodos();

    const completed = data?.content.filter(
        (item) => item.completed !== false
    ).length;

    return (
        <header className="flex flex-row items-center justify-between w-full h-20 rounded-t py-4 px-6 bg-neutral-700">
            <div className="flex flex-row gap-4 items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-red-500"></div>
                <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
                <div className="w-5 h-5 rounded-full bg-green-500"></div>
            </div>
            <span className="font-montserrat text-2xl text-neutral-50">
                {isPending
                    ? "Loading"
                    : error
                    ? "error"
                    : `${completed} / ${data?.content.length} completed`}
            </span>
        </header>
    );
};

export default Header;
