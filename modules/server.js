// const express = require('express')
// const app = express()


//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.listen(3000, ()=> {
    console.log(`Node API app is running on port 3000`)
})



const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Devtamin')
})
app.delete('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.listen(3000, ()=> {
    console.log(`Node API app is running on port 3000`)
})

mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://admin:12345678Admin@devtaminapi.zpncstm.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})