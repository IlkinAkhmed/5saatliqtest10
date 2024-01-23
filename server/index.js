import express, { raw } from 'express'
import cors from "cors"
import mongoose, { connect, model } from 'mongoose'
const app = express()
const port = 4200

app.use(cors())
app.use(express.json())

const { Schema } = mongoose
const productSchema = new Schema({
    image: { type: String },
    title: { type: String },
    price: { type: Number },
})

const Products = model('5saatliqtest10', productSchema)


app.get("/products", async (req, res) => {
    try {
        const products = await Products.find({})
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params
    try {
        await Products.findByIdAndDelete(id)
        res.status(200).send("product deleted")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get("/products/:id", async (req, res) => {
    const { id } = req.params
    try {
        const product = await Products.findById(id)
        res.status(200).send(product)
    } catch (error) {
        res.status(500).send(error.message)
    }
})


app.post("/products", async (req, res) => {
    try {
        const product = new Products(req.body)
        await product.save()
        res.status(200).send("product created")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

connect('mongodb+srv://Test:test123@cluster0.ghwwmer.mongodb.net/').catch(err => console.log("db not connected", err.message))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})