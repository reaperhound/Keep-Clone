import React, { useState } from 'react'
import InputBox from '../Input-box/input-box.component'
import NoteList from '../NoteList/NoteList.component'
import Navbar from '../Navigation/nav.component'


const Home = () => {

  return (
    <>
      <InputBox />
      <NoteList />
    </>
  )
}

export default Home