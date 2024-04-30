import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.header.authorization.split("")[1];
    let decoteddata;

    if (token) {
      decoteddata = jwt.verify(token, process.env.JWT_TOKEN);

      req.userId = decotedata?.id;
    } else {
      decoteddata;
    }
  } catch (error) {}
};
