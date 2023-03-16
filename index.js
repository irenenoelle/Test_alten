const express = require('express');
const app = express();
const port = 3000;

// Read json file
const path = require('path')
const jsonpath = path.resolve(__dirname + "/front/src/assets/products.json")

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

require("./back/route.js")(app);

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});
