var mysql = require('mysql');
var express = require("express");
var cors = require('cors')
var app = express();
app.use(express.json());
app.use(
	cors({
		origin: ['http://localhost:3000' , 'http://127.0.0.1:5502'], // add the url of your front-end's server
		credentials: true,
		sameSite: "None",
		secure: true,
	})
);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.post("/insertData", (req, res) => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "shopus"
    });
    console.log(req.body)
    let temp = req.body
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO shopus.user_details (mobile, email, username,password) VALUES ("+temp.mobile+",  '"+temp.email+"','"+temp.name+"','"+temp.password+"')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
    console.log("testing")

    res.send("success");
});

app.post("/login", (req, res) => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "shopus"
    });
    console.log(req.body)
    let temp = req.body
    var response;
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "SELECT EXISTS (SELECT * FROM shopus.user_details WHERE username = '"+temp.username+"' AND password = '"+temp.password+"') AS loginflag";
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(result);

            Object.keys(result).forEach(function(key) {
                response = result[key];
                console.log(response)
              });
              console.log("testing",response)
            res.send(response);
        });
    }); 
});

app.post("/userdetails", (req, res) => {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "shopus"
    });
    console.log(req.body)
    let temp = req.body
    var response;
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "SELECT * FROM shopus.user_details WHERE username = '"+temp.username+"'";
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(result);

            Object.keys(result).forEach(function(key) {
                response = result[key];
                console.log(response)
              });
              console.log("testing",response)
              delete response.password;
              delete response.card_details
              res.send(response);
        });
    }); 
});