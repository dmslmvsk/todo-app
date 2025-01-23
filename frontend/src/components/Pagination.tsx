import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useTodos } from "../hooks/useTodos";

interface PaginationProps {
    currentPage: number;
    changePage: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, changePage }) => {
    const { data } = useTodos();

    const totalPages = data?.totalPages || 0;

    const handlePrevious = () => {
        if (currentPage > 0) changePage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) changePage(currentPage + 1);
    };

    const handlePageClick = (page: number) => {
        changePage(page);
    };

    return (
        <div className="flex items-center justify-center gap-1">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 0}
                className={`p-2 rounded-md ${
                    currentPage === 0
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-neutral-700 hover:bg-neutral-200"
                }`}
            >
                <IoArrowBack size={24} />
            </button>

            <div className="flex space-x-1">
                {totalPages > 1 ? (
                    Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageClick(index)}
                            className={`px-3 py-1 rounded-md text-sm font-medium ${
                                currentPage === index
                                    ? "bg-neutral-700 text-white"
                                    : "text-neutral-700 hover:bg-neutral-200"
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))
                ) : (
                    <button className="px-3 py-1 rounded-md text-sm font-medium bg-neutral-700 text-white">
                        1
                    </button>
                )}
            </div>

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages - 1 || totalPages === 0}
                className={`p-2 rounded-md ${
                    currentPage === totalPages - 1 || totalPages === 0
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-neutral-600 hover:bg-neutral-200"
                }`}
            >
                <IoArrowForward size={24} />
            </button>
        </div>
    );
};

export default Pagination;
