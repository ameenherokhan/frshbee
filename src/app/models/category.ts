import { Schema,model } from 'mongoose';


const CategorySchema = new Schema ({
    categoryName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    isLive: {//must not be hidden
        type: Boolean,
        required: true,
        default: true
    },
});


export const Category = model('Category', CategorySchema)
