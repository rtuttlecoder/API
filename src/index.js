const express = require('express');
// const v1Router = require('./v1/routes');
const bodyParser = require('body-parser');
const apicache = require('apicache');
const v1apiRouter = require('./v1/routes/apiRoutes');
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//     res.send("<h2>It's Working!</h2>");
// });
//app.use("/api/v1", v1Router);
app.use(bodyParser.json());
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1apiRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
    V1SwaggerDocs(app, PORT);
});

