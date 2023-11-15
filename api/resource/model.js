// build your `Resource` model here
const db = require('../../data/dbConfig');


function getResources() {
    return db('resources as r')
    .select('r.resource_id', 'r.resource_name', 'r.resource_description')
}


function getProjectResources(project_id) {
    return db("projects as p")
      .where("p.project_id", project_id)
      .select("p.project_id", "r.resorce_name as resouces")
      .innerJoin("projects_resources as pr", "p.project_id", "pr.project_id")
      .innerJoin("resources as r", "pr.resource_id", "r.resource_id")
  }


function addResource(resource) {
    return db('resources').insert(resource)
    .then(([resource_id]) => {
        return db('resources').where('resource_id', resource_id).first()
       })
}













module.exports = {
    getResources,
    getProjectResources,
    addResource
}