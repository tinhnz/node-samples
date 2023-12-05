# express-quickstart

```bash
npm init
npm install express
npm install --save-dev @faker-js/faker

# create a folder for source code.
mkdir src
```

Edit `package.json` file for hot reload using `npm run dev`.

```json
  "scripts": {
    // monitor for changes in src folder, start node server at index.js file.
    "dev": "node --watch-path=./src ./src/index.js",
    // other configuration...
  },
```

Start the program by running `npm run dev`. GLHF!
