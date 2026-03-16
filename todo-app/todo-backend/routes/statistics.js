const express = require('express');
const { get } = require('../redis/index');

const statsRouter = express.Router();

statsRouter.get('/', async (req, res) => {
  const added_todos = await get("added_todos")
  res.json({ added_todos : Number(added_todos) || 0});
});


module.exports = statsRouter;