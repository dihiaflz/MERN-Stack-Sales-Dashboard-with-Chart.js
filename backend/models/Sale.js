const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    category: { 
        type: String,
        required: true 
    }, 
    amount: { 
        type: Number, 
        required: true 
    },    
    month: { 
        type: String, 
        required: true 
    },     
    year: { 
        type: Number, 
        required: true 
    }
});

module.exports = mongoose.model('Sale', saleSchema);
