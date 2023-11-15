// build your `/api/projects` router here
// eslint-disable-next-line no-unused-vars
const e = require('express');
// eslint-disable-next-line no-unused-vars
const express = require('express'); 
const router = require('express').Router();
const Project = require('./model');

router.get('/', async (req, res, next) => {
    try {
      const allProjects = await Project.getProjects()
      res.json(allProjects)
    } catch(err) {
      next(err)
    }
  })


  router.get('/:id', async (req, res, next) => {
    try {
      const {id} = req.params;
      Project.getProjectById(id)
      .then(project => {
        if(project) {
          res.json(project)
        } else {
          res.status(404).json({
            message: "Could not find project with specified ID"
          })
        }
      })
    } catch(err) {
      next(err)
    }
  })
  
  router.post('/', (req, res, next) => {
    Project.addProject(req.body)
       .then(project_id => {
            res.status(201).json(project_id)
        })
        .catch(next);
  });





router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the projects router',
        message: err.message,
        stack: err.stack
    })
})


module.exports = router;




















