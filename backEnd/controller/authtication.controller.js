const con = require("../model/db.connect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  register: async (req, res) => {
    try {
      let { name, email, password } = req.body;

      const sqlQuery = "SELECT email FROM user WHERE email = ?";
      const emailSearch = await con.query(sqlQuery, email, (err, result) => {
        if (err) {
          return res.json({ Error: err.sqlMessage });
        }
        // return res.json({ Status: 200, response: "user with this mail id already exists" })
      });
      const salt = await bcrypt.genSalt(12);
      const Secpass = await bcrypt.hash(password, salt);
      password = Secpass;
      const data = { name, email, password };
      console.log(name, email, password);
      const SqlUserAdd = "INSERT INTO user SET ?";
      await con.query(SqlUserAdd, data, (err, result) => {
        if (err) {
          return res.json({ Error: err.sqlMessage });
        }
        return res.json({
          status: 200,
          response: "Successfully registered",
        });
      });
    } catch (err) {
      res.send({ Error: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const sqlQuery = "SELECT * FROM user WHERE email = ?";
      const emailSearch = await con.query(
        sqlQuery,
        email,
        async (err, result) => {
          if (err) {
            return res.json({ Error: err.sqlMessage });
          }
          console.log(result[0].password);
          const passwordCompare = await bcrypt.compare(
            password,
            result[0].password
          );
          // console.log(emailSearch)
          console.log(passwordCompare);
          if (!passwordCompare) {
            return res.josn({ Error: "Password not matched" });
          }
          const jwtToken = await jwt.sign({ email }, process.env.JWT_TOKEN, {
            expiresIn: "24h",
          });
          return res.json({
            status: 200,
            response: "Successfully loged in",
            token: jwtToken,
          });
        }
      );
    } catch (err) {
      res.send({ err: err.message });
    }
  },
};
