const router = require("express").Router()
const { uploadContent, getAllContent, getOneContent } = require("../Controllers/contentController")

router.post('/upload', uploadContent)
router.get('/contents', getAllContent)
router.get('/getContent/:id', getOneContent)

module.exports = router