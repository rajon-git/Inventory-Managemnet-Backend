/**
 * Date: 13/07/2023
 * Subject: Inventory Project All package require
 * Auth: Rajon
 */

let jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let Token = req.headers["token"];
  jwt.verify(Token, "jg45rt7p87ksd4oap5qv5of", (error, decoded) => {
    if (error) {
      res.status(401).json({ status: "UnAuthorized" });
    } else {
      let email = decoded["data"];
      req.headers.email = email;
      next();
    }
  });
};