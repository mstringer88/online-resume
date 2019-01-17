import express from 'express';


let app = express();

app.use(express.static(_dirname + '/'));

app.listen(process.env.PORT || 3000);