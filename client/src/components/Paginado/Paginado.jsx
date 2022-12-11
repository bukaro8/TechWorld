import React from "react";

const Paginado = () => {
  const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(sneakers / sneakersPerPage); i++) {
//     pageNumbers.push(i);
//   }

  return (
    <div className="flex justify-center py-1">
      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900  " >
       ANTERIOR
      </button>
      <p className=" inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg ">pagina 1 de 5
      </p>
      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-900 " >
        SIGUIENTE 
      </button>
    </div>
  );
};
export default Paginado;
