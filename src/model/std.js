import mongoose from "mongoose";

const stdSchema = new mongoose.Schema({
  firstname: {
    type: "string",
    required: true,
  },
  lastname:{
    type:"string",
    required: true,
  },
  address:{
    street:{
    type:"string",
    required:true,
    },
    city:
    {
        type:"string",
        required:true,
    }
  }
});

const stdModel = mongoose.model("stdinfo", stdSchema);

export default stdModel;