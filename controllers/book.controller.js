import Book from "../schema/books.schema.js"

export const createBook = async (req, res) => {

    const title = req.body.title
    const price = req.body.price
    const image = req.body.image
    const author = req.body.author
    const description = req.body.description
    const categories = req.body.categories

    try {

        const items = await Book.create({ title, price, image, author, description, categories })

        res.json(items)

    } catch (error) {
        console.log(error)
    }


}
export const getBook = async (req, res) => {


    try {

        const getitems = await Book.find({})

        res.send(getitems)

    } catch (error) {
        console.log(error)
    }


}
export const getId = async (req, res) => {


    try {

        const getitems = await Book.findById(req.params.id)

        res.send(getitems)

    } catch (error) {
        console.log(error)
    }


}
export const remove = async (req, res) => {


    try {

        await Book.findByIdAndDelete(req.params.id)

        res.send("delete")

    } catch (error) {
        console.log(error)
    }


}
export const update = async (req, res) => {


    try {

        const updateBook = await Book.findByIdAndUpdate(req.params.id, { title: req.body.title, price: req.body.price, description: req.body.description, author: req.body.author, categories: req.body.categories },{
            new:true
        })

        res.json(updateBook)

    } catch (error) {
        console.log(error)
    }


}



