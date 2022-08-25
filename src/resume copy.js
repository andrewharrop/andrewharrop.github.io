import angular from './images/angular.svg'
import aws from './images/aws.svg'
import c from './images/c.svg'
import cpp from './images/c++.svg'
import css3 from './images/css3.svg'
import docker from './images/docker.svg'
import git from './images/git.svg'
import github_image from './images/github.svg'
import html5 from './images/html5.svg'
import java from './images/java.svg'
import javascript from './images/javascript.svg'
import mongodb from './images/mongodb.svg'
import mysql from './images/mysql.svg'
import node from './images/node.svg'
import python from './images/python.svg'
import react from './images/react.svg'
import swift from './images/swift.svg'
import typescript from './images/typescript.svg'
import vscode from './images/vscode.svg'
import vue from './images/vue.svg'




const name = "Andrew Harrop"
const personal_email = "andrewhar05@gmail.com"
const professional_email = "aharrop@uwo.ca"
const currnet = new Date()
const age = currnet.getFullYear() - 2000
const school = "Western University"
const degree = "Bachelor of Engineering"
const major = "Electrical and Computer Engineering"
const specilization = "Software Engineering"
const development_experience = "4 Years"
const github = "github.com/andrewharrop"
const linkedin = "linkedin.com/in/andrew-harrop-589a46180/"
const cities = ["Calgary, AB", "London, ON"]
const languages_spoken = ["English", "French"]
const languages = [
    "Assembly (ARM)",
    "C",
    "C#",
    "C++",
    "Objective-C",
    "Java",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Swift",
    "TypeScript",
    "Shell"
]
const frameworks = [
    "Angular",
    "Bootstrap",
    "Django",
    "Flask",
    "Express",
    "Node.js",
    "React",
    "Tailwind",
    "Vue.js",
    "Jinja"
]
const tools = [
    "Git",
    "GitHub",
    "GitKraken",
    "Sublime Merge",
    "Visual Studio Code",
    "Visual Studio",
    "Jira",
    "Atom",
    "Postman",
    "Slack",
    "Insomnia",
    "Sublime Text",
    "Eclipse",
    "IntelliJ IDEA",
    "PyCharm",
    "Excel",
    "Command Line",
    "Anaconda",
    "Nginx",
    "Apache",
    "MongoDB",
    "MySQL",
    "Docker",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "Scikit-Learn",
    "Seaborn",
]
const employment = []
const education = [
    {
        name: "Western University",
        degree: "Bachelor of Engineering",
        major: "Electrical and Computer Engineering",
        specilization: "Software Engineering",
        date: "2018 - 2022",
    }
]
const projects = [
    {
        name: "ASE-DATA",
        description: [
            "First of its kind API to parse public financial filings",
            "Built with Python, Flask, and MongoDB",
            "Grew to over 40 trial clients before ceasure operations due to financial concerns and industry developments",
            "99.8% uptime, dynamically parsed and indexed hundreds of thousands of XBRL documents",
            "Batch data processing reduced XBRL processing time complexity by a factor of O(n^2)",
            "Rivaled only be the API developed by SEC.gov",
            "Possesed monitization capibilities"],
        type: "SaaS",
        date: "11/2020-02/2021",
        link: ""
    },
    {
        name: "EDGARServer",
        description: [
            "Database wrapper for the new SEC EDGAR API.",
            "Capable of applying linear or logistic regression on over 200 data points for 15 years of quarterly data in seconds",
        ],
        type: "Wrapper, Data Parser, Open Source",
        date: "09/2021-10/2021",
        link: ""
    },
    {
        name: "BuckIt List",
        description: [
            "API and UI that allows users to share activities they plan on doing.",
            "Social Interaction oriented to engage users, allowing operations such as posting, commenting, liking, following, reporting, setting privacy constraints, and querying users",
        ],
        type: "Social Networking Application",
        date: "09/2021-Present",
        link: ""
    },
]

function scrollToResume() {
    let elem = document.getElementsByClassName("below-cover")
    elem[0].scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}
function Resume() {
    return (
        <div>

            <div className="cover-wrapper">
                <div className="cover">
                    <div className="center-cover text-center">
                        <h1>Andrew Harrop</h1>

                    </div>
                    <div className="bottom-cover" onClick={scrollToResume}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="75" fill="white" class="bi bi-chevron-down pointer-ico" viewBox="0 0 16 16" >
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>

                </div>
            </div>

            <div class="below-cover">
                <div className="p-2 text-center">
                    <a className="hidden-text text-nowrap" href="https://www.calgaryfacialnerveclinic.ca">_</a>

                    <h2>
                        What I bring to the table
                    </h2>
                    <a className="hidden-text text-nowrap" href="https://www.calgaryfacialnerveclinic.ca">_</a>

                </div>
                <div class="container text-center">
                    <div class="row mb-4">
                        <div class="col-sm-6 pb-2">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Proven ability to achive results</h4>
                                    <hr className="mb-4" />

                                    <p class="card-text">Projects I work on are consistantly built to completion using the best software development processes and framworks possible.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 pb-2">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Diverse engineering skills </h4>
                                    <hr className="mb-4" />

                                    <p class="card-text">I am skilled and trained in a variety of contemporary technologies from the lowest levels of hardware to the highest levels of software.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 pb-2">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Exceptional leadership abilities</h4>
                                    <hr className="mb-4" />

                                    <p class="card-text">Reflected by my high approval ratings in active student government roles, as well as overwhelmingly positive feedback from engineering colleagues.  </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 pb-2">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Professional communication capacity</h4>
                                    <hr className="mb-4" />

                                    <p class="card-text">Integrity and concision have been emblematic of my upbringing, and such attributes are as much family values as professional ones.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center pt-5 pb-5">
                    <h2>
                        A picture is worth 1000 lines of code
                    </h2>
                </div>
                <div class="container pb-5 pt-3 w-75 text-center">
                    <div class="card ">
                        <div class="row">

                            <div class="col-sm-3 pb-1 pt-1 ">
                                <img src={angular} alt="Angular" className="icon-photo" />
                            </div>

                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={aws} alt="AWS" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={c} alt="C" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={cpp} alt="C++" className="icon-photo" />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={css3} alt="CSS3" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={docker} alt="Docker" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={git} alt="Git" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={github_image} alt="GitHub" className="icon-photo" />
                            </div>


                        </div>
                        <div class="row">
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={html5} alt="HTML5" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={java} alt="Java" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={javascript} alt="Javascript" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={mongodb} alt="MongoDB" className="icon-photo" />
                            </div>


                        </div>
                        <div class="row">
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={mysql} alt="MySQL" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-1 pt-1">
                                <img src={node} alt="Node.js" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-2">
                                <img src={python} alt="Python" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-2">
                                <img src={react} alt="React" className="icon-photo" />
                            </div>

                            <div class="col-sm-3 pb-2">

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3 pb-2">
                                <img src={swift} alt="Swift" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-2">
                                <img src={typescript} alt="Typescript" className="icon-photo" />
                            </div>
                            <div class="col-sm-3 pb-2">
                                <img src={vscode} alt="VSCode" className="icon-photo" />
                            </div>
                            <div class=" col-sm-3 pb-2">
                                <img src={vue} alt="Vue" className="icon-photo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" pb-5 text-center">
                    <h2 className="  pb-5">
                        Who I am
                    </h2>
                    <div class="container text-center">
                        <div class="row mb-4">
                            <div class="col-sm-6 pb-2">
                                <div class="card ">
                                    <div class="card-body">
                                        <h4 class="card-title">A community leader</h4>
                                        <hr className="mb-4" />

                                        <p class="card-text">I am a sitting elected council member of the Western Undergraduate Engineering Society representing Senior Software Engineering.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 pb-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">A student</h4>
                                        <hr className="mb-4" />

                                        <p class="card-text">I am graduating in April 2022 from Western University with a degree in Electrical and Computer Engineering with a specialization in Software Engineering.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 pb-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">An Engineer</h4>
                                        <hr className="mb-4" />

                                        <p class="card-text">I have over three years of Engineering experience, engineering software solutions for numerous clients determining the most appropriate engineering practices.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 pb-2">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">An Athlete</h4>
                                        <hr className="mb-4" />

                                        <p class="card-text">Sports and athletics have been a part of my lifestyle for as long as I can remember. I am currently actively involved in cross country, swimming, climbing, and alpine skiing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" pb-3 ">
                    <a className="hidden-text text-nowrap" href="https://www.calgaryfacialnerveclinic.ca">_</a>

                    <h2 className="text-center  pb-3">
                        What I do
                    </h2>
                    <a className="hidden-text text-nowrap" href="https://www.calgaryfacialnerveclinic.ca">_</a>

                    <div class="container">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <h4 class="text-left col">Software Engineer, The Virtual Gurus</h4>
                                    <h4 className="text-end col">May 2021 - August 2021</h4>
                                </div>
                                <hr className="mb-4" />

                                <ul class="card-text">Developed an internal automation system that saved hundreds of hours of manual data entry.</ul>
                                <ul class="card-text">Engineered processes to reduce the amount of missing data, increasing data coverage to 100% in certain fields.</ul>
                                <ul class="card-text">Assisted in the adoption of standardized user interfaces, replacing subdomains with role based entities and thus reducing subdomain redirects to 0.</ul>
                                <ul class="card-text">Implemented API integrations to reduce internal dependancies.</ul>

                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <h4 class="text-left col">Software Engineer, Contract</h4>
                                    <h4 className="text-end col">Feb 2021 - Present</h4>
                                </div>
                                <hr className="mb-4" />

                                <ul class="card-text">Most recent project generated a return on investment of over 100%, finished on the project deadline and was 60% under budget.</ul>
                                <ul class="card-text">All web applications have a 0% downtime and have only received positive client feedback.</ul>
                                <ul class="card-text">All documentation and software were created conforming to or applying IEEE Software Engineering Standards, specifically ISO 9126 and ISO 12207.</ul>

                            </div>
                        </div>
                    </div>

                </div>
                <div className=" pb-3 ">
                    <a className="hidden-text text-nowrap" href="https://www.calgaryfacialnerveclinic.ca">_</a>

                    <h2 className="text-center  pb-1">

                        What I work on
                    </h2>
                    <a className="hidden-text text-nowrap" href="https://www.calgaryfacialnerveclinic.ca">_</a>

                    <div class="container">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row mb-5">
                                    <h5 class="text-left col">API & SaaS application</h5>

                                    <h3 class="text-center col">ASE Data</h3>

                                    <h5 className="text-end col">November 2020 - March 2021</h5>
                                </div>
                                <hr className="mb-4" />

                                <ul class="card-text">First of its kind API to parse public financial filings.</ul>
                                <ul class="card-text">Grew to over 40 beta clients before halting operations due to financial concerns and industry developments.</ul>
                                <ul class="card-text">99.8% uptime, dynamically parsed and indexed hundreds of thousands of XBRL documents.</ul>

                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <h5 class="text-left col">Wrapper & Data Parser</h5>

                                    <h3 class="text-center col">EDGARServer</h3>

                                    <h5 className="text-end col">September 2021 - October 2021</h5>
                                </div>
                                <hr className="mb-4" />


                                <ul class="card-text">Database wrapper for the new SEC EDGAR API.</ul>
                                <ul class="card-text">Capable of applying linear or logistic regression on over 200 data points for 15 years of quarterly data in seconds.</ul>


                            </div>
                        </div>
                        <div class="card mb-4">

                            <div class="card-body">
                                <div class="row">
                                    <h5 class="text-left col">Social Networking Application</h5>
                                    <h3 class="text-center col ">BuckIt List</h3>


                                    <h5 className="text-end col">September 2021 - Present</h5>
                                </div>
                                <hr className="mb-4" />

                                <ul class="card-text">API and UI that allows users to share activities they plan on doing.</ul>
                                <ul class="card-text">Social Interaction oriented to engage users, allowing operations such as posting, commenting, liking, following, reporting, setting privacy constraints, and querying users.</ul>


                            </div>
                        </div>
                        <div class="card">

                            <div class="card-body">
                                <div class="row">
                                    <h5 class="text-left col">Residential housing price analysis software</h5>
                                    <h3 class="text-center col ">CANRES </h3>


                                    <h5 className="text-end col">September 2021 - Present</h5>
                                </div>
                                <hr className="mb-4" />

                                <ul class="card-text">Applies distinct machine learning on public Canadian housing data, attempting to recognize observable patterns from predictable covariates.</ul>
                                <ul class="card-text">The RMSE and MRE are favorable, and the most advanced can predict 85% of house prices within an 8% range of the observed price given adequate data.</ul>


                            </div>
                        </div>
                    </div>

                </div>
                <div className=" pb-5 text-center">
                    <h2 className="  pb-5">
                        How to get in touch                    </h2>
                    <div class="container text-center w-50">
                        <div class="row mb-4">
                            <div class="col ">
                                <div class="card  ">
                                    <div class="card-body text-center">
                                        <h5 class="card-title">Public Encrytpion Key</h5>
                                        <hr />
                                        <p class="card-text text-center">This will be changed up every once in a while</p>
                                        <a href="/public_key.txt" class="btn btn-primary">Get Key</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Send me an Email</h5>
                                        <hr />
                                        <p class="card-text">aharrop@uwo.ca</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 ">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Call Me</h5>
                                        <hr />
                                        <p class="card-text">(587) 892-8513</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default Resume;

