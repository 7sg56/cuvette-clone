const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: String,
    company: String,
    description: String,
    type: String, 
    location: String,
    salary: String,
    link: String
});

jobSchema.index({ title: 'text', company: 'text', description: 'text' });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;   