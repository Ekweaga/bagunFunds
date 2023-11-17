import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
username : {
    type:String,
    required:[true,"please provide email"],
    unique:true
},

email:{
    type: String,
    required:[true,"Please provide email"],
    unique:[true, "Email already exits"]
},
password:{
    type:String,
    required:[true,"Please provide a password"],
},

isVerified: {
    type: Boolean,
    default:false,
},

isAdmin: {
    type: Boolean,
    default: false
},

forgotPasswordToken :String,
forgotPasswordTokenExpiry : Date,
verifyToken: String,
verifyTokenExpiry: Date
})

const User = mongoose.models.users || mongoose.model("Users",userSchema)

export default User;