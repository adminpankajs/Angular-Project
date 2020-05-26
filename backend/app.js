const express = require('express');
const app = express();

const MY_ROOT = "http://localhost:4200"

const mongoose = require('./database/mongoose');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

const User = require('./database/models/user');
const Hotel = require('./database/models/hoteldetail');
const Member = require('./database/models/member');
const Book = require('./database/models/book');
const Room = require('./database/models/room');

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// textapp.get('/setcookie', function(req, res){
//   res.cookie('mycookie', 'express');
//   res.send();
// });

app.get('/setcookie', function(req, res){
  // console.log("WORKING 11111")
  // console.log("WORKING 22222")
  res.send(MY_ROOT);
});

app.get('/users', (req, res) => {
  User.find({})
  .then(users => res.send(users))
  .catch((error) => console.log(error));
  
});

app.get('/users/:userId', (req, res) => {
  User.find({ _id: req.params.userId })
    .then(users => res.send(users))
    .catch((error) => console.log(error));
});

app.post('/users', (req, res) => {
  (new User({ 'name': req.body.name, 'address': req.body.address, 'phone': req.body.phone, 'username': req.body.username, 'password': req.body.password }))
    .save()
    .then((user) => res.send(user))
    .catch((error) => console.log(error));
});

app.patch('/users/:userId', (req, res) => {
  User.findOneAndUpdate({ '_id': req.params.userId}, { $set: req.body })
    .then((user) => res.send(user))
    .catch((error) => console.log(error));
});

app.delete('/users/:userId', (req, res) => {
  User.findByIdAndDelete(req.params.userId)
    .then((user) => res.send(user))
    .catch((error) => console.log("Cannot delete"));
})

app.get('/hotel', (req, res) => {
  Hotel.find({})
  .then(hotel => res.send(hotel))
  .catch((error) => console.log(error));
  
});

app.post('/hotel', (req, res) => {
  (new Hotel({ 'name': req.body.name, 'address': req.body.address, 'email': req.body.email, 'customercare': req.body.customercare}))
    .save()
    .then((hotel) => res.send(hotel))
    .catch((error) => console.log(error));
});

app.patch('/hotel/:hotelId', (req, res) => {
  Hotel.findOneAndUpdate({ '_id': req.params.hotelId}, { $set: req.body })
    .then((hotel) => res.send(hotel))
    .catch((error) => console.log(error));
});

app.get('/member', (req, res) => {
  Member.find({})
  .then(member => res.send(member))
  .catch((error) => console.log(error));
  
});

app.post('/member', (req, res) => {
  (new Member({ 'name': req.body.name, 'designation': req.body.designation, 'joining': req.body.joining, 'wing': req.body.wing}))
    .save()
    .then((member) => res.send(member))
    .catch((error) => console.log(error));
});

app.patch('/member/:memberId', (req, res) => {
  Member.findOneAndUpdate({ '_id': req.params.memberId}, { $set: req.body })
    .then((member) => res.send(member))
    .catch((error) => console.log(error));
});

app.get('/book', (req, res) => {
  Book.find({})
  .then(book => res.send(book))
  .catch((error) => console.log(error));
  
});

app.post('/book', (req, res) => {
  (new Book({ 'username': req.body.username,'roomtype': req.body.roomtype, 'checkin': req.body.checkin, 'checkout': req.body.checkout, 'feedback': req.body.feedback}))
    .save()
    .then((book) => res.send(book))
    .catch((error) => console.log(error));
});

app.patch('/book/:bookId', (req, res) => {
  Book.findOneAndUpdate({ '_id': req.params.bookId}, { $set: req.body })
    .then((book) => res.send(book))
    .catch((error) => console.log(error));
});

app.delete('/book/:bookId', (req, res) => {
  Book.findByIdAndDelete(req.params.bookId)
    .then((book) => res.send(book))
    .catch((error) => console.log("Cannot delete"));
})

app.get('/room', (req, res) => {
  Room.find({})
  .then(room => res.send(room))
  .catch((error) => console.log(error));
  
});

app.post('/room', (req, res) => {
  (new Room({ 'roomtype': req.body.roomtype, 'stock': req.body.stock, 'range': req.body.range}))
    .save()
    .then((room) => res.send(room))
    .catch((error) => console.log(error));
});

app.patch('/room/:roomId', (req, res) => {
  Room.findOneAndUpdate({ '_id': req.params.roomId}, { $set: req.body })
    .then((room) => res.send(room))
    .catch((error) => console.log(error));
});

app.listen(3000, () => console.log("Express connection established."));

