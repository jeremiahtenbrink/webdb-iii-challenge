"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const studentRouter = require('./students/student-router');
const cohortsRouter = require('./cohorts/cohorts-router');
const express = require('express');
const helmet = require('helmet');
const server = express();
server.use(helmet());
server.use(express.json());
server.use('/students', studentRouter);
server.use('/cohorts', cohortsRouter);
server.use('/', (req, res) => {
    res.status(200).json({ message: "yup it works" });
});
module.exports = server;
//# sourceMappingURL=server.js.map