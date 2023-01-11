import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { filterByCategory, filterByPrice, filterByRating, orderByName, resetFilters, setCurrentPage} from '../../Redux/actions';

export const applyFilters = (allProducts, categoryFilter, priceFilter, ratingsFilter, alphabeticalOrder) => {
  let finalProducts = allProducts
  if(categoryFilter !== "all"){
      finalProducts = finalProducts.filter(p => p.category === categoryFilter)
  }
  if(priceFilter !== "all"){
      if (priceFilter === "100"){
          finalProducts = finalProducts.filter(p =>p.price<=100)
          }
      else if (priceFilter === "500"){
          finalProducts = finalProducts.filter(p =>p.price>100 && p.price<=500)
          }
      else if (priceFilter === "1000"){
          finalProducts = finalProducts.filter(p =>p.price>500 && p.price<=1000)
          }
      else if (priceFilter === "5000"){
          finalProducts = finalProducts.filter(p =>p.price>1000 && p.price<=5000)
          }
  }
  if(ratingsFilter !== "all"){
      if (ratingsFilter === "5s"){
          finalProducts = finalProducts.filter(p =>p.ratings===5)
          }
      else if (ratingsFilter === "4s"){
          finalProducts = finalProducts.filter(p =>p.ratings>=4 && p.ratings<5)
          }
      else if (ratingsFilter === "3s"){
          finalProducts = finalProducts.filter(p =>p.ratings>=3 && p.ratings<4)
          }
      else if (ratingsFilter === "2s"){
          finalProducts = finalProducts.filter(p =>p.ratings>=2 && p.ratings<3)
          }
      else if (ratingsFilter === "1s"){
          finalProducts = finalProducts.filter(p =>p.ratings>=1 && p.ratings<2)
          }
  }
  if(alphabeticalOrder !== "all"){
    if (alphabeticalOrder === "ase"){
      finalProducts.sort((a, b)=>{
        if (a.name > b.name){
          return 1;
        }
        if (a.name < b.name){
          return -1;
        }
        return 0
          }
        )
        }
    else if (alphabeticalOrder === "des"){
      finalProducts.sort((a, b)=>{
        if(a.name < b.name){
          return 1;
        }
        if(a.name > b.name){
          return -1;
        }
        return 0
          }
        )}
}
  return finalProducts;
}

export const Filtros = () => {
  //const [orden, setOrden] = useState('')
  //const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch()
  const setPage = (pageNumber) => {
      dispatch(setCurrentPage(pageNumber));
  }
  let categoryFilter = useSelector((state) => state.categoryFilter);
  let priceFilter = useSelector((state) => state.ratingsFilter);
  let ratingsFilter = useSelector((state) => state.ratingsFilter);
  let alphabeticalOrder = useSelector((state) => state.ratingsFilter);

  console.log("Esto es categoryFilter en Filtros: " + categoryFilter)
  
  let categories = [
    'Electronics',
    'Cameras',
    'Laptops',
    'Accessories',
    'Headphones',
    'Consoles',
    'Television',
    'VideoGames',
    'Home'
  ]

  const handleCategoryFilter = (e) =>{
    e.preventDefault();
    dispatch(filterByCategory(e.target.value))
    setPage(1)
  }

  const handleRatingFilter = (e) =>{
    e.preventDefault();
    dispatch(filterByRating(e.target.value))
    setPage(1)
  }

  const handlePriceFilter = (e) =>{
    e.preventDefault();
    dispatch(filterByPrice(e.target.value))
    setPage(1)
  }

  const handleNameOrder = (e) =>{
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setPage(1)
  }

  const handleResetFilters = (e) =>{
    e.preventDefault();
    dispatch(resetFilters())
  }
  
  return (
    <div className="flex justify-around flex-wrap m-2">

    <button onClick={e => {handleResetFilters(e)}} className="bg-gray-50 mt-2 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 ">
      Clear Filters
    </button>

    <select onChange={e => {handleCategoryFilter(e)}} value={categoryFilter} className="bg-gray-50 mt-2 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 ">
        <option value="all" key="all">Categories</option>
        {
        categories.map(c =>{
              return(
            <option value={c} key={c} id={c}>{c}</option>
                        )
            })
        }
    </select>

    <select onChange={e => {handleRatingFilter(e)}} value={ratingsFilter} className="bg-gray-50 mt-2 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 ">   
        <option value="all" key="all">Rating</option>
        <option value="1s" key="1s">1 Star</option>
        <option value="2s" key="2s">2 Stars</option>
        <option value="3s" key="3s">3 Stars</option>
        <option value="4s" key="4s">4 Stars</option>
        <option value="5s" key="5s">5 Stars</option>
    </select>

    <select onChange={e => {handlePriceFilter(e)}} value={priceFilter} className="bg-gray-50 mt-2 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 ">
        <option value="all" key="all">Price</option>       
        <option value="100" key="100">$0 - $100</option>  
        <option value="500" key="500">$101 - $500</option>
        <option value="1000" key="1000">$501 - $1000</option>
        <option value="5000" key="5000">$1001 - $5000</option>
    </select>
    
    <select onChange={e => {handleNameOrder(e)}} value={alphabeticalOrder} className="bg-gray-50 mt-2 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 ">   
        <option value="all" key="all">Order by name</option>
        <option value="ase" key="ase">Ascending</option>
        <option value="des" key="des">Descending</option>
    </select>
    </div>

  )
}