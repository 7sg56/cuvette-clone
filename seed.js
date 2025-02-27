const mongoose = require('mongoose');
const Job = require('./models/job');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/jobboard');
    console.log('Connection open for seeding');
    
    await Job.deleteMany({});
    

    const jobs = [
        {
            title: 'Frontend Developer',
            company: 'TechCorp',
            description: 'Build responsive web applications using React',
            type: 'Full Time',
            location: 'Bangalore',
            salary: '₹10,00,000',
            link: 'https://www.linkedin.com/jobs/view/frontend-developer-at-techcorp-1234567890'
        },
        {
            title: 'Backend Engineer',
            company: 'DataSystems',
            description: 'Design and implement scalable APIs',
            type: 'Full Time',
            location: 'Hyderabad',
            salary: '₹12,00,000',
            link: 'https://www.linkedin.com/jobs/view/backend-engineer-at-datasystems-1234567891'
        },
        {
            title: 'UI/UX Designer',
            company: 'Creative Agency',
            description: 'Create beautiful user interfaces and experiences',
            type: 'Part Time',
            location: 'Remote',
            salary: '₹7,00,000',
            link: 'https://www.linkedin.com/jobs/view/ui-ux-designer-at-creative-agency-1234567892'
        },
        {
            title: 'Data Scientist',
            company: 'Analytics Inc',
            description: 'Analyze large datasets and build machine learning models',
            type: 'Contract',
            location: 'Mumbai',
            salary: '₹12,00,000',
            link: 'https://www.linkedin.com/jobs/view/data-scientist-at-analytics-inc-1234567893'
        },
        {
            title: 'DevOps Engineer',
            company: 'CloudTech',
            description: 'Manage cloud infrastructure and deployment pipelines',
            type: 'Full Time',
            location: 'Pune',
            salary: '₹10,00,000',
            link: 'https://www.linkedin.com/jobs/view/devops-engineer-at-cloudtech-1234567894'
        },
        {
            title: 'Marketing Intern',
            company: 'GrowthMarketing',
            description: 'Assist with digital marketing campaigns',
            type: 'Internship',
            location: 'Delhi',
            salary: '₹20,000/month',
            link: 'https://www.linkedin.com/jobs/view/marketing-intern-at-growthmarketing-1234567895'
        },
        {
            title: 'Cybersecurity Specialist',
            company: 'SecureTech',
            description: 'Protect computer systems from cyber threats',
            type: 'Full Time',
            location: 'Bangalore',
            salary: '₹9,00,000',
            link: 'https://www.linkedin.com/jobs/view/cybersecurity-specialist-at-securetech-1234567896'
        },
        {
            title: 'Product Manager',
            company: 'Innovate Inc',
            description: 'Oversee the development and launch of new products',
            type: 'Full Time',
            location: 'Hyderabad',
            salary: '₹15,00,000',
            link: 'https://www.linkedin.com/jobs/view/product-manager-at-innovate-inc-1234567897'
        },
        {
            title: 'Network Administrator',
            company: 'NetAdmins',
            description: 'Manage and maintain computer networks',
            type: 'Full Time',
            location: 'Remote',
            salary: '₹6,00,000',
            link: 'https://www.linkedin.com/jobs/view/network-administrator-at-netadmins-1234567898'
        },
        {
            title: 'Database Administrator',
            company: 'DBA Solutions',
            description: 'Design, implement, and manage databases',
            type: 'Full Time',
            location: 'Mumbai',
            salary: '₹8,00,000',
            link: 'https://www.linkedin.com/jobs/view/database-administrator-at-dba-solutions-1234567899'
        },
        {
            title: 'Software Engineer',
            company: 'SoftEng Inc',
            description: 'Develop scalable software solutions using modern technologies',
            type: 'Full Time',
            location: 'Pune',
            salary: '₹11,00,000',
            link: 'https://www.linkedin.com/jobs/view/software-engineer-at-softeng-inc-1234567800'
        },
        {
            title: 'Digital Marketing Manager',
            company: 'DigitalWave',
            description: 'Lead digital marketing campaigns and strategies',
            type: 'Full Time',
            location: 'Delhi',
            salary: '₹14,00,000',
            link: 'https://www.linkedin.com/jobs/view/digital-marketing-manager-at-digitalwave-1234567801'
        },
        {
            title: 'IT Project Manager',
            company: 'ITPM Solutions',
            description: 'Oversee IT projects from planning to delivery',
            type: 'Full Time',
            location: 'Bangalore',
            salary: '₹16,00,000',
            link: 'https://www.linkedin.com/jobs/view/it-project-manager-at-itpm-solutions-1234567802'
        },
        {
            title: 'Artificial Intelligence Engineer',
            company: 'AI Innovations',
            description: 'Develop AI and machine learning models',
            type: 'Full Time',
            location: 'Hyderabad',
            salary: '₹18,00,000',
            link: 'https://www.linkedin.com/jobs/view/artificial-intelligence-engineer-at-ai-innovations-1234567803'
        },
        {
            title: 'Cloud Architect',
            company: 'CloudSolutions',
            description: 'Design and build cloud computing systems',
            type: 'Full Time',
            location: 'Remote',
            salary: '₹20,00,000',
            link: 'https://www.linkedin.com/jobs/view/cloud-architect-at-cloudsolutions-1234567804'
        },
        {
            title: 'Web Developer',
            company: 'WebDev Inc',
            description: 'Build dynamic web applications using PHP and MySQL',
            type: 'Part Time',
            location: 'Mumbai',
            salary: '₹5,00,000',
            link: 'https://www.linkedin.com/jobs/view/web-developer-at-webdev-inc-1234567805'
        },
        {
            title: 'Mobile App Developer',
            company: 'AppDev Solutions',
            description: 'Develop mobile apps for Android and iOS',
            type: 'Full Time',
            location: 'Pune',
            salary: '₹10,00,000',
            link: 'https://www.linkedin.com/jobs/view/mobile-app-developer-at-appdev-solutions-1234567806'
        },
        {
            title: 'Technical Writer',
            company: 'TechDocs',
            description: 'Create technical documentation for software applications',
            type: 'Full Time',
            location: 'Delhi',
            salary: '₹4,00,000',
            link: 'https://www.linkedin.com/jobs/view/technical-writer-at-techdocs-1234567807'
        },
        {
            title: 'Quality Assurance Engineer',
            company: 'QA Solutions',
            description: 'Test and ensure quality of software applications',
            type: 'Full Time',
            location: 'Bangalore',
            salary: '₹7,00,000',
            link: 'https://www.linkedin.com/jobs/view/quality-assurance-engineer-at-qa-solutions-1234567808'
        },
        {
            title: 'Business Analyst',
            company: 'BA Solutions',
            description: 'Analyze business needs and develop solutions',
            type: 'Full Time',
            location: 'Hyderabad',
            salary: '₹12,00,000',
            link: 'https://www.linkedin.com/jobs/view/business-analyst-at-ba-solutions-1234567809'
        }
    ];


    await Job.insertMany(jobs);
    console.log('Database seeded!');
    
    mongoose.connection.close();
}

main().catch(err => console.log(err));