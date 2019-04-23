var express = require('express');
// we want to use express router
var router = express.Router();
// set up mongojs
var mongojs = require('mongojs');
// create a database object for mongojs, including the collections we want to use
/*************/
// var databaseurl = 'mongodb+srv://don:don@mytasklist-don-4p5ba.mongodb.net/test?retryWrites=true';
// var collections = ["tasks"];
// var db = require('mongojs')(databaseurl, collections);
/*************/
// var db = mongojs('mongodb+srv://don:don@mytasklist-don-4p5ba.mongodb.net/test?retryWrites=true', ['tasks']);
var db = mongojs('mongodb://@localhost:27017/tasklist', ['tasks']);

// set up our router to the tasks page
// Get All Task
router.get('/tasks', function(req, res, next) {
    // res.send('TASK API');
    db.tasks.find(function(err, docs) {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    });
})

// Get Single Task
router.get('/task/:id', function(req, res, next) {
    // condition is for id
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, docs) {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    });
});

// Save Task
router.post('/task', function(req, res, next) {
    // we will get the task from a form
    var task = req.body;
    // simple validation (if no title or no isDone)
    if(!task.title || !(task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else { // means everything are ok
        db.tasks.save(task, function(err, docs) {
            if (err) {
                res.send(err);
            }
            res.json(docs);
        });
    }
})

// Delete Task
router.delete('/task/:id', function(req, res, next) {
    // condition is for id
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, docs) {
        if (err) {
            res.send(err);
        }
        res.json(docs);
    });
});

// Update Task
router.put('/task/:id', function(req, res, next) {
    // get information from form
    var task = req.body;
    var updTask = {};

    // Do some validation
    if (task.isDone) {
        updTask.isDone = task.isDone;
    }
    if (task.title) {
        updTask.title = task.title;
    }

    if(!updTask) {
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        // condition is for id
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, updTask, {}, function(err, docs) {
            if (err) {
                res.send(err);
            }
            res.json(docs);
        });
    }

    // // condition is for id
    // db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, docs) {
    //     if (err) {
    //         res.send(err);
    //     }
    //     res.json(docs);
    // });
});

// export this then we can access this from other files
module.exports = router;