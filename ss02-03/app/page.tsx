import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import Bai1 from './baitap/b1/Bai1'
import Bai2 from './baitap/b2/Bai2'
import Bai3 from './baitap/b3/Bai3'
import Bai5 from './baitap/b5/Bai5'
import Bai6 from './baitap/b6/Bai6'
export default function page() {
  return (
    <div>Page
      <Header>
      </Header>
      <Main></Main>
      <Footer></Footer>
      <Bai1></Bai1>

      <Bai2></Bai2>
      <Bai3 ></Bai3>
      <Bai5></Bai5>
      <Bai6></Bai6>
    </div>
  )
}
