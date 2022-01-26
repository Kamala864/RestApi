const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: { 
        type: String, 
        
    },
    
    price: { 
        type: Number, 
      
    },
    quantity: {
        type: Number,
       
    },
    description: {
        type: String,
       
    },
    
    productPictures: [
        { img: { type: String } }
    ],
    reviews: [
        {
            userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String
        }
    ],
    
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    updatedAt: Date,

}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);