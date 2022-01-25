import Product from "../models/Product";

export const renderIndex =  async(req,res)=>{

    const products = await Product.find().lean();

    res.render("index.hbs", {products: products});
}

export const addProduct = async (req,res)=>{
    const product = Product(req.body);

    const productSaved = await product.save()
    console.log(productSaved);
    
    res.redirect("/")
}

export const renderEdit = async (req,res)=>{
    try{
     const product = await Product.findById(req.params.id).lean();
 
     res.render("edit", {product:product})
    }catch(e){
        console.log(e)
    }
}

export const editProduct =  async(req,res)=>{
    await Product.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/");
}

export const deleteProduct = async(req,res)=>{
    const {id} = req.params;

    await Product.findByIdAndDelete(id);

    res.redirect("/")
}