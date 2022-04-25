const MongoClient= require('mongodb').MongoClient;
const url="mongodb+srv://Jagadish123:Mohantym90%40@cluster0.ywlsa.mongodb.net/demo_products?retryWrites=true&w=majority"

const createProduct= async (req,res,next)=>{
    const newProduct={
        title:req.body.title,
        quantity:req.body.quantity
    }
    const client= new MongoClient(url);
    try{
        await client.connect();
        const db=client.db();
        const response= await db.collection("products").insertOne(newProduct);
        // await client.close();
        
    }catch(err){
        return res.json({message:err.message})
    };
    
    client.close();
    res.json(newProduct);

}

const allProducts= async (req,res,next)=>{
    const client= new MongoClient(url);
    let products;
    try{
        await client.connect();
        const db=client.db();
        products=await db.collection("products").find().toArray();
    }catch(err){
        return res.json({message:err.message})
    }
    client.close();

    res.json(products)
}

exports.createProduct= createProduct;
exports.allProducts= allProducts;