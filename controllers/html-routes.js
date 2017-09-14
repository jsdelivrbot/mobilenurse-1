var path = require('path');
var db = require('../models');
// Generate a v1 UUID (time-based)
const uuidV1 = require('uuid/v1');

module.exports = function(app) {

    //// API ROUTES /////

    app.post('/api/posts', ensureAuthenticated, function(req, res) {

        String.prototype.toProperCase = function() {
            return this.toLowerCase().replace(/(^[a-z]| [a-z]|-[a-z])/g,
                function($1) {
                    return $1.toUpperCase();
                }
            );
        };

        var defaultStatus = 'pending'

        res.json(req.body);

        db.InsuranceExams.create({
            firstname: req.body.firstname.toProperCase(),
            lastname: req.body.lastname.toProperCase(),
            clientDOB: req.body.clientDOB,
            clientAge: req.body.clientAge,
            clientPhone: req.body.clientPhone,
            examLocation: req.body.locationType,
            examStreetAddress: req.body.examStreetAddress.toProperCase(),
            examAptSuite: req.body.examSuiteAptNumber,
            examCity: req.body.examCity.toProperCase(),
            examState: req.body.examState,
            examZipCode: req.body.examZipCode,
            policyAmount: req.body.policyAmount,
            examDate: req.body.examDate,
            examTime: req.body.examTime,
            examType: req.body.examType,
            gender: req.body.gender,
            examNotes: req.body.examNotes
        });
    });

    //post insurance representative profile information to database
    app.post('/api/repinfo', ensureAuthenticated, function(req, res) {

        String.prototype.toProperCase = function() {
            return this.toLowerCase().replace(/(^[a-z]| [a-z]|-[a-z])/g,
                function($1) {
                    return $1.toUpperCase();
                }
            );
        };

        res.json(req.body);
        db.InsuranceReps.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            firm: req.body.firm,
            officeAddress: req.body.officeAddress,
            repCity: req.body.repCity,
            repState: req.body.repState,
            repZipCode: req.body.repZipCode,
            repOfficePhone: req.body.repOfficePhone,
            repCellPhone: req.body.repCellPhone,
            email: req.body.repEmail,
            assistantEmail: req.body.repAssistantEmail,
            assistantPhone: req.body.repAssistantPhone
        });
    });

    app.get('/api/posts', ensureAuthenticated, function(req, res) {
        db.InsuranceExams.findAll({}).then(function(result) {
            return res.json(result);
        });
    });

    //get exam by post id
    app.get('/api/posts/:id', ensureAuthenticated, function(req, res) {
        db.InsuranceExams.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(result) {
            return res.json(result[0]);
        });
    });

    //post examiner information -- this will be used my administrators
    app.post('/api/examinerinfo/', ensureAuthenticated, function(req, res) {
        String.prototype.toProperCase = function() {
            return this.toLowerCase().replace(/(^[a-z]| [a-z]|-[a-z])/g,
                function($1) {
                    return $1.toUpperCase();
                }
            );
        };

        res.json(req.body);
        console.log(res);
        db.Examiners.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.examinerEmail,
            professionalTitle: req.body.examinerTitle,
            mobilePhone: req.body.mobileNumber,
            gender: req.body.gender,
            homeAddress: req.body.homeAddress,
            homeCity: req.body.homeCity,
            homeState: req.body.homeState,
            homeZip: req.body.homeZip,
        });
    });

    // app.get("*", ensureAuthenticated, function(req, res) {
    //   res.sendFile(path.join(__dirname + '/../index.html'));
    // });


    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated())
            return next();
        else {
            res.json({ error: 1, message: "Session Expired", data: [] })
        }
    }
};
