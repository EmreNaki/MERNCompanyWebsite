import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{ type:String, required:true},
    adress:{ type:String, required:true},
    text:{ type:String, required:true},
    images: [{ type: String }],
    done: { type: Boolean, default: false },

    startDate: { type: Date, required: true },   // new field
    finishDate: { type: Date },                  // new field, optional

    createdAt : {type:Date, default:Date.now}

})

const Project = mongoose.model("Project", projectSchema);

export default Project;