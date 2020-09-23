const cont = require("../controllers/appController");

module.exports = () => {
    var router = require("express").Router();

    router.get("/", function (req, res) {
        res.json({
            message: "hooray! welcome to our api!"
        });
    });

    router
        .route("/courses")
        .post(function (req, res) {
            cont.addCourse(req, res);
        })
        .get(function (req, res) {
            cont.getCourses(req, res);
        });

    router
        .route("/courses/:courses_id")
        .get(function (req, res) {
            if (isNaN(+req.params.courses_id)) return res.status(400).json({
                error: "invalid type of course id"
            });
            cont.getCourseById(req, res);
        });

    router
        .route("/students")
        .get(function (req, res) {
            cont.getUsers(req, res);
        });

    router
        .route("/courses/:courses_id/enroll")
        .post(function (req, res) {
            if (isNaN(+req.params.courses_id)) return res.status(400).json({
                error: "invalid type of course id"
            });
            var data = req.body.studentId;
            if (!Number.isInteger(data)) return res.status(400).json({
                error: "invalid type of student id"
            });
            cont.enroll(req, res);
        });

    router
        .route("/courses/:courses_id/deregister")
        .post(function (req, res) {
            if (isNaN(+req.params.courses_id)) return res.status(400).json({
                error: "invalid type of course id"
            });
            var data = req.body.studentId;
            if (!Number.isInteger(data)) return res.send("invalid body");
            cont.disenroll(req, res);
        });



};