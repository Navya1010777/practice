const express = require('express');
const products = require("./products.json")

const app = express();
app.use(express.json());

app.get("/api/v1/products/list", (req,res) => {
    res.json(products);
});
app.post("/api/v1/cart", (req,res) => {
    const cart = req.body;
    var cost = 0;
    products.map((product)=>{
        if(product.id == cart.product_id){
            cost += product.price * cart.quantity;
        }
    });
    res.status(200).send(cost.toString());
});

app.listen(3000, () => {
    console.log("Listening on port 3000.")
})