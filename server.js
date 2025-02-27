const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts'); 
const Job = require('./models/job');
const app = express();

require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layout'); 

app.use(express.static('public'));

main().catch(err => console.log(err)); 
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/jobboard');
    console.log('Connection open');
}

app.get('/fulltimejobs', async (req, res) => {
    try {
        const jobs = await Job.find({type: 'Full Time'});
        res.render('fulltimejobs', { jobs });
    } catch (e) {
        console.error(e);
        res.status(500).send('Error fetching jobs');
    }
});

app.get('/otherjobs', async (req, res) => {
    try {
        const jobs = await Job.find({type: { $ne: 'Full Time' }});
        res.render('otherjobs', { jobs });
    } catch (e) {
        console.error(e);
        res.status(500).send('Error fetching jobs');
    }
});

app.get('/', (req, res) => {
    res.redirect('/fulltimejobs');
});

app.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        // idk this part I used claude's code
        // Using regex for search (fallback if text index isn't working)
        const results = await Job.find({ 
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { company: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ]
        });
        res.render('searchresults', { jobs: results });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error searching jobs');
    }
});

app.get('/filter', async (req, res) => {
    const { type, location } = req.query;
    const filter = {};
    
    if (type) filter.type = type;
    if (location) filter.location = location;
    
    try {
        const jobs = await Job.find(filter);
        res.render('searchresults', { jobs });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error filtering jobs');
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});