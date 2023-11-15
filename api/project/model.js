// build your `Project` model here
const db = require('../../data/dbConfig');

function getProjects() {
    return db('projects as p')
    .select('p.project_id', 'p.project_name', 'p.project_description', 'p.project_completed')
    .then(projects =>
      projects.map((project => {
        return {...project, project_completed: project.project_completed ? true : false}
      }))
    )
    
    

    
}

async function getProjectById(project_id) {
    return db("projects as p")
      .select("p.project_id", "p.project_name", "p.project_description", "p.project_completed")
      .where("p.project_id", project_id)
}

  

  function addProject(project) {
     return db('projects').insert(project)
    .then(([project_id]) => {
     return db('projects').where('project_id', project_id).first()
    })
    .then(project => {
      return {...project, project_completed: project.project_completed ? true : false}
    })
  }

  
  














module.exports = {
    getProjects,
    getProjectById,
    addProject
}