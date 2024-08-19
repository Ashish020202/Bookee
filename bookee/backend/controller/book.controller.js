import Book from "../models/book.model.js";

export default async function getBook(req,res){
    try {
        const book =await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("err",error);
        res.status(500).json(error);
    }
}