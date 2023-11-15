// build your `/api/resources` router here
// eslint-disable-next-line no-unused-vars
const e = require('express');
// eslint-disable-next-line no-unused-vars
const express = require('express');
const router = require('express').Router();
const Resource = require('./model');

router.get('/', async (req, res, next) => {
  try {
    const allResources = await Resource.getResources()
    res.json(allResources)
  } catch(err) {
    next(err)
  }
})


router.get("/:id/resources", async (req, res, next) => {
  try {
    const { id } = req.params
    Resource.getResources(id)
      .then(resource => {
        if (resource) {
          res.json(resource)
        } else {
          res.status(404).json({
            message: "Could not find resources with the given ID."
          })
        }
      })
  } catch(err) {
    next(err)
  }
})




router.post('/', (req, res, next) => {
  Resource.addResource(req.body)
     .then(resource => {
          res.status(201).json(resource)
      })
      .catch(next);
});


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the resources router',
        message: err.message,
        stack: err.stack
    })
})


module.exports = router;
