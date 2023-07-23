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
const PopupContainer = styled.div`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10001;
  transform: translate(-50%, -50%);
  background-color: #fff;
`
const PopupHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 8%;
  max-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 50px;
  span{
    text-align: center;
    font-weight: bold;
    color: #fff;
    cursor: default;
  }
  span:last-child{
    color:${(props) => (props.date === '토' ? '#5555ff': props.date === '일' ? '#ff5555': '#fff')}
  }
  img{
    height: 50%;
    cursor: pointer;
  }
  @media (min-width: 1536px) {  //2xl
    height: 10%;
  }
`


const DailyPopup = (props) => {
  console.log(props)
  return (
    <>
      <PopupContainer className='Popup_Container'>
          <PopupHeader className='bg-Main' date={props.popup.date}>
              <div>
                <span className='text-2xl md:text-3xl 2xl:text-4xl'>{props.popup.day}</span>
                <span className='ml-5 text-md md:text-lg 2xl:text-xl'>{props.popup.date+'요일'}</span>
              </div>
              <img src='/Images/Main/Popup/Close.png' alt='닫기' onClick={()=>{props.setPopup({state: false})}}/>
          </PopupHeader>
      </PopupContainer>
      <PopupBack onClick={()=>{props.setPopup({state: false})}}/>
    </>
  )
}

export default DailyPopup