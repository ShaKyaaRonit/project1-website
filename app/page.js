import React from 'react';
import Navbar from './components/navbar';
import Body from './components/body';
import Footer from './components/footer';

const Page = () => {
  return (
    <div className="bg-amber-50 min-h-screen flex flex-col">
        <Navbar/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default Page;
