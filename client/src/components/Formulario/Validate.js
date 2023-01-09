 export default function validate(input, products){
     let errors = {};
     let RegExpression = /^[a-zA-Z\s]*$/;  

    if(!input.name){
        errors.name = 'A name is required'
    }

    if(products.indexOf( input.name ) !== -1){
        errors.name = 'A product with that name is already existing'
    }

    if(!RegExpression.test(input.name)){
        errors.name = 'Numbers or special characters are not allowed'
    }

    if(input.name.length > 100){
        errors.name = `Product name can not be longer than 100 character`
    }

    //////////////////////////////////////////////////77
    if(!input.price){
        errors.price = 'Product price is required'
    }

    if(input.price){
        if(input.price > 5 ){
            errors.price = 'Product price can not exceed 5 digits'
        }
    }

    ///////////////////////////////////////////////////////
    if(!input.description){
            errors.description = 'The description  is required'
        
    }
    ////////////////////////////////////////////////////////77
    if(!input.rating){
        errors.rating = 'The rating is required'
    }

    if(input.ratings){
        if(input.ratings < 1 ){
            errors.ratings = 'The ratings  must be higher than 0'
        }
    } 
///////////////////////////////////////////////
    if(!input.images){
       
            errors.images = 'The images is required'
    }
    //////////////////////////////////////////77
    if(!input.category){
    
            errors.category = `The category  must be 'Electronics','Cameras','Laptops','Accessories',
            'Headphones','Consoles','Television','VideoGames','Home'`

    }
    ////////////////////////////////////////////7
    
    if(input.seller){
    
            errors.seller = 'The seller is required'

    }
    //////////////////////////////////////////////
    if(input.stock){
    
            errors.stock = 'The stock can no be bigger than 5 digits'

    }
    /////////////////////////////////////////////////
        if(input.numOfReviews){
    
            errors.numOfReviews = 'The numOfReviews  is required'

    }
    return errors;

 }

 /////////////////////////////////////////
//{
//  name: {
//         type: String,
//         maxLength: [100, 'Product name can not be longer than 100 character'],
// },
// price: {
//         type: Number,
//         required: [5, 'Product name can not exceed 5 digits'],
//         default: 0.0,
// },
// description: {
//         type: String,
// },
// ratings: {
//         type: Number,
//         default: 0,
// },
// images: {
//         type: String,},

// category: {
//         type: String,
//         enum: {values: ['Electronics','Cameras','Laptops','Accessories',
//                         'Headphones','Consoles','Television','VideoGames','Home'], },
// },
//seller: {type: String,},
// stock: {
//         type: Number,
//         required: [true, 'Please enter a stock value'],
//         maxLength: [5, 'Product can no be bigger than 5 digits'],
//         default: 0,
// },
// numOfReviews: {
//         type: Number,
//         default: 0,
// },
// reviews: [
//         { name: {type: String, },
//                 rating: {type: Number},
//                 comment: {type: String,},},],
// state: Boolean
// }     