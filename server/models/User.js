import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {  //Object
      type: String,  //properties
      required: true,
      min: 2,  //validation check
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true } //autpmatic dates
);

const User = mongoose.model("User", UserSchema);
export default User;