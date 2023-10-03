module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        IDStudent: {
            type: Sequelize.STRING
        },
        Name: {
            type: Sequelize.STRING
        },
        SrName: {
            type: Sequelize.STRING
        },
        university: {
            type: Sequelize.STRING
        },
        finish_studying: {
            type: Sequelize.BOOLEAN
        },
    });

    return Student;
};
    