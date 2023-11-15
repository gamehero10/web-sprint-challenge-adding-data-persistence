// build your `/api/tasks` router here
const router = require('express').Router();
const Task = require('./model');



router.get('/', async (req, res, next) => {
    try {
      const allTasks = await Task.getTasks()
      res.json(allTasks)
    } catch(err) {
      next(err)
    }
  })


  router.post('/', (req, res, next) => {
    Task.addTask(req.body)
       .then(task => {
            res.status(201).json(task);
        })
        .catch(next);
  });
  


module.exports = router;
