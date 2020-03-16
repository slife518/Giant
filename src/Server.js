import express from 'express';
import cors from 'cors';
import { createConnection } from 'mysql';
const app = express();

const SELECT_ALL_PROJECTDB_QUERY = 'SELECT * FROM projectdb';
const connection = createConnection({
    host: 'database-1.c8mhpo4sz1qt.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'DrjJzcFnAFJa12uATJ6e',
    database: 'ExampleDB',
    port: '3306'
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors());

app.get('/', (req, res, rows) => {
    res.send('go to /projectdb to see project');
    
    console.log("it's god")
})

app.get('/noveldb/add', (req, res) => {
    const { background, cardtitle, cardtext } = req.query;
    connection.query(`INSERT INTO noveldb (background, cardtitle, cardtext) VALUES ('${background}', '${cardtitle}', '${cardtext}')`, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.send('successfully added novel')
        }
    })
    
})

app.get('/projectdb', (req, res) => {
    connection.query(SELECT_ALL_PROJECTDB_QUERY, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
}),




app.listen(4000,)