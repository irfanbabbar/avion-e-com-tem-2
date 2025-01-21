import React from 'react';
import ShippoData from '@/components/ShippoData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const page = () => {
  return (
    <>
    <Header />
       <div className='bg-purple-300 min-h-screen'>
      <ShippoData />
    </div>
    <Footer />
    </>
  )
}

export default  page;