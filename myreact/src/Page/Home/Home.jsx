import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import isLeapYear from 'dayjs/plugin/isLeapYear'
dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale('ko'); // 언어 등록

const Home = () => {
  const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 8% 92%;
  `
  const HeaderContainer = styled.div`
    width: 50%;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: 5% 25% 5%;
    grid-column-gap: 32.5%;
    text-align: center;
    span{
      cursor: pointer;
    }
  `
  const CalendarContainer = styled.div`

  `
  const [DATE, setDATE] = useState(dayjs())
  const [calendar, setCalendar] = useState()

  useEffect(()=>{
    DateCalender()
  }, [])

  const ChangeDate = (e) => {
    setDATE(dayjs(DATE).subtract(e, 'month'))
  }
  useEffect(()=>{
    DateCalender()
  },[DATE])

  const DateCalender = () => {
    let date = []
    for(let i = dayjs(DATE).startOf('month').format('d'); i > 0; i--){
      console.log(i,dayjs(DATE).startOf('month').format('d'))
      date.unshift(<p>{dayjs(DATE).startOf('month').subtract(i, 'day').format('D')}</p>)
    }
    for(let i = 1; i <= dayjs(DATE).endOf('month').format('D'); i++){
      date.push(<p>{i}</p>)
    }
    for(let i = 1; i < (7-dayjs(DATE).endOf('month').format('d')); i++){
      // console.log(i*-1)
      date.push(<p>{dayjs(DATE).endOf('month').subtract(i*-1, 'day').format('D')}</p>)
    }
    setCalendar(date)
  }
  return (
    <MainContainer>
      <HeaderContainer>
        <span onClick={()=>ChangeDate(1)}>{dayjs(DATE).subtract(1, 'month').format('M월')}</span>
        <p style={{fontSize: 'max(1.5vw, 26px)', fontWeight: 'bold',}}>{dayjs(DATE).format('YYYY년 M월')}</p>
        <span onClick={()=>ChangeDate(-1)}>{dayjs(DATE).subtract(-1, 'month').format('M월')}</span>
      </HeaderContainer>
      <CalendarContainer>
        {calendar}
      </CalendarContainer>
    </MainContainer>
  )
}

export default Home