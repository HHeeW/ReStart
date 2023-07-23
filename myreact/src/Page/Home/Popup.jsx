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

const Popup = (props) => {
    console.log({props})
  return (
    <PopupBack onClick={()=>{props.setPopup(false)}}>
        <div>
            
        </div>
    </PopupBack>
  )
}

export default Popup