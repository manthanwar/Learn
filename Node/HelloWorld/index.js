const fs = require('fs')
// const cors = require('cors')
const path = require('path')
const https = require('https');
const mysql = require('mysql');
const express = require('express')
const router = express.Router()
const exphbs = require('express-handlebars')
// const cookieParser = require('cookie-parser')
// const ammUtil = require('./code/js/utilsForm');

// global.appRoot = path.resolve(__dirname);



var app = express();

// support parsing of application/json type post data
app.use(express.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser())


// Enable All CORS Requests
// app.use(cors())

// Enable CORS for a Single Route
// app.get('/products/:id', cors(), function (req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for a Single Route' })
// })


const port = process.env.PORT || 30003


console.log(`APP PATH === ${__dirname}`)

app.use('/', express.static(path.join(__dirname, 'public')))


// console.log(path.join(__dirname, 'public', 'media', 'ico', 'bap.ico'))
// Register `hbs` as our view engine using its bound `engine()` function.

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');


// fs.readFile("test.txt", function (err, data) {
// if (err) throw err;
//     console.log(data);
// console.log(data.toString());
// });



// // Async:
// fs.readFile('test.txt', 'utf8', callback);

// // Sync:
// var content = fs.readFileSync('test.txt', 'utf8');

// Synchronous Write
// fs.writeFileSync(file, data[, options])
// fs.writeFileSync("foo.txt", "bar");

// Asynchronous Write
// fs.writeFile(file, data[, options], callback)
// fs.writeFile('foo.txt', 'bar', (err) => { if (err) throw err; });

// const stream = fs.createWriteStream('./test.txt');
// stream.write("Example text");

// if file doesn't exist create or if exists then append
// for (let i=0; i<10; i++){
//     fs.appendFileSync("junk.csv", "Line:"+i+"\n");
// }

// fs.appendFile('myFile.txt', 'Hi Ali!', function (err) {
//     if (err) throw err;
//     console.log('Thanks, It\'s saved to the file!');
// });




const hbs = exphbs.create({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    defaultLayout: 'main',
    extname: '.hbs',

    // Create Custom Healpers
    helpers: {
        calculation: function (value) {
            return value * 10
        },
        list: function (value, options) {
            let out = '<ul>';
            for (let i = 0; i < value.length; i++) {
                out = out + '<li>' + options.fn(value[i]) + '</li>';
            }
            return out + '</ul>';
        }
    }

});


app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');



app.get('/', function (req, res) {
    res.render('home', {
        title: 'Mestumre Home',
        // area: 'Health',
        // areaLink: '/health'
    });
});


app.get('/testPartial', function (req, res) {
    res.render('testPartial', {
        title: 'Mestumre Home',
        // area: 'Health',
        // areaLink: '/health'
    });
});




app.get('/join', function (req, res) {
    res.render('home', {
        title: 'Mestumre Join',
        // area: 'Health',
        // areaLink: '/health'
    });
});



// app.use('/', router)
// const loginRoute = require('./routes/login');
// router.use('/login', loginRoute);








// app.get('/look', function (req, res) {

//     res.render('lookup', {
//         title: 'I Look Up Object',
//         isTrue: true,
//         markUp: '<strong> Hi Amit </strong>',
//         user: {
//             name: 'Amit',
//             phone: '1234',
//             address: 'Pune'
//         },
//         people: [
//             'name 1',
//             'Name 2',
//             'name 3'
//         ],

//         members: [
//             { firstName: "memberFirst 1", lastName: "memberLast 1" },
//             { firstName: "memberFirst 2", lastName: "memberLast 2" },
//             { firstName: "memberFirst 3", lastName: "memberLast 3" }
//         ],

//         author: {
//             firstName: 'Amit', lastName: 'Manthanwar',
//             project: {
//                 name: 'Project Node JS'
//             }
//         }

//     })
// })


// let abtStr = '\<h2\>Hello World HOMEE!!!\</h2\>';

// app.get('/about', function (req, res) {
//     res.render('about', {
//         title: 'About Page',
//         area: 'Water',
//         abtStr: abtStr
//     });
// });





app.get('/hello', (req, res) => {
    res.send('Hello World!')
})



app.get('/kanban', function (req, res) {
    res.sendFile(path.join(__dirname, '/code/html/Kanban.html'));
});


app.get('/kan', function (req, res) {
    // res.sendFile(path.join(__dirname, '/code/html/Kanban.html'));


    let filePath = path.join(__dirname, '/code/html/Kanban.html');

    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    console.log(`File path: ${filePath}`);
    console.log(`Content-Type: ${contentType}`)

    res.writeHead(200, { 'Content-Type': contentType });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);



});

// app.use('/aaa', router)
// app.use('/', router)

// router.get('/bbb', (req, res) => {
//     res.send('<h1> Hello World! from Router </h1>')
// })

// Different Layouts
// router.get('/mmm', function (req, res) {
//     res.render('home', { layout: 'main' });
// });
// router.get('/bbb', function (req, res) {
//     res.render('home', { layout: 'backend' });
// });



// const routeMaya = require('./routes/maya');
// app.use('/maya', routeMaya);



// const routeUpload = require('./routes/upload');
// app.use('/upload', routeUpload);




// router.get('/art/maya', function (req, res) {
//     res.render('home', { layout: 'layoutMaya' });
// });



// router.get('/art/aboutMaya', function (req, res) {
//     res.render('./maya/aboutMaya', { layout: 'layoutMaya' });
// });




// router.get('/data', function (req, res) {
//     res.render('formPost', { layout: 'backend' });
// });



// router.use(express.json());
// router.use(express.urlencoded({ extended: true }));

// router.post('/data', function (req, res, next) {
//     console.log("reqIP = ", (JSON.parse(req.body.ipUser)))
//     console.log("reqIP = ", (JSON.parse(req.body.weather)))
//     // console.dir(req.body)
//     // console.log("ip = ", req.ip)
//     // console.log([1, 2, 3, 4])
//     // console.dir([1, 2, 3, 4])
//     // res.send('welcome, ' + req.body.firstName)
//     res.json({ body: req.body, weather: JSON.parse(req.body.weather) })
//     // res.json({ body: JSON.parse(req.body.weather) })
//     // res.render('formPost', { layout: 'main' });
// });



// router.get('/web', function (req, res) {

//     let url = "https://api.db-ip.com/v2/free/self";
//     let userIP = ammUtil.getUrlAsJSON(url);
//     console.log('JSON DADADADA = ', userIP)
//     res.json(userIP);

// })

app.get('*', (req, res) => {
    // res.send('Error: HTTP 404 Page Not Found');

    // res.write('<b>Error:</b> HTTP 404 Page Not Found');
    // res.write("bar");
    // res.end();
    // res.sendFile(path.join(__dirname, '/code/html/Kanban.html'));

    res.render('error404', {
        title: 'Error HTTP 404',
        // area: 'asa',
        // abtStr: abtStr
    });
})





app.listen(port, () => {
    console.log(`Mestumre app listening at http://localhost:${port}`)
})