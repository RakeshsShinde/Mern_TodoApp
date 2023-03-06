const router = require('express').Router();
const todos = [
    {
        id: 1,
        task: "go to gym",
        iscomplete: false,
        username: 'rakesh',
        date: "21-2-2021",
    },
    {
        id: 2,
        task: "go to class",
        iscomplete: true,
        username: 'ashutosh',
        date: "20-2-2021",
    },
    {
        id: 3,
        task: "complete homework",
        iscomplete: false,
        username: 'rakesh',
        date: "18-2-2021",
    },
    {
        id: 4,
        task: "go to gym",
        iscomplete: false,
        username: 'ashutosh',
        date: "21-2-2021",
    }
]

//get all tasks

router.get('/', (req, res) => {
    let username = req.query.username;

    let date = req.query.date;

    console.log(req.query);
    let task
    if (username) {
        task = todos.filter(task => task.username === username)
    }

    if (req.query.iscomplete) {

        task = task.filter(task => task.iscomplete === Boolean(req.query.iscomplete))
    }

    // if (date) {
    //     task = task.filter(task => task.date === date)
    // }
    res.send(task)
})


//get particular task  by id 

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const filtertasks = todos.filter(task => task.id === parseInt(id))
    res.send(filtertasks)

})







module.exports = router;