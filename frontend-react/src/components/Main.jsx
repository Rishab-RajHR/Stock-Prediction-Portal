import React from 'react'
import Button from './Button'

const Main = () => {
  return (
     <>
    
       <div className='container'>
           <div className='p-5 text-center bg-light-dark rounded'>
               <h1 className='text-light'>Stock Prediction Portal</h1>
               <p className='text-light lead'>A Stock Prediction Portal allows users to monitor and analyze stock market data while predicting future price trends using machine learning. Built with React and Django, it fetches real-time or historical stock data, displays it through interactive charts, and applies predictive algorithms to forecast prices. Users can search for specific stocks, view past performance, and get estimated future values. </p>
                <Button text="Login" class="btn-outline-info" />
           </div>
      </div>
     </>
  )
}

export default Main