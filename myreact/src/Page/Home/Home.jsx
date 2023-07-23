import React, { useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import DailyPopup from './DailyPopup'
import Calendar from './Calendar'
dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale('ko'); // 언어 등록

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 8% 92%;
`
const HeaderContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-template-columns: 5% 40% 5%;
  grid-column-gap: 17.5%;
  text-align: center;
  img{
    width: 30px;
    position: absolute;
    left: 10px;
    cursor: pointer;
  }
  span{
    cursor: pointer;
  }
  @media (min-width: 768px) { //md
    width: 80%;
    img{display:none;}
  }
  @media (min-width: 1536px) {  //2xl
    width: 50%;
    display: grid;
    grid-template-columns: 10% 30% 10%;
    grid-column-gap: 25%;
  }
`
const CalendarContainer = styled.div`
  display: grid;
  min-height: 500px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 30px auto;
  margin: 10px;
  margin-top: unset;
  div:has(>.Day):hover{
    background-color: #f0ffd1;
  }
  div:nth-child(-n+7){
    border-top: 1px solid #000;
  }
  div:nth-child(7n-6){
    border-left: 1px solid #000;
    p{color: #F00;}
    p.PrevDay{color: #Faa;}
  }
  div:nth-child(7n){
    p{color: #00F;}
    p.NextDay{color: #aaf;}
  }
  div.Today{
    background-color: rgb(220 240 255);
  }
`
const Home = ({setLeftMenu}) => {

  const [DATE, setDATE] = useState(dayjs()) //선택 중인 날짜
  const [popup, setPopup] = useState({state: false, year: '', month: '', day: '', date:''})
  const ChangeDate = (e) => {
    setDATE(dayjs(DATE).subtract(e, 'month'))
  }
  const KeyEvent = (e) => { //키보드로 월 이동
    console.log(e)
  };

  return (
      <MainContainer>
        <HeaderContainer>
          <img src='/Images/Main/List.png' alt='메뉴 보기' onClick={()=>{setLeftMenu(true)}}/>
          <span onClick={()=>ChangeDate(1)}>{dayjs(DATE).subtract(1, 'month').format('M월')}</span>
          <p style={{fontSize: 'max(1.5vw, 26px)', fontWeight: 'bold',}}>{dayjs(DATE).format('YYYY년 M월')}</p>
          <span onClick={()=>ChangeDate(-1)}>{dayjs(DATE).subtract(-1, 'month').format('M월')}</span>
        </HeaderContainer>
        <CalendarContainer>
          <div className='Week'><span className='text-[#f00]'>일</span></div>
          <div className='Week'><span>월</span></div>
          <div className='Week'><span>화</span></div>
          <div className='Week'><span>수</span></div>
          <div className='Week'><span>목</span></div>
          <div className='Week'><span>금</span></div>
          <div className='Week'><span className='text-[#00f]'>토</span></div>
          <Calendar setPopup={setPopup} DATE={DATE} />
        </CalendarContainer>
        {popup.state && <DailyPopup setPopup={setPopup} popup={popup} />} {/* 날짜 클릭시 팝업 */}
      </MainContainer>
  )
}

export default Home