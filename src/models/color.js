import mongoose, {Schema} from "mongoose";

const colorSchema = new Schema({
    nombreColor:{
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 150,
    }
})
//aquí realizamos el modelo

const Color = mongoose.model('color', colorSchema);

export default Color;