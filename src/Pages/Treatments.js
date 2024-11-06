import React from 'react'
import styled from 'styled-components';
import treat1 from '../Assests/Images/treat1.jpg'
import treat2 from '../Assests/Images/treat2.jpg'
import treat3 from '../Assests/Images/treat3.jpg'
import treat4 from '../Assests/Images/treat4.jpg'

function Treatments() {
  return (
    <div>
       <Overall>
       <Box1>
        <Treatimg src={treat1} alt="treatment"/>
        <Label>TANDROPTHETEK</Label>
        <More>More Information</More>
        </Box1>
        <Box1>
        <Treatimg src={treat2} alt="treatment"/>
        <Label>TANDROPTHETEK</Label>
        <More>More Information</More>
        </Box1>
        <Box1>
        <Treatimg src={treat3} alt="treatment"/>
        <Label>TANDROPTHETEK</Label>
        <More>More Information</More>
        </Box1>
        <Box1>
        <Treatimg src={treat4} alt="treatment"/>
        <Label>TANDROPTHETEK</Label>
        <More>More Information</More>
        </Box1>
       </Overall>
    
    </div>
  )
}
const Overall =styled.div`
display:flex;
justify-content: space-between;
padding:1rem 18rem;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const Box1 = styled.div`

`;
const Treatimg = styled.img`
width:300px;
height: 300px;
border-radius: 10px;
position: relative;
`;
const Label = styled.p`
font-family: "Akaya Kanadaka",Arial;
position: absolute;
top:87rem;
margin-left: 10px;
background: white;
border-radius: 5px;
padding: 6px;
`;
const More = styled.button`
background: #01B0B7;
border:none;
border:1px solid #ECEAEA;
color:#D3EAEB;
padding: 10px;
border-radius: 20px;
margin-left: 10px;
`;
export default Treatments
