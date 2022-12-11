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
        <div>
            <button disabled={page === 1 || page < 1} onClick={previousPage}>←</button>
            <p>Page {page} of {maxPage}</p>
            <button disabled={page === maxPage || page > maxPage} onClick={nextPage}>→</button>
        </div>
    )
}