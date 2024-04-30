import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.header.authorization.split("")[1];
    let decodeddata;

    if (token) {
      decodeddata = jwt.verify(token, process.env.JWT_TOKEN);
      req.userId = decotedata?.id;
    } else {
      decodeddata = jwt.decode(token);
      req.userId = decodeddata?.sub;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default { auth };
