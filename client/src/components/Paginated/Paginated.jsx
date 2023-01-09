import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from "../../Redux/actions";

export default function Paginated({maxPage}) {
    const [input, setInput] = useState(1);
    const dispatch = useDispatch()
    let currentPage = useSelector((state)=> state.currentPage);
    
    const setPage = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    }

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        setPage(parseInt(currentPage) + 1)
    }

    const previousPage = () => {
        setInput(parseInt(input) - 1)
        setPage(parseInt(currentPage) - 1)
    }

    return (
        <div className="flex justify-center py-1">
            <button disabled={currentPage === 1 || currentPage < 1} onClick={previousPage} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900  ">
                ←
            </button>
            <p className=" inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg ">Page {maxPage===0?0:currentPage} of {maxPage}</p>
            <button disabled={currentPage === maxPage || currentPage > maxPage} onClick={nextPage} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 ">
                →
            </button>
        </div>
    )
}