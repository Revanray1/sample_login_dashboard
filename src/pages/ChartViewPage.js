import React, { useState } from 'react'
import BarChart from '../components/BarChart'
import { UserData, monthData } from '../utils/sampleData'
const ChartViewPage = () => {
  const [userData,setUserData] = useState({
    labels:UserData.map((data)=>data.year),

    datasets:[{
      label:"users Gainer" ,
      data:UserData.map((data)=>data.userGain),
      backgroundColor:['#ff6384','#36a2eb','#ffce56','#ff6384','#36a2eb','#ffce56'],
      hoverBackgroundColor:['#ff6384','#36a2eb','#ffce56','#ff6384','#36a2eb','#ffce56'],
    }]
  })

  const [userData2,setUserData2] = useState({
    labels:UserData.map((data)=>data.year),

    datasets:[{
      label:"users Gainer" ,
      data:UserData.map((data)=>data.userGain),
      backgroundColor:['blue'],
      hoverBackgroundColor:['pink'],
    }]
  })

  return (
    <div style={{background:"#adf9f4",display:"flex",flexWrap:"wrap",height:"100vh"}}>
      <div style={{width:"400px",height:"200px",padding:"10px"}}>
      <BarChart  chartData={userData}/>
      </div>

      <div style={{width:"400px",height:"200px",padding:"10px"}}>
      <BarChart  chartData={userData2}/>
      </div>

      <div style={{width:"400px",height:"200px",padding:"10px"}}>
      <BarChart  chartData={userData2} isPlugin={true}/>
      </div>

    </div>
  )
}

export default ChartViewPage