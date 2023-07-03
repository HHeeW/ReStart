import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import isLeapYear from 'dayjs/plugin/isLeapYear'
dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale('ko'); // 언어 등록

const Home = ({setLeftMenu, leftMenu}) => {
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
    }
    @media (min-width: 1536px) {  //2xl
      width: 50%;
      display: grid;
      grid-template-columns: 10% 30% 10%;
      grid-column-gap: 25%;
      img{display:none;}
    }
  `
  const CalendarContainer = styled.div`
    display: grid;
    min-height: 500px;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 30px auto;
    margin: 10px;
    margin-top: unset;
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
  `

  const [DATE, setDATE] = useState(dayjs())
  const [calendar, setCalendar] = useState()
  useEffect(()=>{
    DateCalendar()
  }, [])

  const ChangeDate = (e) => {
    setDATE(dayjs(DATE).subtract(e, 'month'))
  }
  useEffect(()=>{
    DateCalendar()
  },[DATE])
  
  const KeyEvent = (e) => {
    console.log(e)
  };

  const DateCalendar = () => {  //이번달 한달 달력 그리기
    let date = []
    for(let i = dayjs(DATE).startOf('month').format('d'); i > 0; i--){
      date.unshift(
        <p 
          id={dayjs(DATE).startOf('month').subtract(i, 'day').format('YYYY-MM-D')} 
          className='Day PrevDay'>
          {dayjs(DATE).startOf('month').subtract(i, 'day').format('D')}
        </p>
      )
    }
    for(let i = 1; i <= dayjs(DATE).endOf('month').format('D'); i++){
      date.push(
        <p 
          id={dayjs(i).format('YYYY-MM-D')} 
          className='Day'>
          {i}
        </p>
      )
    }
    for(let i = 1; i < (7-dayjs(DATE).endOf('month').format('d')); i++){
      date.push(
        <p 
          id={dayjs(DATE).endOf('month').subtract(i*-1, 'day').format('YYYY-MM-D')} 
          className='Day NextDay'>
          {dayjs(DATE).endOf('month').subtract(i*-1, 'day').format('D')}
        </p>
      )
    }
    setCalendar(date)
  }
  return (
    <MainContainer>
      <HeaderContainer>
        <img src='/Images/Main/List.png' alt='메뉴 보기' onClick={()=>{setLeftMenu(true)}}/>
        <span onClick={()=>ChangeDate(1)}>{dayjs(DATE).subtract(1, 'month').format('M월')}</span>
        <p style={{fontSize: 'max(1.5vw, 26px)', fontWeight: 'bold',}}>{dayjs(DATE).format('YYYY년 M월')}</p>
        <span onClick={()=>ChangeDate(-1)}>{dayjs(DATE).subtract(-1, 'month').format('M월')}</span>
      </HeaderContainer>
      <CalendarContainer>
        <div className='Calendar Week'><span className='text-[#f00]'>일</span></div>
        <div className='Calendar Week'><span>월</span></div>
        <div className='Calendar Week'><span>화</span></div>
        <div className='Calendar Week'><span>수</span></div>
        <div className='Calendar Week'><span>목</span></div>
        <div className='Calendar Week'><span>금</span></div>
        <div className='Calendar Week'><span className='text-[#00f]'>토</span></div>
        {
          !!calendar&&
          calendar.map((e,i) => {
            return (<div key={i} className='Calendar' >{e}</div>)
          })
        }
      </CalendarContainer>
    </MainContainer>
  )
}

export default Home