// Dependencies
const jwt = require("jsonwebtoken");

// Utils
const encrypt = require("./security");
const setBase64 = require("./security");

module.exports = createToken = async user => {
    const { id, username, password, email } = user;
    const pswd = setBase64(`${encrypt("secret")}${password}`);
    const userData = {
        id,
        username,
        email,
        password
    };

    const newToken = jwt.sign({ data: userData }, "secret", {
        expiresIn: "7d"
    });

    return Promise.all([newToken]);
};

module.exports = doLogin = async (email, password, model) => {
    const user = await model.User.findOne({
        where: { email },
        raw: true
    });

    if (!user) {
        const error = "User don`t exist";
        throw error;
    }

    if (!(encrypt(password) === user.password)) {
        const error = "Password Incorrect";
        throw error;
    }

    const [token] = await createToken(user);

    return {
        token
    };
};
