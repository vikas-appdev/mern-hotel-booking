import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    console.log("Inside hotel Create")
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        console.log("Inside hotel update")
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateHotel)
    } catch (error) {
        next(error)
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        console.log("Inside hotel delete")
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        next(error)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        console.log("Inside hotel update")
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

export const getAllHotel = async (req, res, next) => {
    try {
        console.log("Inside hotel get all")
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}