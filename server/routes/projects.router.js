const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // return projects
    const queryText = `SELECT "projects"."id", "projects"."name", "projects"."description",
     "projects"."thumbnail", "projects"."website", "projects"."github",
      "projects"."date_completed", "tags"."built_with"
  FROM "projects" JOIN "tags" ON "projects"."tag_id"="tags"."id";`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});//end GET projects

router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO projects ("name", "description", "website", "github", "date_completed", "tag_id")
                    VALUES ($1, $2, $3, $4, $5, $6)`;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.website,
        newProject.github,
        newProject.date_completed,
        newProject.tag_id
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((err) => {
            console.log('Error completing SELECT plant query', err);
            res.sendStatus(500);
        });
});//end POST

module.exports = router;