const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');

const routesLogin = require('./Routes/login.router');
const routesUser = require('./Routes/user.router');
const routesCategories = require('./Routes/categories.router');
const routesPost = require('./Routes/post.router');

const app = express();

app.use(express.json());
app.use('/login', routesLogin);
app.use('/user', routesUser);
app.use('/categories', routesCategories);
app.use('/post', routesPost);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
