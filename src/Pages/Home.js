import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../Assests/Images/logo.jpg';
import Spotimgg from '../Assests/Images/spotimg.jpg';
import imgup from '../Assests/Images/imgup.jpg';
import imgdown from '../Assests/Images/imgdown.jpg';
import { Telephone, Envelope } from 'react-bootstrap-icons';
import '../App.css';
function Home() {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const[time,setTime] = useState();
    return (
        <div className='container'>
            <Heading>
                <Information>
                    <Logo src={logo} alt='logo' />
                    <Inf1>Oncebehand</Inf1>
                    <Inf1 className='Home'>Informatie</Inf1>
                    <Inf1 className='Home'>Wie zein</Inf1>
                    <Inf1 className='Home'>Nieuws</Inf1>
                    <Inf1 className='Home'>Contact</Inf1>
                </Information>
                <Contact>
                    <Phone><Telephone /> 402340294-2
                    </Phone>
                    <Mail><Envelope /> hfkwdfhos@gmail.com</Mail>
                </Contact>
                <Response>Response</Response>
            </Heading>
            <Spotlight>
                <Details>
                    <Special>SPECIALIST</Special>
                    <Smile>A REASON TO SMILE</Smile>
                    <Desc>Vitae Scekerisque odi at diam ultrices eu Au Porta </Desc>
                    <Appoint>Make an Appointment</Appoint>
                </Details>
                <Details2>
                    <Imgup src={imgup} alt='imgup' />
                    <Spotimg src={Spotimgg} alt='spotimg' />
                    <Imgdown src={imgdown} alt='imgup' />
                </Details2>
            </Spotlight>
            <Section>
            <Bookappoint>Book Appointment</Bookappoint>
           <Sectionsub>
           <Bookbox>
                <Name>Name</Name>
                <Input value={name} placeholder='Enter Name'/>
            </Bookbox>
            <Bookbox>
                <Name>Email</Name>
                <Input value={email} placeholder='Enter Email'/>
            </Bookbox>
            <Bookbox>
                <Name>Time</Name>
                <Input value={time} placeholder='Enter Time'/>
            </Bookbox>
            <Bookbox>
                 <Ba>Book an Appointment</Ba>
            </Bookbox>
           </Sectionsub>
            </Section>
        </div>
    );
}

const Logo = styled.img`
    width: 50px; 
    border-radius: 50%;
    border: 1.5px solid black;
`;

const Heading = styled.div`
background-color: #008080 ;
display: flex;
align-items: center;
justify-content: space-around;
color:#D3EAEB;
font-size: 20px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
user-select: none;

`;
const Information = styled.ul`
display:flex;
padding: 20px;
justify-content:space-between;
`;

const Inf1 = styled.li`
display: flex;
padding: 10px;
list-style-type:none;


`;
const Contact = styled.div`

`;
const Phone = styled.p`
   
`;
const Mail = styled.p``;

const Response = styled.div`
border-radius: 15px;
padding: 2px 5px;
border:1px solid #D3EAEB;
align-items: center;
`;
const Spotlight = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
font-family: "Akaya Kanadaka",Arial;
`;
const Details = styled.div`

`;

const Special = styled.p`
max-width: fit-content;
padding: 3px 5px;
border:1px solid #01B0B7;
border-radius: 10px;
font-size:23px;
font-weight: 600;
`;
const Smile = styled.p`
font-size:80px;
font-weight: 800;

`;

const Desc = styled.p`
font-size:30px;
`;


const Appoint = styled.button`
border:1px solid #01B0B7;
background: #01B0B7;
color:#D3EAEB;
padding:5px;
border-radius: 10px;
font-size:25px;
font-weight: 600;
`;
const Spotimg = styled.img`
border-radius: 10px;
`;
const Details2 = styled.div`
display:flex;
align-items: center;
padding: 50px;
`;
const Imgup = styled.img`
width: 300px;
position: absolute;
top:300px;
border-radius: 0px 10px 10px 0px;

`;
const Imgdown = styled.img`
width: 250px;
border-radius: 10px;
position: absolute;
right: 20px;
top:600px
`;
const Section =styled.div`
padding:1rem 28rem;

`;
const Sectionsub = styled.div`
display:flex;
border:1px solid #ECEAEA;
padding:34px;
border-radius:10px;

`;
const Bookappoint = styled.p`
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
font-size: 26px;

`;
const Bookbox = styled.div`
font-size:20px;
`;
const Name = styled.label`
font-family: 'Gill Sans', 'Gill Sans MT';
margin-right: 5px;
margin-left: 5px;
`;
const Input = styled.input`
border-radius:5px;
border: none;
padding:5px;
margin: 0px 5px 5px 0px;
background: #D8DFE6;
`;
const Ba = styled.button`
border:1px solid #01B0B7;
border-radius: 10px;
padding: 5px 5px;
background: #01B0B7;
font-size: 18px;
font-weight: 600;
color:#D3EAEB;
margin-left: 10px;
`;
export default Home
