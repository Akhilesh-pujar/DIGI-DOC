var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = process.env.PORT || 9000;

//Using Scehmas to handle post and get request _____________________________________________________________________________________________
var Document = require('./models/document');
var Attendance = require('./models/attendance');

//Connecting with database _____________________________________________________________________________________________
var db = require('./db/index');
//___________________________________________________________________________________________

var docRouter = require("./routes/docRoute")
var attendRouter = require("./routes/attendRoute")
var cors = require('cors');
// const { link } = require('fs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/compose', docRouter);

app.post('/composedoc', async (req, res) => {
  titl = req.body.title;
  cont = req.body.content;
  catg = req.body.category;
  try {
    Document.insertMany({title: titl, content: cont, category: catg}, (err, data)=>{
      if (err) {
        console.log(err);
      }
    })
  } catch (err) {
    console.log(err);
  }
})

app.post('/composeattend', async (req, res) => {
  degree = req.body.degree;
  branch = req.body.branch;
  mis = req.body.mis;
  timeIn = req.body.timeIn;
  try {
    Attendance.insertMany({degree: degree, branch: branch, mis: mis, timeIn: timeIn}, (err, data)=>{
      if (err) {
        console.log(err);
      }
    })
  } catch (err) {
    console.log(err);
  }
})



app.use('/', docRouter);
app.use('/', attendRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// _______________________________________________________________________________________________________________
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {

//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(port, () => console.log(`MongoDb is Successfully Running at port http://localhost:9000`));

module.exports = app;