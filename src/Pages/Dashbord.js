import React from 'react'
import Applayout from '../Components/Applayout'
import Headpart from '../Components/Headpart'
import Headpart2 from '../Components/Headpart2'


export default function Dashbord() {
  return (
 <>
 
 <div className='container-fluid'>
    <div className='row'>
        <div className='col-xl-2'>
            <Applayout/>
        </div>
        <div className='col-10'>
            <Headpart/>
            <Headpart2/>
        </div>
    </div>
 </div>

 </>
  )
}
