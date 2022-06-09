import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
    try {
        console.log("Inside User update")
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateUser)
    } catch (error) {
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        console.log("Inside User delete")
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    try {
        console.log("Inside User update")
        const user = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const getAllUser = async (req, res, next) => {
    try {
        console.log("Inside User get all")
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}