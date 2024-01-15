import express from 'express';

const app = express();

app.use(express.static('./')).listen(1337);