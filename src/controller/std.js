import stdModel from "../model/std.js";

const stdController = {
  getAll: async (req, res) => {
    const stdall = await stdModel.find();
    return res.json(stdall);
  },
    getSingle: async (req, res) => {
        const idd=req.params.id;
        const stdid = await stdModel.findOne({_id: idd});
        return res.json({ message: "This is post request",stdid});
    },
  create: async (req, res) => {
    const postreq=req.body;
    // const firstname = req.body.firstname;
    // const lastname=req.body.lastname;
    // const street=req.body.address.street;
    // const city=req.body.address.city;
    const stdcreate = await stdModel.create(postreq);

    return res.json({ message: "student is created", stdcreate });
  },
  update: async (req, res) => {
    const updatedata=req.body;
    // const firstname = req.body.firstname;
    // const lastname=req.body.lastname;
    // const street=req.body.address.street;
    // const city=req.body.address.city;
    const updat=await stdModel.updateOne(updatedata);
    return res.json({ message: "This is post request",updat });
  },
  delete: async (req, res) => {
    const idd=req.params.id;
    const del=await stdModel.deleteOne({_id: idd});
    return res.json({ message: "This is post request",del });
  },
};

export default stdController;