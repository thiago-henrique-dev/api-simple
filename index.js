const express = require('express')

const server = express();

server.use(express.json());

const course = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Yotube']

//retorna um curso por ID
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params
    return res.json(course[index])
})

//retorna todo os cursos
server.get('/cursos', (req, res) => {
    return res.json(course)
})

//criar um novo curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    course.push(name)

    return res.json(course);
})

//atualizar um cursos
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    course[index] = name;

    return res.json(course)
})

//deletar cursos

server.delete('/cursos/:index', (req, res) => {
     const { index } = req.params
     course.splice(index, 1)
     return res.json({message: "O curso foi deletado"})
})

server.listen(3000);
