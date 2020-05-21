const express = require("express");

let router = express.Router();

const burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let burgers = {
            burgers: data
        };

        res.render("index", burgers);
    });

    
});

router.post("/api/burgers", function(req, res) {
    console.log("hey");
    burger.insertOne(req.body.burgerName, function(data) {
        res.json({id: data.insertId});
    })
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    burger.updateOne(
        
        condition,
        function(data) {
            if (data.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )
});

module.exports = router;

