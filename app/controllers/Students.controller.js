const db = require("../model");
const students = db.students;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.title){
        res.status(400).send({
            message: "Content cannot be empty!"
        })
        return;
    }

    const student = {
        IDStudent: req.body.IDStudent,
        Name: req.body.Name,
        SrName: req.body.SrName,
        university: req.body.university,
        finish_studying: req.body.finish_studying
    };

    student.create(student)
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: "Error 500!"
            });
        });
};

exports.findAll = (req, res) => {
    students.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred!"
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    students.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: "Error 404" + id
                });
            }
        })
        .catch(error => {
            res.status(500).send({
                message: "Error 500" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    students.update(req.body, { where: { IDStudent: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Updated successfully."
                });
            } else {
                res.send({
                    message: "Updated failed!"
                });
            }
        })
        .catch(error => {
            res.status(500).send({
                message: "Error update!"
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    students.destroy({ where: { IDStudent: id } })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Deleted successfully."
                })
            } else {
                res.send({
                    message: "Delete failed!"
                })
            }
        })
        .catch(error => {
            res.status(500).send({
                message: "Error deleted 500"
            });
        });
};

exports.deleteAll = (req, res) => {
    Student.destroy({
        where: {},
        truncate: false
    })
        .then(num => {
            res.send({ message: "Deleted successfully." });
        })
        .catch(error => {
            res.status(500).send({
                message: "Error 500!"
            })
        });
};