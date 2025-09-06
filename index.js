const express = require('express');

const app = express();
const PORT = 3000;

const todos = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Todo ${i + 1}`,
    completed: false,
}));

app.get('/todos', (req, res) => {
    res.json(todos.slice(0, 30));
});

app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(todo);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});