const Task = require('../models/taskmodel')
// Adding Task to the database
module.exports.createTask = function(req,res){
    Task.create({
        content:req.body.content,
        user:req.user._id
    },function(err,task){
        if(err){
            return console.log("Error posting task to db")
        }
        return res.redirect('back')
    })
}


//Deleting Task from the database
module.exports.deleteTask=function(req,res){
    task_id = req.params.task_id

    Task.findByIdAndDelete({_id:task_id},function(err){
        if(err){
            return console.log("error deleting user")
        }
        return res.redirect('back')
    })
    
}

