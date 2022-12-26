import React from 'react'
import profilePic from '../assets/profilePic.png';
import dsa from '../assets/dsa.png';
import html from '../assets/html.png';
import css from '../assets/css.jpeg';
import js from '../assets/js.jpeg';
import react from '../assets/react.png';
import chakra from '../assets/chakra.jpeg';
import sass from '../assets/sass.png';
import boot from '../assets/bootstrap.png';
import java from '../assets/java.png';
import maven from '../assets/maven.png';
import hibernate from '../assets/hibernate.png';
import spring from '../assets/spring.png';
import mysql from '../assets/mysql.png';
import postman from '../assets/postman.png';
import aws from '../assets/aws.png';
import vercel from '../assets/vercel.png';
import heroku from '../assets/heroku.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import shoppingApp from '../assets/shopping.jpg';
import redbus from '../assets/redbus.jpg';
import wheather from '../assets/wheather.png';
import foodyShop from '../assets/foodyShop.png';

import resume from '../assets/Anshul_Kumar_Yadav.pdf';
import Typewriter from 'typewriter-effect'
import {MdMail} from 'react-icons/md'
import {FaBookReader, FaEye, FaFacebook, FaGithub, FaGithubAlt, FaLinkedin, FaUserAlt} from 'react-icons/fa'
import {SiFacebook, SiGithub, SiGmail, SiInstagram, SiTwitter} from 'react-icons/si';

import { Button, Card, CardBody, CardFooter, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import { whiten } from '@chakra-ui/theme-tools';
import { useState } from 'react';
// import profileVideo from '../assets/typing-Animation.mp4';
// import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'




export default function Home() {
  
   let socialIcons = {
            fontSize : "30px",
            color : "white",
            margin: '28% 0% 0% 30%'
        }

   
    return (
    <>
      <div id='home'>
        <div>
            <p>Hello,</p>
            <div className="typeAnimation">
            <Typewriter options={{
                    autoStart : true,
                    loop : true ,
                    delay: 60,
                    strings:[
                        'My name is Anshul Kumar Yadav',
                    ],
                }}/>
            </div>
            <p>I am a </p>
            <div className="typeAnimation">
            <Typewriter options={{
                    autoStart : true,
                    loop : true ,
                    delay: 40,
                    strings:[
                        'Software Developer',
                        'Web Developer',
                        'Java Backend Developer',
                        'React Frontend Developer'
                    ],
                }}/>
            </div>
            <p>Passionate Software Developer with web development technologies. Skilled, collaborative and attentive developer with a drive to develop the most relevant products. Always looking forward to learning something new to strengthen skills learned.</p>
            <a href='#contact'>Hire me</a>
        </div>
        <div id='imgBox'>
           {/* <video src={profileVideo} autoPlay /> */}
            <img src={profilePic} alt="picture" />
        </div>
      </div>
      <div id="about">
        <h1>About me</h1>
        <div className='firstLine'></div>
        <div className='secondLine'></div>
        <div id="chat">
            <div className="question">Who am I?</div>
            <div className='answer'>I am a passionate software developer with web development technologies and recently pursued web development course from Masai School and ready to work. </div>
            <div className='question'>What have I?</div>
            <div className='answer'>I have an experience of 2000+ hours of coding , data sturctures and algorithms. I have solved many problems on HackerRank and Leetcode.</div>
            <div className='question'>What does I do in free time ?</div>
            <div className='answer'>When I'm not at the keyboard, I like playing cricket and hanging out with friends.</div>
        </div>
        <h2>Education Background</h2>
        <div className='firstLine'></div>
        <div className='secondLine'></div>
        <br />
        <div id="education">
            <div className="edu_cont">
                <div>
                    <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="masaiLogo" />
                </div>
                <div>
                    <h2>Web Development</h2>
                    <p>Masai School, Banglore,Karnataka</p>
                    <button>Certificate</button>
                </div>
            </div>
            <div className="edu_cont">
                <div>
                    <img src="https://blog.bizby.io/gphidalpur/wp-content/uploads/2021/09/1logo-1.png" alt="masaiLogo" />
                </div>
                <div>
                    <h2>Diploma in Electrical Engineering</h2>
                    <p>Government Polytechnic College,Hapur,Uttar Pradesh</p>
                    <button>Certificate</button>
                </div>
            </div>
            <div className="edu_cont">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi__TxaIetJRAeNjWHh_niw2AdjJYfmNNrMQ&usqp=CAU" alt="masaiLogo" />
                </div>
                <div>
                    <h2>High School (10th)</h2>
                    <p>Marehra Public School,Etah,Uttar Pradesh</p>
                    <button>Certificate</button>
                </div>
            </div>
        </div>
     </div>
      
      {/* -----------------------Sills section start------------------------------ */}

      <div id="skills">
        <h1>Skills</h1>
        <div className="firstLine"></div>
        <div className="secondLine"></div>
        <div id='skill-boxes'>
            <div><img src={dsa}/> DSA</div>
            <div><img src={html}/>HTML</div>
            <div><img src={css}/>CSS</div>
            <div><img src={js}/>JavaScript</div>
            <div><img src={react}/>React Js</div>
            <div><img src={chakra}/>Chakra UI</div>
            <div><img src={sass}/>Sass</div>
            <div><img src={boot}/>BootStrap</div>
            <div><img src={java}/>Java</div>
            <div><img src={maven}/>Maven</div>
            <div><img src={hibernate}/>Hibernate</div>
            <div><img src={spring}/>SpringBoot</div>
            <div><img src={mysql}/>MySQL</div>
            <div><img src={postman}/>Postman</div>
            <div><img src={aws}/>AWS</div>
            <div><img src={heroku}/>Heroku</div>
            <div><img src={vercel}/>Vercel</div>
            <div><img src={git}/>Git</div>
            <div><img src={github}/>GitHub</div>
        </div>
      </div>

      {/* ----------------------Project Section Starts from here------------------- */}

      <div id="projects">
      <h1>Projects</h1>
        <div className="firstLine"></div>
        <div className="secondLine"></div>
        <div id="projectItem">
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ={redbus}/>
                    <h3> Redbus - Bus Ticketing App </h3>
                </div>
                <div className = 'content'>
                    <h3>Backend App</h3>
                    <p>Redbus is a bus ticket booking app where we book a ticket with a particular sourct station to destination station.</p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TeckStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=Java&color=007396&logo=java&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=SpringData-Jpa&color=019733&logo=spring&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=SpringBoot&color=019733&logo=springboot&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=Hibernate&color=430098&logo=hibernate&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=MySql&color=00C2FB&logo=MySQL&logoColor=FFFFFF"/>
                    </div>
                </div>
                </div>    
            </div>
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ={shoppingApp}/>
                    <h3> Online Shopping App </h3>
                </div>
                <div className = 'content'>
                    <h3>Backend App</h3>
                    <p>A app where we can buy products.In this project we implement RestFull Api based on springboot.</p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TechStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=Java&color=007396&logo=java&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=SpringData-Jpa&color=019733&logo=spring&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=SpringBoot&color=019733&logo=springboot&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=Hibernate&color=430098&logo=hibernate&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=MySql&color=00C2FB&logo=MySQL&logoColor=FFFFFF"/>
                    </div>
                </div>
                </div>    
            </div>
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ={wheather}/>
                    <h3> Wheather App </h3>
                </div>
                <div className = 'content'>
                    <h3>Fronted App</h3>
                    <p>A wheather app where we can see the weather of a city by searching or by giving location permission and here we can also see the 7 days forcast.</p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TechStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=HTML&color=F37878&logo=html5&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=css&color=52D4FA&logo=css3&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=javascript&color=FBF000&logo=javascript&logoColor=000000"/>
                        <img src="https://img.icons8.com/nolan/44/api-settings.png" width="38px"/>
                    </div>
                </div>
                </div>    
            </div>
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ={foodyShop}/>
                    <h3>A food reciepe app</h3>
                </div>
                <div className = 'content'>
                    <h3>Frontend App</h3>
                    <p>This app is useful for the whom who wants to know the reciepe for the delicious food . </p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TechStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=HTML&color=F37878&logo=html5&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=css&color=52D4FA&logo=css3&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=javascript&color=FBF000&logo=javascript&logoColor=000000"/>
                        <img src="https://img.icons8.com/nolan/44/api-settings.png" width="38px"/>
                    </div>
                </div>
                </div>    
            </div>
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ='https://miro.medium.com/max/1050/1*jdopOSsDRiGDWu9M3GviCQ.png'/>
                    <h3> BobbiBrown </h3>
                </div>
                <div className = 'content'>
                    <h3>Fronted App</h3>
                    <p>BobbiBrown providing branded cosmetics products online, makeup kit online. In this project, I was leading my team and majorly worked on Home page, Product page, Signin functionality, Cart page, Wishlist and Payment page.</p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TechStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=HTML&color=F37878&logo=html5&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=css&color=52D4FA&logo=css3&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=javascript&color=FBF000&logo=javascript&logoColor=000000"/>
                    </div>
                </div>
                </div>    
            </div>
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ='https://miro.medium.com/max/700/1*nhm4FnPWW69oTAEPT02umQ.png'/>
                    <h3>Youtube</h3>
                </div>
                <div className = 'content'>
                    <h3>Fronted App</h3>
                    <p>A frontend clone of YouTube, where in the home page user will find popular videos of YouTube and also can search for the desired videos it will show all the videos related to search on the result page.</p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TechStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=HTML&color=F37878&logo=html5&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=css&color=52D4FA&logo=css3&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=javascript&color=FBF000&logo=javascript&logoColor=000000"/>
                        <img src="https://img.icons8.com/nolan/44/api-settings.png" width="38px"/>
                    </div>
                </div>
                </div>    
            </div>
        </div>
      </div>     

            {/* -------------------------Contact Section Starts from here---------------  */}

            <div id="contact">
                <h1>Contact me</h1>
                <div className='firstLine'></div>
                <div className='secondLine'></div>
                <div id="contactBox">
                    <div id='social'>
                        <div className="socialBox">
                            <div>
                                <SiGmail style={socialIcons}/>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:rishabhyadav3602@gmail.com">rishabhyadav3602@gmail.com</a>
                            </div>
                        </div>
                        <div className="socialBox">
                            <div>
                                <FaLinkedin style={socialIcons}/>
                            </div>
                            <div>
                                <h3>LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/anshul-kumar-yadav/">anshul-kumar-yadav</a>
                            </div>
                        </div>
                        <div className="socialBox">
                            <div>
                                <SiGithub style={socialIcons}/>
                            </div>
                            <div>
                                <h3>GitHub</h3>
                                <a href="https://github.com/AnshulKumarYadav">AnshulKumarYadav</a>
                            </div>
                        </div>
                        <div className="socialBox">
                            <div>
                                <SiFacebook style={socialIcons}/>
                            </div>
                            <div>
                                <h3>Facebook</h3>
                                <a href="https://www.facebook.com/people/Rishabh-Yadav/100020567491022/">Rishabh-Yadav</a>
                            </div>
                        </div>
                        <div className="socialBox">
                            <div>
                                <SiInstagram style={socialIcons}/>
                            </div>
                            <div>
                                <h3>Instagram</h3>
                                <a href="https://www.instagram.com/rishuyadav3602">@rishuyadav3602</a>
                            </div>
                        </div>
                        <div className="socialBox">
                            <div>
                                <SiTwitter style={socialIcons}/>
                            </div>
                            <div>
                                <h3>Twitter</h3>
                                <a href="https://twitter.com/RISHABH48133056">@RISHABH48133056</a>
                            </div>
                        </div>
                    </div>
                    <div id='contactForm'>
                        <div className="form">
                            <div className='inputs'>
                                <div>
                                 <FaUserAlt style={{margin:"18% 0% 0% 40%"}}/>
                                </div>
                                <input type="text" placeholder='Name'/>
                            </div>
                            <div className='inputs'>
                                <div>
                                  <FaBookReader style={{margin:"18% 0% 0% 40%"}}/>
                                </div>
                                <input type="text" placeholder='Subject' />
                            </div>
                            <div className='inputs'>
                                <div>
                                  <MdMail style={{margin:"18% 0% 0% 40%"}}/>
                                </div>
                                <input type="email" placeholder='Email'/>
                            </div>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Write something here that you want to ask me ......'/>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact me</a>
                </div>
                <div className="socialFooter">
                    <MdMail/>
                    <FaLinkedin/>
                    <SiGithub/>
                    <SiInstagram/>
                </div>
                <div className="footHead">
                    <h1>Thanks for visiting</h1>
                    <h3>Anshul Kumar Yadav</h3>
                    <p>© 2022 copyright all right reserved</p>
                </div>
            </div>
            
    </>
  )
}

