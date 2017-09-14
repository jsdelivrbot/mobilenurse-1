var io = require('socket.io')();
var db = require('./models');

module.exports.listen = function(app) {
    io.listen(app)

    io.on('connection', function(socket) {
      console.log("Connected")
        socket.on('get_exams', function() {
            db.InsuranceExams.findAll().then((data) => {
                socket.emit('exam_data', { data: data })
            })
        })

        socket.on('create_exam', function(data) {
            String.prototype.toProperCase = function() {
                return this.toLowerCase().replace(/(^[a-z]| [a-z]|-[a-z])/g,
                    function($1) {
                        return $1.toUpperCase();
                    }
                );
            };
            var defaultStatus = 'pending'
            db.InsuranceExams.create({
                firstname: data.firstname.toProperCase(),
                lastname: data.lastname.toProperCase(),
                clientDOB: data.clientDOB,
                clientAge: data.clientAge,
                clientPhone: data.clientPhone,
                examLocation: data.locationType,
                examStreetAddress: data.examStreetAddress.toProperCase(),
                examAptSuite: data.examSuiteAptNumber,
                examCity: data.examCity.toProperCase(),
                examState: data.examState,
                examZipCode: data.examZipCode,
                policyAmount: data.policyAmount,
                examDate: data.examDate,
                examTime: data.examTime,
                examType: data.examType,
                gender: data.gender,
                examNotes: data.examNotes
            }).then(data => {
                db.InsuranceExams.findAll().then((data) => {
                    socket.broadcast.emit('exam_data', { data })
                })
            });
        })

        socket.on('disconnect', function() {
            console.log("Disconnected")
        })
    })
};
