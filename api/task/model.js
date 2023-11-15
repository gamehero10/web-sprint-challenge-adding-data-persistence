// build your `Task` model here
const db = require('../../data/dbConfig');




function getTasks() {
    return db('tasks as t')
    .innerJoin('projects as p', 'p.project_id', 't.project_id')
    .select('p.project_name', 'p.project_description')
    .select('t.*')
    .then(tasks =>
        tasks.map((task => {
          return {...task, task_completed: task.task_completed ? true : false}
        })))
    
}


function addTask(task) {
    return db("tasks").insert(task)
    .then(([task_id]) => {
        return db('tasks').where('task_id', task_id).first()
       })
       .then(task => {
         return {...task, task_completed: task.task_completed ? true : false}
       })
    
  }









module.exports = {
    getTasks,
    addTask
}











