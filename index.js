const express = require('express');
const bodyparser = require('body-parser');
const db = require('./queries');
const app = express();
const port = 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.json({
        "info": "PostgreSQL + Express API"
    });
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('users/:id', db.updateUser);
app.delete('users/:id', db.deleteUser);

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}/`);
});
