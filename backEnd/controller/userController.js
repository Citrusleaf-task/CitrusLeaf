const con = require('../model/db.connect')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports = {
  taskAdd: async (req, res) => {
    try {
      const token = req.header("token");

      await jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
        if (err) {
          return createError(401, "token is not verified")
        }
        // user detail which is present inside the token 
        req.user = user;
      });

      const attachments =[ req.file];
      const attachment = attachments[0].originalname
      let user = req.user.email;
      // console.log(user)


      const { title, due_date } = req.body;
      console.log(req.body);
      const data = { title, due_date, attachment ,user }
      console.log(data)
      const sqlQuery = "INSERT INTO task SET ?";
      await con.query(sqlQuery, data, (err, result) => {
        if (err) {
          return res.json({ Error: err.sqlMessage })
        }
        res.json({ status: 200, response: result })
      })

    } catch (err) {
      return res.json({ error: err.message })
    }
  },
 

  singleUserTask: async (req, res) => {
    try {
      const token = req.header("token");

      await jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
        if (err) {
          return createError(401, "token is not verified")
        }
        // user detail which is present inside the token 
        req.user = user;
      });
      const email = req.user.email;
      const sqlQuery = "SELECT * from task WHERE user = ? ";
      await con.query(sqlQuery, email ,(err, result) => {
        if (err) {
          return res.json({ Error: err.sqlMessage })
        }
        return res.json({ status: 200, response: result })
      })
    } catch (err) {
      res.json({ error: err.message });
    }
  },
  updateById: async (req, res) => {
    try {
      const token = req.header("token");
      await jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
        if (err) {
          return createError(401, "token is not verified")
        }
        // user detail which is present inside the token 
        req.user = user;
      });
      const { title, due_date } = req.body;
      const email = req.user.email
      console.log(email)
      const data = { title, due_date };
     console.log(data)

      // const sqlQuery = "UPDATE task SET ? WHERE user = ?  ";
      await con.query("UPDATE task SET ? WHERE user = ?", [data,email],  (err, result) => {
        if (err) {
          return res.json({ Error: err.sqlMessage })
        }
        return res.json({ status: 200, response: result })
      })

    } catch (err) {
      res.send({ err: err.message });
    }
  },

  // updateById: async (req, res) => {
  //   try {
  //     const token = req.header("token");
  //     await jwt.verify(token, process.env.JWT_TOKEN);
  //     const { title, due_date } = req.body;
  //     const user = req.params;

  //     const data = { title, due_date };

  //     const sqlQuery = "UPDATE task SET ? WHERE email = ?  ";
  //     await con.query(sqlQuery, [data, user], (err, result) => {
  //       if (err) {
  //         return res.json({ Error: err.sqlMessage })
  //       }
  //       return res.json({ status: 200, response: result })
  //     })

  //   } catch (err) {
  //     res.send({ err: err.message });
  //   }
  // },

  /*
 
 Delete task by task ID
 
 */
  deleteTaskById: async (req, res) => {
    try {
      const token = req.header("token");
      await jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
        if (err) {
          return createError(401, "token is not verified")
        }
        // user detail which is present inside the token 
        req.user = user;
      });
      const email = req.user.email
      const sqlQuery = "DELETE FROM task WHERE user = ? ";
      await con.query(sqlQuery, email, (err, result) => {
        if (err) {
          return res.json({ Error: err.sqlMessage })
        }
        return res.json({ Status: 200, Message: "Task deleted successfully", result })
      })

    } catch (err) {
      res.send({ err: err.message });
    }
  },
};