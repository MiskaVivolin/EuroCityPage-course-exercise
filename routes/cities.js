const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Main page")
})

router.get("/Amsterdam", (req, res) => {
    res.render("Amsterdam")
})
router.get("/Ateena", (req, res) => {
    res.render("Ateena")
})
router.get("/Barcelona", (req, res) => {
    res.render("Barcelona")
})
router.get("/Berliini", (req, res) => {
    res.render("Berliini")
})
router.get("/Budapest", (req, res) => {
    res.render("Budapest")
})
router.get("/Dublin", (req, res) => {
    res.render("Dublin")
})
router.get("/Helsinki", (req, res) => {
    res.render("Helsinki")
})
router.get("/Kiova", (req, res) => {
    res.render("Kiova")
})
router.get("/Lissabon", (req, res) => {
    res.render("Lissabon")
})
router.get("/Lontoo", (req, res) => {
    res.render("Lontoo")
})
router.get("/Madrid", (req, res) => {
    res.render("Madrid")
})
router.get("/Oslo", (req, res) => {
    res.render("Oslo")
})
router.get("/Pariisi", (req, res) => {
    res.render("Pariisi")
})
router.get("/Praha", (req, res) => {
    res.render("Praha")
})
router.get("/Rooma", (req, res) => {
    res.render("Rooma")
})
router.get("/Tukholma", (req, res) => {
    res.render("Tukholma")
})
router.get("/Varsova", (req, res) => {
    res.render("Varsova")
})
router.get("/Vienna", (req, res) => {
    res.render("Vienna")
})



router.use(express.static(__dirname))

module.exports = router