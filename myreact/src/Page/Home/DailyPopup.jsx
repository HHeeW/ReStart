import React from 'react'
import styled from 'styled-components'

const PopupBack = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.3);
`

const DailyPopup = (props) => {
  
  return (
    <PopupBack onClick={()=>{props.setPopup({state: false})}}>
        <div>
            
        </div>
    </PopupBack>
  )
}

export default DailyPopup