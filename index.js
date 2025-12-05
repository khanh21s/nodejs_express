const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

// middleware
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine("hbs", engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, 'src/views/layouts')
}));

app.set("view engine", "hbs");


app.set("views", path.join(__dirname, 'src/views'));

app.get('/', function (req, res) {
    res.render("home", {name: "Khanh", age: 20});
    console.log('test ok');
});

app.listen(port, () => {
    console.log(`Server running on prot http://localhost:${port}`);
    
});