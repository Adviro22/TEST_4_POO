import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
   {
     nombre: { type: String, required: true, unique: true },
     precio: { type: Number, required: true },
     stock: { type: Number, required: true },
     date: {type: Date, default: Date.now },
     user: {type: mongoose.Types.ObjectId, ref: "User"},
   },
   {
    timestamps: true,
   }
    
);

//export default mongoose.model("estudiante", studentSchema);
export default mongoose.model("product", studentSchema);
