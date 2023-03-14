// const express = require('express')
// const app = express()


// app.get('/', (req, res) => {
// res.status(200).send('curso de node')})

// app.get('/livros', (req, res) => {
// res.status(200).json(livros)})

// app.get('/livros', (req, res) => {
// res.status(200).send('curso de node')})
import express from "express";

const app = express();

const livros = [
  {id: 1, "titulo": "Senhor dos Aneis"},
  {id: 2, "titulo": "O Hobbit"}
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
}) 

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

export default app