const express = require("express");
const faker = require("faker");
const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      title: faker.lorem.word(),
      authorImg: faker.image.avatar(),
      author: faker.name.firstName() + " " + faker.name.lastName(),
      authorProfile:
        "@" +
        faker.name.firstName().toLowerCase() +
        faker.name.lastName().toLowerCase(),
      content: faker.lorem.sentences(),
      time: faker.date.recent(),
    },
  ];
  res.json({ posts: posts });
});

module.exports = app;
