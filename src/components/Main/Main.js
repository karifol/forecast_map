import React from 'react'
import { useState, useEffect } from 'react'
import Map from '../Map/Map'

function Main() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-1/2 h-1/2'>
        <Map/>
      </div>
    </div>
  )
}

export default Main