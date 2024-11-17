const express = require('express')
const cors = require("cors")
const fs = require("fs")
const path = require("path")

const app = express()
const port = 3000

app.use(cors())

app.get("/api/products", (req, res) => {
    const db = JSON.parse(fs.readFileSync(path.join(__dirname, "db.api.json")))
    res.json(db)
})

app.post("/api/products", (req, res) => {
    const newProduct = req.body; 
    const dbPath = path.join(__dirname, "db.api.json");
    const db = JSON.parse(fs.readFileSync(dbPath));
    
    db.push(newProduct);

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    
    res.status(201).json(newProduct);
});

app.put("/api/products/:id", (req, res) => {
    const productId = req.params.id; 
    const updatedProduct = req.body; 
    const dbPath = path.join(__dirname, "db.api.json");
    const db = JSON.parse(fs.readFileSync(dbPath));
    
    const index = db.findIndex(product => product.id === productId);
    if (index !== -1) {
        db[index] = { ...db[index], ...updatedProduct }; 
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2)); 
        res.json(db[index]); 
    } else {
        res.status(404).json({ message: "Producto no encontrado" }); 
    }
});

app.delete("/api/products/:id", (req, res) => {
    const productId = req.params.id; 
    const dbPath = path.join(__dirname, "db.api.json");
    const db = JSON.parse(fs.readFileSync(dbPath));
    
    const newDb = db.filter(product => product.id !== productId);
    
    fs.writeFileSync(dbPath, JSON.stringify(newDb, null, 2));
    
    res.status(204).send(); 
});


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})