var customer = sequelize.define("customer", {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: type.STRING,
        allowNull: false
    },
    last_name: {
        type: type.STRING,
        allowNull: false
    },
    email: {
        unique: true,
        type: type.STRING,
        allowNull: false
    },
    phone_no: {
        unique: true,
        type: type.STRING,
        allowNull: false
    },
    // username: {
    //     unique: true,
    //     type: type.STRING,
    //     allowNull: false
    // },
    password: {
        type: type.STRING,
        allowNull: false
    }
});
// var SE = sequelize.define("student_enrolled", {
//     id: {
//         type: type.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
// });
// User.hasMany(SE);
// Course.hasMany(SE);
// SE.belongsTo(User);
// SE.belongsTo(Course);
// return {
//     user: User,
//     course: Course,
//     student_enrolled: SE
// };