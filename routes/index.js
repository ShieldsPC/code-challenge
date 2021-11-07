const express = require("express");
const router = express.Router();
const data = require("../data/sample.json");

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", {
		title: "Express"
	});
});

router.get("/data", function(req, res, next) {
	res.json(data);
})

//Test Connection
router.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
});

//Get by ID
router.get("/data/:loanId", function (req, res, next) {
    res.json(
        data.find(l => l.id == req.params.loanId)
    );
});

router.get("/data/loan", function (req, res, next) {
    res.json(
        data.find(l => l.id == req.query.loanId)
    );
});

module.exports = router;