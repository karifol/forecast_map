import React from 'react'
import { useState, useEffect } from 'react'
import Map from '../Map/Map'

function Main() {
  return (
    <div className='w-screen h-screen flex justify-end'>
      <div className='bg-black w-80'>test</div>
      <div className='w-[calc(100%_-_20rem)] h-screen'>
        <Map/>
      </div>
    </div>
  )
}

export default Main