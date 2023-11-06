import React from 'react'

    const name = 'basu'
    const loc = 'Goa'
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
function Calender(){
    return <>
    
    <h1 className='.header'>HELLO</h1>
    <h2>My Name Is {name}</h2>
    <h2>I Am From {loc}</h2>
    <h3>Current Date Is:{currDate}</h3>
    <h3>Current Date Is:{currTime}</h3>
    </>
}
export default Calender