const mongoose = require('mongoose');
export const categorySchema = new mongoose.Schema(
    {
        name : {
            type : String , 
            required : true
        },
        description : {
            type : String
        }
    }
)


