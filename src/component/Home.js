import React, { useState } from 'react'
import HomeCompany from './HomeComponents/HomeCompany'
import HomeEmployee from './HomeComponents/HomeEmployee'

function Home() {
    const [inputData, setinputData] = useState()
    function handleDataChange(e){
        setinputData(e.target.value)
    }
    return (
        <div>
            <HomeCompany data = {inputData} changeData = {handleDataChange} />
            <HomeEmployee data = {inputData} changeData = {handleDataChange} />
        </div>
    )
}

export default Home
