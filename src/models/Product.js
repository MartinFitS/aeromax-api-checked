import { Schema, model } from "mongoose";

const productSchema = new Schema({
    nameOfProduct: {
        type: String,
        required:true,
        unique: true,
        trim: true
    },
    price:{
        type: Number,
        required:true,
    },
    img:{
        type:String,
        required:true, 
    },
    category:{
        type: String,
        required: true
    }
},{
    timestamps:true,
    versionKey: false
});

export default model("Product", productSchema);

