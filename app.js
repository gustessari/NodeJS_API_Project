const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
    const user = { id: 1, username: 'gustavo' };
    const token = jwt.sign(user, 'secret_key');
    res.json({ token });
});

app.get('/protected', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, 'secret_key', (err, user) => {
        if (err) return res.sendStatus(403);
        res.json({ message: 'Protected route accessed', user });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
