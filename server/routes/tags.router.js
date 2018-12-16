const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // return projects
    const queryText = `SELECT * FROM "tags" ORDER BY "id" ASC`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});//end GET projects

router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO "tags" ("built_with") VALUES ($1);`;
    const queryValues = [
        newProject.built_with
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});//end POST

module.exports = router;