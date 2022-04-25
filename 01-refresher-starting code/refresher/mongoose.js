const mongoose= require('mongoose');

const Product= require('./models/product');
mongoose.connect("mongodb+srv://Jagadish123:Mohantym90%40@cluster0.ywlsa.mongodb.net/demo_products?retryWrites=true&w=majority").then(()=>{
    console.log("Successfully connected with database")

}).catch((err)=>{
    console.log("Could not connect with database")
})
const createProduct= async (req,res,next)=>{
    const newProducts= new Product({
        title:req.body.title,
        quantity:req.body.quantity,
    })
    const result= await newProducts.save();

    res.json(result);
}
const allProducts= async (req,res,next)=>{
    
    const result= await Product.find().exec();;

    res.json(result);
}

exports.createProduct=createProduct;
exports.allProducts=allProducts;