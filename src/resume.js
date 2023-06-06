import angular from './images/angular.svg'
import aws from './images/aws.svg'
import c from './images/c.svg'
import cpp from './images/c++.svg'
import css3 from './images/css3.svg'
import docker from './images/docker.svg'
import git from './images/git.svg'
import github_image from './images/github.svg'
import andrew_image from './images/Picture1.png'
import linkedin_image from './images/Picture2.png'
import email from './images/3158180.png'
import goodreads from './images/goodreads.png'
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

function Resume() {
    return (
        <div>
            <div class="container">
                <div class="row">
                <div class="p-5"></div>

                    <h2 class="d-flex justify-content-center">Hi, my name is Andrew Harrop!</h2>
                    <div class="p-5"></div>
                    <div class="col-sm">
                    Currently, I am a Software Engineer at TD Bank. In my position, I have focused on backend functions, specializing in handling vast volumes of batch and real-time banking and financial data. My practical expertise lies in utilizing technologies such as Java, Spring, Git, Linux, and a range of supporting tools related to testing, automation, business requests, agile methodologies, and big data analytics.
                    </div>
                    <div class="col-sm">
                        <img class="profile-img" src={andrew_image} alt="andrew" />
                    </div>
                    <div class="col-sm">
                    <strong>Education:</strong> Bachelor of Engineering, Software Engineering, GPA:3.9/4.0<br/><a href="https://www.uwo.ca/">Western University</a> (2018-2022)
                    <br/>
                    <br/>
                    <strong>Current City:</strong> Toronto, Ontario, Canada
                    <br/>
                    <br/>
                    <a class="p-1" href="mailto:aharrop@uwo.ca"><img src={email} width="35" height="35"/></a>
                    <a class="p-1" href="https://www.linkedin.com/in/andrew-harrop/"><img src={linkedin_image} width="35" height="35"/></a>
                    <a class="p-1" href="https://github.com/andrewharrop"><img src={github_image} width="35" height="35"/></a>
                    <a class="p-1" href="https://www.goodreads.com/andrewharrop"><img src={goodreads} width="35" height="35"/></a>
                    </div>
                    
                </div>
                
                </div>
        </div>
    )
}

export default Resume;

