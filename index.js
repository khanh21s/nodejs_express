/*

Author: Khanhsdv

*/
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./src/routes/index.route.js');
const db = require('./src/config/db/index.js');
const methodOverride = require('method-override');
const app = express();
const port = 3000;


// middleware
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// connect to db
db.connectToDatabase();

app.engine("hbs", engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    helpers: {
        json: context => JSON.stringify(context, null, 2),
        inc: function(a, b){
            return a + b;
        }
    }
}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'src/views'));

app.get('/', function (req, res) {
    res.render("home", { name: "Khanh", age: 20 });
    console.log('test ok');
});

route(app);


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});