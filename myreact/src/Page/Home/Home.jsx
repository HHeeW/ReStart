import React, { useEffect, useRef, useState } from 'react'

import moment from 'moment/moment'
import 'moment/locale/ko'
import styled from 'styled-components'

const Row1Col1 = styled.li`
  grid-row: 1/3;
  grid-column: 1;
`
const Row1Col2 = styled.li`
  grid-row: 1;
  grid-column: 2;
`
const Row4Col2 = styled.li`
  grid-row: 4;
  grid-column: 2;
`
const Row2Col2 = styled.li`
  grid-row: 2/4;
  grid-column: 2;
`
const Row5Col1 = styled.li`
  grid-row: 5;
  grid-column: 1;
`
const Row3Col1 = styled.li`
  grid-row: 3/5;
  grid-column: 1;
`
const Row5Col2 = styled.li`
  grid-row: 5;
  grid-column: 2;
`

function Home() {
  const [TODAY, setTODAY] = useState()
  const myTagRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const tagPosition = myTagRef.current.getBoundingClientRect().top;
      const windowPosition = window.innerHeight;

      if (tagPosition < 10) {
          console.log(tagPosition,windowPosition)
        // myTagRef 위치에 스크롤될 때 실행할 코드
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [myTagRef]);
  
  useEffect(()=>{
    setTODAY(moment().format("MMM Do dddd"))
  },[])
  return (
    <div>
      <div className='font-bold text-left pt-100 text-42'>
        <p ref={myTagRef}>오늘의 주인공</p>
        <p>{TODAY} 소식입니다.</p>
      </div>

      <div className='content_Brick'>
        <div className='content_BigBox'></div>
        <ul className='content_Listbox'>
          <Row1Col1 className='content_LongBox'/>
          <Row1Col2 className='content_ShotBox'/>
          <Row2Col2 className='content_LongBox'/>
          <Row4Col2 className='content_ShotBox'/>
          <Row3Col1 className='content_LongBox'/>
          <Row5Col1 className='content_ShotBox'/>
          <Row5Col2 className='content_ShotBox'/>
        </ul>
      </div>
      
      <div className=' w-full h-[400px] mx-0 content_Box '>

      </div>

      <div className='content_Brick'>
        <ul className='content_Listbox'> 
          <Row1Col1 className='content_LongBox'/>
          <Row1Col2 className='content_ShotBox'/>
          <Row2Col2 className='content_LongBox'/>
          <Row4Col2 className='content_ShotBox'/>
          <Row3Col1 className='content_LongBox'/>
          <Row5Col1 className='content_ShotBox'/>
          <Row5Col2 className='content_ShotBox'/>
        </ul>
        <div className='content_BigBox'></div>
      </div>

      <div className='content_Brick '>
        <div className='content_BigBox'>

        </div>
        <div className='content_BigBox'>

        </div>
      </div>
      
    </div>
  )
}

export default Home