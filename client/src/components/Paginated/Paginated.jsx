import React, { useState } from "react";

export default function Paginated({page, setPage, maxPage}) {
    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        setPage(parseInt(page) + 1)
    }

    const previousPage = () => {
        setInput(parseInt(input) - 1)
        setPage(parseInt(page) - 1)
    }

    return (
        <div className="flex justify-center py-1">
            <button disabled={page === 1 || page < 1} onClick={previousPage} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900  ">
                ←
            </button>
            <p className=" inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg ">Page {page} of {maxPage}</p>
            <button disabled={page === maxPage || page > maxPage} onClick={nextPage} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 ">
                →
            </button>
        </div>
    )
}