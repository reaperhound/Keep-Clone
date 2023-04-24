import React, { useState } from 'react'
import InputBox from '../Input-box/input-box.component'
import NoteList from '../NoteList/NoteList.component'
import Navbar from '../Navigation/nav.component'
import Footer from '../Footer/Footer.component'


const Home = () => {

  return (
    <div className='min-h-[100vh] flex flex-col justify-end'> 
      <InputBox />
      <NoteList />
      <Footer />
    </div>
  )
}

export default Home