import UserSchema from "./UserSchema.js";

export const createNewUser = (userObj) => {
  return UserSchema(userObj).save();
};

export const getAllUsers = () => {
  return UserSchema.find();
};

export const getUserByEmail = (email) => {
  return UserSchema.findOne({ email });
};

export const updateUser = async (filter, obj) => {
  return await UserSchema.findOneAndUpdate(filter, obj, { new: true });
};

export const deleteUser = (_id) => {
  console.log(_id);
  return UserSchema.findByIdAndDelete(_id, { new: true });
};
