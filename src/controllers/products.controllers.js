import Product from "../models/Product";

export const renderIndex =  async(req,res)=>{
    res.render("aeromaxHub")

}

export const renderAeromax = async(req,res)=>{
    const products = await Product.find().lean();

    res.render("index.hbs", {products: products});
}

// export const renderIndex =  async(req,res)=>{

//     const products = await Product.find().lean();

//     res.render("index.hbs", {products: products});
// }

// export const renderAeromax = async(req,res)=>{
//     res.render("aeromaxHub")
// }

export const addProduct = async (req,res)=>{
    const product = Product(req.body);

    const productSaved = await product.save()
    console.log(productSaved);
    
    res.redirect("/aeromax-server");
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
    res.redirect("/aeromax-server");
}

export const deleteProduct = async(req,res)=>{
    const {id} = req.params;

    await Product.findByIdAndDelete(id);

    res.redirect("/aeromax-server")
}

export const allProducts = async(req,res)=>{
    const products = await Product.find().lean();
    res.json(products);
}