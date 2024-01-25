const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const User = require('../model/register');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST new user listing. */
router.post('/', function(req, res, next) {
  const user = new User({
    // _id: mongoose.Types.ObjectId(),
    _id: req.body.username,
  });

  // user.save(function (err, newUser) {
  //   if (err) return console.error(err)
  //   else {
  //     console.log(newUser + " saved to the collection.");
  //     res.status(200).json({
  //       message: newUser,
  //     });
  //   }
  // });

  user.save().then(result => {
    console.log(result);

    res.status(200).json({
      message: result,
    });
  }).catch(err => {
    console.log(err);

    res.status(500).json({
      message: err,
    });
  });

});

module.exports = router;
