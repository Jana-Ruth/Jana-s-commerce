import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const ClientLayout = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow min-h-[calc(100vh-200px)] pt-16">
      <Outlet /> {/* This is where the route-specific content will render */}
    </main>
    <Footer />
  </div>
    
    </>

  )
}

export default ClientLayout
