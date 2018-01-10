const express = require("express");
const router = express.Router();
const pokemon = require("../models/pokemon.js");



// Index Route
router.get("/", (req, res) => {
	// res.send(pokemon);
	// console.log("Hit the index route");

	res.render("index.ejs", {
		pokemon: pokemon
	})
});


// Create New Route
router.get("/new", (req, res) => {
	// console.log("Hit the ceate new route");
	// res.send("Create new poke")

	res.render("new.ejs")
})

router.post("/", (req, res) => {
	
	const newPoke = {
		name: req.body.name,
		img: req.body.img,
		type: [
			req.body.types,
		],
		stats: {
			hp: req.body.hp,
			attack: req.body.attack,
			defense: req.body.attack
		}
	}

	pokemon.push(newPoke)
	res.redirect("/pokemon/")
})


// character route
router.get("/:index", (req, res) => {
	// res.send(pokemon[req.params.index])
	// console.log("Hit the char route")

	res.render("show.ejs", {
		pokemon: pokemon[req.params.index]
	})
})



module.exports = router