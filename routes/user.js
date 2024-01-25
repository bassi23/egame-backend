const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const User = require('../model/user');

/* GET all users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  User.find({}, (err, result) => {
    if (err) return console.error(err)
    try {
      console.log(result);
      res.json(result);
    } catch (error) {
        console.log("error getting results", error)
    }
  });
});

/* GET user by id */
router.get('/:id', function(req, res, next) {
  // res.send('respond with a resource');
  const id = req.params.id
  User.findById(id)
  .lean().exec(function (err, results) {
    if (err) return console.error(err)
    try {
        console.log(results)
        res.json(results);
    } catch (error) {
        console.log("error getting results", error)
    }
})
});

/* Update user's listing. */
router.post('/levels', function(req, res, next) {
  User.findByIdAndUpdate(req.body.username, {
      _id: req.body.username,
      [req.body.level]: req.body.data,
    }, {
      new: true, upsert: true
    }, function (err, response) {
      // Handle any possible database errors
      if (err) {
        console.log("we hit an error" + err);
        res.json({
          message: 'Database Update Failure'
        });
      }
      console.log("This is the Response: " + response);
    }
  );

  // const user = new User({
  //   _id: mongoose.Types.ObjectId(),
  //   level1_1: req.body.level1_1,
  // })

  // user.save().then(result => {
  //   console.log(result);

  //   res.status(200).json({
  //     message: result,
  //   });
  // }).catch(err => {
  //   console.log(err);

  //   res.status(500).json({
  //     message: err,
  //   });
  // });

});

module.exports = router;
