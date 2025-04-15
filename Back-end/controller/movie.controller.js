const moviesModel = require("../model/movie.model")

const getMovies = async (req, res) => {
    try {
        const data = await moviesModel.find()
        res.status(200).json({
            length: data.length,
            data,
            message: "Fetched Successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

const AddMovies = async (req, res) => {
    const data = req.body
    if (!data.Title || !data.Genre || !data.Director || !data.Release_Year || !data.Description || !data.Image) {
        return res.status(400).json({
            message: "please fill all the fields"
        })
    }
    try {
        const newMovie = new moviesModel(data)
        newMovie.save()
        res.status(200).json({
            message: "Movie Added successfully",
            data
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}


const DeleteMovie = async (req, res) => {
    const id = (req.params.id)
    console.log(id)
    try {
        await moviesModel.findByIdAndDelete({ _id: id })
        res.status(200).json({
            message: "Deleted SuccessFull"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}
const UpdateMovie = async (req, res) => {
    const id = req.params.id;
    const data = req.body
    try {
        const updatedMovie = await moviesModel.findByIdAndUpdate(id, data)
        if (updatedMovie === null) {
            res.status(400).json({
                message: "no Movie Found"
            })
        }
        res.status(200).json({
            message: "updated SuccessFully",
            movie: data
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
module.exports = { getMovies, AddMovies, DeleteMovie, UpdateMovie }