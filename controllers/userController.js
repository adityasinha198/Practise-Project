const userSchema = require('../models/userModelSchema')



const getuser = async(req,res)=>{

try{
    const info = await userSchema.find()

    res.json({
        success:true,
        data:info
    })

}

catch(err){

    res.json({
        success:false,
    message:`Error-${err.message}`
    })


}

}



const adduser = async (req, res) => {

    console.log('hello')
    console.log(req.body);
  
    const cruddata = new userSchema(req.body);

    try {
      const data = await cruddata.save();
      res.json({
        status: "Succesfull",
        value: data,
      });
    } catch (err) {
      res.json({
        status: "Fail",
        error: err.message,
      });
    }
  };



  const upadateuser = async (req, res) => {
    const id = req.params.id;
  
    try {
      const value = await userSchema.findByIdAndUpdate(req.params.id, req.body);
  
      res.json({
        status: "Successfull",
        data: value,
      });
    } catch (err) {
      res.json({
        sucess: "false",
        msg: `Error-${err.message}`,
      });
    }
}



const deleteuser = async (req, res) => {
    const id = req.params.id;
    try {
      const delval = await userSchema.findByIdAndDelete(req.params.id);
  
      res.json({
        status: "successfull",
        data: delval,
      });
    } catch (err) {
      res.json({
        sucess: "false",
        msg: `Error-${err.message}`,
      });
    }
  }




  



module.exports = {
    getuser ,
    adduser,
    upadateuser,
    deleteuser
}