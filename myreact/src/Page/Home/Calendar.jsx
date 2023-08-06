import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import axios from 'axios'

const Calendar = ({setPopup, DATE}) => {
    
  const Today = dayjs().format('YYYY-MM-DD')  //오늘 날짜
  const [calendar, setCalendar] = useState()  //일 가져오기
  const [solDay, setSolDay] = useState({Year: dayjs().format('YYYY'), Month: dayjs().format('MM')});
  const [spcdeInfoData, setSpcdeInfoData] = useState([]);
  const URL = "http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService";
  const Param = [
    "getHoliDeInfo",      // 1     getHoliDeInfo	    국경일 정보조회
    "getRestDeInfo",      // 2		getRestDeInfo	    공휴일 정보조회
    "getAnniversaryInfo",	// 3		getAnniversaryInfo	기념일 정보조회
    "getSundryDayInfo",   // 4		getSundryDayInfo	잡절 정보조회
    "get24DivisionsInfo"	// 5		get24DivisionsInfo	24절기 정보조회
  ]
  const getSpcdeInfo = () => {
    let value = []
    Param.map((e,i)=>{
      // axios.post(`${URL}/${e}`,{
      //   ServiceKey:process.env.REACT_APP_SpcdeInfoService_Key,
      //   solYear:solDay.Year, 
      //   solMonth:solDay.Month,
      //   _type:'json'
      // })
      axios({
        url:`${URL}/${e}?solYear=${solDay.Year}&solMonth=${solDay.Month}&ServiceKey=${process.env.REACT_APP_SpcdeInfoService_Key}&_type=json`
      })
      .then((res)=>{
        const temp = res.data.response.body.items.item
        const val = []
        temp.forEach((val)=>{
          val.push(val)
        });
        value[i] = val
      })
      .catch((err)=>{
        console.error(err)
      })
    })
    setSpcdeInfoData([...spcdeInfoData, value])
  }
  useEffect(()=>{
    console.log(spcdeInfoData)
  },[spcdeInfoData])
  useEffect(()=>{
    setSolDay({Year: DATE.$y, Month: dayjs(DATE).format('MM')})
    DateCalendar()
  },[DATE])
  useEffect(()=>{
    getSpcdeInfo()
  },[solDay])

  const dailyPop = (e) => { //날짜 클릭시 팝업 띄우는 함수
    setPopup({state: true, year: dayjs(e).format('YYYY'), month: dayjs(e).format('MM'), day: dayjs(e).format('D'), date: dayjs(e).format('dd')})
  }
  
  const DateCalendar = () => {  //이번달 한달 달력 그리기
    let date = []
    for(let i = dayjs(DATE).startOf('month').format('d'); i > 0; i--){
      date.push(
        <div 
          id={dayjs(DATE).startOf('month').subtract(i, 'day').format('YYYY-MM-D')} 
          className={`Calendar ${Today === i ? 'Today' : ''}`}>
          <p className={`Day PrevDay ${Today === i ? 'Today' : ''}`}>
            {dayjs(DATE).startOf('month').subtract(i, 'day').format('D')}
          </p>
        </div>
      )
    }
    for(let i = dayjs(DATE).startOf('month').format('YYYY-MM-DD'); i <= dayjs(DATE).endOf('month').format('YYYY-MM-DD'); i=dayjs(i).subtract(-1,'day').format('YYYY-MM-DD')){ 
      date.push(
        <div 
          id={`${dayjs(i).format('YYYY-MM-DD')} ${Today === i ? 'Today' : ''}`} //오늘이면Today
          className={`Calendar ${Today === i ? 'Today' : ''}`} //오늘이면Today
          onClick={(e)=>{dailyPop(e.currentTarget.id.split(' ')[0]);}}
          >
          <p 
            className={`Day`}>
            {dayjs(i).format('D')}
          </p>
        </div>
      )
    }
    for(let i = 1; i < (7-dayjs(DATE).endOf('month').format('d')); i++){
      date.push(
        <div 
          id={dayjs(DATE).endOf('month').subtract(i*-1, 'day').format('YYYY-MM-DD')} 
          className={`Calendar ${Today === i ? 'Today' : ''}`}>
          <p 
            className={`Day NextDay`}>
            {dayjs(DATE).endOf('month').subtract(i*-1, 'day').format('D')}
          </p>
        </div>
      )
    }
    setCalendar(date)
  }

  return (
    <>
        {
        !!calendar&&
        calendar.map((e,i) => {
            return (e)
        })
        }
    </>
  )
}

export default Calendar