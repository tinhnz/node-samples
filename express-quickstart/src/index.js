const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
const port = 3000;

function createRandomFile() {
  return {
    id: faker.string.uuid(),
    name: faker.lorem.words({ min: 1, max: 4 }),
    isFolder: faker.helpers.arrayElement([true, false]),
    isFavorite: faker.helpers.arrayElement([true, false]),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    createdBy: faker.helpers.arrayElement(['me', faker.internet.email()]),
    updatedBy: faker.helpers.arrayElement(['me', faker.internet.email()]),
  };
}

const generateFiles = () => {
  return Array.from(Array(10)).map(() => createRandomFile());
};

const files = generateFiles();

app.get('/api/v1/login', (req, res) => {
  res.send({ accessToken: 'tom', refreshToken: 'jerry' });
});

app.get('/api/v1/files', (req, res) => {
  res.send(files);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
