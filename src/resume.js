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
                    Currently, I am a Software Engineer at TD Bank. In my position, I have focused on backend functions, specializing in handling vast volumes of batch and real-time financial data. My practical expertise lies in utilizing technologies such as Java, Spring, Git, Linux, and a range of supporting tools related to testing, automation, business requests, agile, and big data analytics.
                    <br />
                    <br />
                    My technical strengths are in Machine Learning, Backend Development, Financial Services, Algorithams, System Design, and Cloud Computing.
                    </div>
                    
                    <div class="col-sm">
                        <img class="profile-img mx-auto d-block" src={andrew_image} alt="andrew" />
                    </div>
                    <div class="col-sm">
                    <strong>Education:</strong> Bachelor of Engineering, Software Engineering<br/><a href="https://www.uwo.ca/">Western University</a> (2018-2022)
                    <br/>
                    <br/>
                    <strong>Current City:</strong> Toronto, Ontario, Canada
                   <br />
                   <br />
                    <strong>Experience:</strong> 2 Years
                    <br />
                   <br />
                  <strong>Languages:</strong> Java, Python, Javascript, C++
                    </div>
                    
                </div>
                <div class="d-flex justify-content-center">
                <a class="p-1" href="mailto:aharrop@uwo.ca"><img src={email} width="35" height="35"/></a>
                        <a class="p-1" href="https://www.linkedin.com/in/andrew-harrop/"><img src={linkedin_image} width="35" height="35"/></a>
                        <a class="p-1" href="https://github.com/andrewharrop"><img src={github_image} width="35" height="35"/></a>
               


                </div>
                <p class="d-flex justify-content-center">Please E-Mail me for my resume and more information!</p>
                <div class="hidden">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Top Secret</a>
                    </div>    
                </div>
        </div>
    )
}

export default Resume;

