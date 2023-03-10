const jwt = require("jsonwebtoken");
const STATUS_CODE = require("../../util/SettingSystem");

const checkToken = async (req, res, next) => {
  const accessToken = req.body.accessToken;

  if (!accessToken) {
    return res
      .status(STATUS_CODE.NOT_FOUND)
      .send({ success: false, message: "No token found!" });
  }

  try {
    await jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  } catch (error) {
    return res
      .status(STATUS_CODE.BAD_REQUEST)
      .send({ success: false, message: error.message });
  }

  next();
};

const LoginUser_checkEmpty = (req, res, next) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(STATUS_CODE.BAD_REQUEST).send({
      success: false,
      message: "Please enter all fields",
    });
  }
  next();
};

module.exports = {
  checkToken,
  LoginUser_checkEmpty,
};
