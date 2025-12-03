const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.engine("hbs", engine({
    extname: ".hbs",
}));

app.set("view engine", "hbs");

// mac dinh view/layput/main
app.set("views", "./views");

app.get('/', function (req, res) {
    res.render("home", {name: "Khanh", age: 20});
    console.log('test ok');
});

app.listen(port, () => {
    console.log(`Server running on prot http://localhost:${port}`);
    
});