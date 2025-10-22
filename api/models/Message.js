import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    mail:{ type:String, required:true},
    name:{ type:String, required:true},
    text:{ type:String, required:true},
    createdAt : {type:Date, default:Date.now}

})

//module.exports = mongoose.model("Message", messageSchema)
const Message = mongoose.model("Message", messageSchema);

export default Message;