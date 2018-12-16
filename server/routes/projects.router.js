const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET route for current projects
router.get('/', (req, res) => {
    // return projects
    const queryText = `SELECT "projects"."id", "projects"."name", "projects"."description",
     "projects"."thumbnail", "projects"."website", "projects"."github",
      "projects"."date_completed", "tags"."built_with"
  FROM "projects" JOIN "tags" ON "projects"."tag_id"="tags"."id"
  ORDER by "projects"."name" ASC;`;
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


//POST route for adding new project
router.post('/', (req, res) => {
    const newProject = req.body;
    const queryText = `INSERT INTO projects ("name", "description", "website", "github", "date_completed", "tag_id", "thumbnail")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.website,
        newProject.github,
        newProject.date_completed,
        newProject.tag_id,
        newProject.thumbnail
    ];
    pool.query(queryText, queryValues)
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
});//end POST

//DELETE route for removing project by id
router.delete('/:id', (req, res) => {
    const reqId = req.params.id;
    console.log('route id: ', reqId);
    const query = `DELETE FROM "projects" WHERE id=$1`;
    pool.query(query, [reqId])
        .then(() => {
            res.sendStatus(200);
        }).catch(error => {
            console.log(error);
            res.sendStatus(500);
        });
});//end DELETE

module.exports = router;