import React from 'react'
import { Header, Features,Whychoose, Counter, Card_section, Footer,Navbar } from '../../Components';
import Card, { cardData } from '../../Components/card/Card';
import './Home.css';
function Home() {
  return (
    <>
     <Header/>
    <div className='Home-card'>
    <Card {...cardData[0]}/>
   <Card {...cardData[1]}/>
   <Card {...cardData[2]}/>
   </div>
   <Features/>
   <Whychoose/>
   <Counter/>
   <Card_section/>
    </>
  )
}

export default Home