"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../data/database");
const router = require('express').Router();
router.get('/', (req, res) => {
    // returns a promise that resolves to all records in the table
    database_1.database('students')
        .select({
        id: 'students.id', name: 'students.name', cohort: 'cohorts.name'
    })
        .innerJoin('cohorts', 'cohorts.id', 'students.cohort_id')
        .then(roles => {
        res.status(200).json(roles);
    })
        .catch(error => {
        res.status(500).json(error);
    });
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    database_1.database('students')
        .innerJoin('cohorts', 'cohorts.id', 'students.cohort_id')
        .select({
        id: 'students.id', name: 'students.name', cohort: 'cohorts.name'
    })
        .where({ "students.id": id }).then(student => {
        res.status(200).json(student);
    }).catch(err => {
        console.log(err);
    });
});
router.post('/', (req, res) => {
    // get back an array with the last id generated: [ 3 ]
    database_1.database('students')
        .insert(req.body)
        .then(ids => {
        const id = ids[0];
        database_1.database('students')
            .where({ id: id })
            .first()
            .then(role => {
            res.status(201).json(role);
        });
    })
        .catch(error => {
        res.status(500).json(error);
    });
});
router.put('/:id', (req, res) => {
    database_1.database('students')
        .where({ id: req.params.id })
        .update(req.body)
        .then(count => {
        if (count > 0) {
            res.status(200).json(count);
        }
        else {
            res.status(404).json({ message: 'Record not found' });
        }
    })
        .catch(error => {
        res.status(500).json(error);
    });
});
router.delete('/:id', (req, res) => {
    database_1.database('students')
        .where({ id: req.params.id })
        .del()
        .then(count => {
        if (count > 0) {
            res.status(204).end();
        }
        else {
            res.status(404).json({ message: 'Record not found' });
        }
    })
        .catch(error => {
        res.status(500).json(error);
    });
});
module.exports = router;
//# sourceMappingURL=student-router.js.map