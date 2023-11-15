const projects = [
    { project_name: "Build a car", project_description: "Build yourself your own car", project_completed: false },
    { project_name: "Build a better AI", project_description: "Build an AI that knows truths", project_completed: false },
    { project_name: "Build a PC", project_description: "Build your own gaming machine", project_completed: false }
]
const resources = [
    { resource_name: "Vehicle", resource_description: "Buy a used vehicle, your wallet will thank you" },
    { resource_name: "Scrapyard", resource_description: "Having access to a local scrapyard will save you a lot of money" },
    { resource_name: "Drill", resource_description: "You'll be doing a lot of drilling if you plan on building a wide-body vehicle" },
    { resource_name: "Personal Computer", resource_description: "You'll need a PC to build an AI" },
    { resource_name: "YouTube account", resource_description: "You'll want a YouTube account to save helpful tutorials in a private playlist" },
    { resource_name: "Reddit account", resource_description: "You'll want a Reddit account to connect with professionals who are able to help answer your questions" },
    { resource_name: "Job", resource_description: "You'll need a job to start saving money" },
    { resource_name: "Newegg account", resource_description: "Newegg is a site that many people go to when ordering PC parts or PCs" }
]


const tasks = [
    { project_id: 1, task_description: "Buy a cheap car", task_notes: "Check local listings using sites like craigslist", task_completed: false },
    { project_id: 1, task_description: "Buy parts", task_notes: "Check local scrapyards for cheap aftermarket parts", task_completed: false },
    { project_id: 1, task_description: "Buy tools", task_notes: "Check local hardware stores", task_completed: false },
    { project_id: 2, task_description: "Buy a PC", task_notes: "Check local listings using sites like Facebook Market Place", task_completed: false },
    { project_id: 2, task_description: "Learn how to build neural networks", task_notes: "You can learn on sites like YouTube", task_completed: false },
    { project_id: 2, task_description: "Build a few machine learning applications", task_notes: "Outsource for help on sites like Reddit or YouTube", task_completed: false },
    { project_id: 3, task_description: "Save up some money", task_notes: "People usually save about $1,000 before looking into parts", task_completed: false },
    { project_id: 3, task_description: "Do some research for computer parts", task_notes: "Figure out what you want to use your PC for, and revolve PC parts around your personal use", task_completed: false },
    { project_id: 3, task_description: "Order parts and put it together", task_notes: "Learn how to build your PC using site like YouTube", task_completed: false }
]


const project_resources = [
    { project_id: 1, resource_id: 1 },
    { project_id: 1, resource_id: 2 },
    { project_id: 1, resource_id: 3 },
    { project_id: 2, resource_id: 4 },
    { project_id: 2, resource_id: 5 },
    { project_id: 2, resource_id: 6 },
    { project_id: 3, resource_id: 7 },
    { project_id: 3, resource_id: 8 },
    { project_id: 3, resource_id: 5 }
]





exports.seed = async function (knex) {
await knex('projects').insert(projects)
await knex('resources').insert(resources)
await knex('tasks').insert(tasks)
await knex('project_resources').insert(project_resources)
}