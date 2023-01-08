import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReview } from "../../Redux/actions";
import { getDetail } from "../../Redux/actions";
import { FaStar } from "react-icons/fa"; //probando a ver si puedo ingresar las estrellas
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert"

/* Variables para los colores de las estrellas */
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

export const Reviews = () => {
  /* Comienza armado de estrellas */
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const { isAuthenticated, user } = useAuth0();
  
  const handleClick = (value) => {
    setComment({
      ...comment,
      rating: value,
    });
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  /* Finaliza armado de estrellas */
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detail);
  
  
  const [comment, setComment] = useState({
    
    name: "",
    email: "",
    comment: "",
    rating: 0,
  });
 
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postReview(comment, id));
    setComment({
        name: "",
        email: "",
        comment: "",
        rating: 0,
    });
    
    //Swal(
     // ' sussenfull',
      //"Comentario agregado con exito",
      //'success'
   // )
   setTimeout(()=>{
    dispatch(getDetail(id))
   },1000)
    ;
  }
  


  return (
    <div className="max-w-2xl mx-auto px-4">
      
      {isAuthenticated ? ( 
        <div >
          <hr/>
          <div className="flex mx-auto items-center justify-center shadow-lg mt-20 mx-8 mb-4 max-w-lg">
            
            <form onSubmit={(e) => handleSubmit(e)} className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"> 
              <div className="flex flex-wrap -mx-3 mb-6">
                <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">New Review</h2>
                <div className="w-full md:w-full px-3 mb-2 mt-2">
                  <label value= {comment.email = user.email}/>
                  <label value= {comment.name = user.name}></label>
                  <textarea
                    type="text"
                    placeholder="What do you think about this product?"
                    value={comment.comment}
                    onChange={(e) =>
                      setComment({
                        ...comment,
                        comment: e.target.value,
                      })
                    }
                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                  />
                  {stars.map((_, index) => {
                    return (
                      
                      <FaStar
                        key={index}
                        size={24}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        className=" flex flex-row h-4 w-4 text-yellow-400"
                        color={
                          (hoverValue || currentValue) > index
                            ? colors.orange
                            : colors.grey
                        }
                      />
                      
                    
                    );
                  })}
                </div>
                {!comment.comment? (
                  <div className="-mr-1">
                  <button type="submit"  
                    className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
                    disabled>
                    Post comment
                  </button>
                </div>
                ):(
                  <div className="-mr-1">
                  <button type="submit"  
                    className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100">
                    Post comment
                  </button>
                </div>
                )
                
              }
                
                
              </div>
            </form>
          </div>         
        </div>
      ) : (
        
        <div >"Inicie session para comentar" </div>
      )}
    
      <div className="  flex mx-auto items-center justify-center shadow-lg mt-20 mx-8 mb-4 max-w-lg">
        <div className="px-10">
          
          {product.reviews ? (
            product.reviews.length > 0 ? (
              <div className=" ">
                {product.reviews.map((r) => {
                  return (
                    <div key={r.id} className="mt-4">
                      <p className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">{r.name}</p>
                      <p className="flex mt-2">{r.rating} ⭐</p>
                      <p className="mt-4 text-md text-gray-600">{r.comment}</p>
                    
                    </div>
                  );
                })}
              </div>
            ) : (
              <div > "Este producto no cuenta con Reviews" </div>
            )
          ) : (
            "Cargando..."
          )}
        </div>
      </div>
    </div>
    
  );
};