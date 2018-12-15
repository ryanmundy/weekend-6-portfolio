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

module.exports = router;