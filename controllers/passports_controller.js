var db = require('../models');

//Require dependencies
var passport = require('passport');
var flash = require('connect-flash');
var aws = require('aws-sdk');

aws.config.loadFromPath(__dirname + '/aws_config.json');
var ses = new aws.SES();

var User = db.User;

//passport Routes
module.exports = function(app) {
    //this is the functoin for registering a new User
    app.post('/api/register', function(req, res) {
        User.register(req.body.username, req.body.password, function(err, account) {
            if (err) {
                console.log(err);
                return res.json({error: 1, message: "You have already Registered.", data: []});
            } else {
                var params = {
                    EmailAddress: req.body.username
                };

                ses.verifyEmailAddress(params, function(err, data) {
                    if (err) {
                        res.json({error: 1, message: "Something went wrong.", data: []});
                    } else {
                        res.json({error: 0, message: "Successfully Registered, Verification Link Sent to your Mail.", data: []});
                    }
                });
            }
        });
    });


    //this is the functon for authenticating a username
    app.post('/api/login',
        passport.authenticate('local', {
            failureRedirect: '/loginfail', // redirect back to the signup page if there is an error
            failureFlash: false // allow flash messages
        }),
        function(req, res) {
            //if this function gets called, authentication was successful,
            // 'req.user' contains the authenticated user
            ses.listVerifiedEmailAddresses(function(err, data) {
                if (err) {
                    res.json({ error: 1, message: "Your credentials does not Exists. Kindly Register.", data: [] });
                } else {
                    if (data.VerifiedEmailAddresses.indexOf(req.body.username) >= 0) {
                        res.json({ error: 0, message: "Logged In", data: [req.user] })
                    } else {
                        res.json({ error: 1, message: "You have not verified Email.", data: [] })
                    }
                }
            });
        }
    );

    app.get('/loginfail', function(req, res) {
        res.json({ error: 1, message: "Invalid credentials. Kindly Register.", data: [] })
    });

    //this is the function for loggin a user out
    app.post('/api/logout', function(req,res) {
        req.session.destroy();
        res.json({ error: 0, message: "Session Expired", data: [] })
    });

}
