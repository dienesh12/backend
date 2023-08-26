const Content = require("../Models/contentModel")

const uploadContent = async (req, res) => {
    const {title, description, thumbnail, video} = req.body

    if(!title || !description) {
        res.status(400)
        res.send("Title and Description is Mandatory!")
    } else {
        const newContent = await Content.create({
            title,
            description,
            thumbnail,
            video
        })

        if(newContent) {
            res.status(200)
            res.json(newContent)
        } else {
            res.status(400)
            res.send("Content Upload Failed!")
        }
    }
}

const getAllContent = async (req, res) => {
    try {
        const allContents = await Content.find()
        
        res.status(200)
        res.send(allContents)
    } catch (error) {
        res.status(500)
        res.send("Not able to send all content")
    }
}

const getOneContent = async (req, res) => {
    try {
        const id = req.params.id
        const curContent = await Content.findOne({ "_id": id })

        console.log(curContent)
        res.status(200)
        res.send(curContent)
    } catch (error) {
        res.status(500)
        res.send("Not able to send the content!")
    }
}

module.exports = { uploadContent, getAllContent, getOneContent }