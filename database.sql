CREATE TABLE "tags"
(
    "id" SERIAL PRIMARY KEY,
    "built_with" varchar(255) NOT NULL
);

CREATE TABLE "projects"
(
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048),
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags"
    ("built_with")
VALUES
    ('React'),
    ('jQuery'),
    ('Node'),
    ('SQL'),
    ('Redux'),
    ('HTML');

    --Dummy data for testing

    INSERT INTO projects
    ("name", "description", "website", "github", "date_completed", "tag_id", "thumbnail")
VALUES
    ('FeedBack Portal', 'An application that allows users to collect feedback from others', 'https://nameless-dusk-53745.herokuapp.com/#/', 'https://github.com/ryanmundy/weekend-challenge-5-feedback', '2018-12-10', 1, 'images/Feedback.png');

INSERT INTO projects
    ("name", "description", "website", "github", "date_completed", "tag_id", "thumbnail")
VALUES
    ('To Do List', 'An application that allows users to manage tasks', 'https://afternoon-woodland-10344.herokuapp.com/', 'https://github.com/ryanmundy/vega-todo-app-weekend3', '2018-11-26', 2, 'images/ToDo.png');

INSERT INTO projects
    ("name", "description", "github", "date_completed", "tag_id", "thumbnail")
VALUES
    ('Gallery', 'An application that displays a photo gallery', 'https://github.com/ryanmundy/weekend-4-gallery', '2018-12-03', 1, 'images/Gallery.png');