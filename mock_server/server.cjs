const express = require('express')
const cors = require("cors")
const fs = require("fs")
const path = require("path")

const app = express()
const port = 3000


app.use(cors());
app.use(express.json());
app.get("/api/orders", (req, res) => {
    const dbPath = path.join(__dirname, "db.api.json");
    const db = JSON.parse(fs.readFileSync(dbPath));

    res.json({orders:db.orders});  
});
app.get("/api/products", (req, res) => {
    const dbPath = path.join(__dirname, "db.api.json");
    const db = JSON.parse(fs.readFileSync(dbPath));

    res.json({products:db.products});  
});

app.post("/api/orders", (req, res) => {
    const newProduct = req.body; 
    const dbPath = path.join(__dirname, "db.api.json");
    const db = JSON.parse(fs.readFileSync(dbPath));

    const newId = db.orders.length !==0 ? db.orders[db.orders.length - 1].id + 1 : 1;
    newProduct.id = newId;

    db.orders.push(newProduct);

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.status(201).json({
        message: "Pedido Creado con éxito",
        status:"success"
    });
});
app.post("/api/products", (req, res) => {
    const newProduct = req.body; 
    const dbPath = path.join(__dirname, "db.api.json");
    const db = JSON.parse(fs.readFileSync(dbPath));

    const newId = db.products.length !==0 ? db.products[db.products.length - 1].id + 1 : 1;
    newProduct.id = newId;

    db.products.push(newProduct);

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.status(201).json({
        message: "Prodcuts Creado con éxito",
        status:"success"
    });
});
app.put("/api/orders/:id", (req, res) => {
    const productId = parseInt(req.params.id);  
    const updatedProduct = req.body;  
    const dbPath = path.join(__dirname, "db.api.json");

    const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));

    const index = db.orders.findIndex(order => order.id === productId);

    if (index === -1) {
        return res.status(404).json({ message: "Pedido no encontrado" });
    }

    const updatedProductData = { ...db.orders[index], ...updatedProduct };

    db.orders[index] = updatedProductData;

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.json({
        message: "Pedido actualizado con éxito",
        status:"success"
    });
});
app.put("/api/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);  
    const updatedProduct = req.body;  
    const dbPath = path.join(__dirname, "db.api.json");

    const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));

    const index = db.products.findIndex(product => product.id === productId);

    if (index === -1) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }

    const updatedProductData = { ...db.products[index], ...updatedProduct };

    db.products[index] = updatedProductData;

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.json({
        message: "Producto actualizado con éxito",
        status:"success"
    });
});


app.delete("/api/orders/:id", (req, res) => {
    const productId = parseInt(req.params.id);  
    const dbPath = path.join(__dirname, "db.api.json");

    const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));

    const newProducts = db.orders.filter(order => order.id !== productId);

    if (newProducts.length === db.orders.length) {
        return res.status(404).json({ message: "Pedido no encontrado" });
    }

   db.orders = newProducts;

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.status(200).json({
        message: "Pedido eliminado con éxito",
        status:"success"
    }); 
});
app.delete("/api/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);  
    const dbPath = path.join(__dirname, "db.api.json");

    const db = JSON.parse(fs.readFileSync(dbPath, "utf8"));

    const newProducts = db.products.filter(product => product.id !== productId);

    if (newProducts.length === db.products.length) {
        return res.status(404).json({ message: "Producto no encontrado" });
    }

   db.products = newProducts;

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    res.status(200).json({
        message: "Producto eliminado con éxito",
        status:"success"
    }); 
});


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})