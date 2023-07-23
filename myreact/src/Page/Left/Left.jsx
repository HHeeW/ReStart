import React from 'react'
import styled from 'styled-components'


const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1.5fr 1fr 5fr 5fr 5fr;
  img{
    width:30px;
    margin: 5px auto;  
  }
  >div{
    overflow: hidden;
  }
`
const GridRow1 = styled.div`
  grid-row : 1;
  mix-blend-mode: difference;
`
const GridRow2 = styled.div`
  grid-row : 2;
  mix-blend-mode: difference;
`
const GridRow3 = styled.div`
  grid-row : 3;
  mix-blend-mode: difference;
`
const GridRow4 = styled.div`
  grid-row : 4;
  mix-blend-mode: difference;
`
const GridRow5 = styled.div`
  grid-row : 5;
  mix-blend-mode: difference;
`
const GridBox = styled.div`
  width: 90%;
  height: 100%;
  line-height: 100%;
  margin: 0 auto;
  display: grid;
  align-items: center;
  font-size: max(0.9vw, 16px);
  font-weight: 600;
`
const UserContainer = styled(GridBox)`
  grid-template-columns: 10% auto 5%;
  grid-column-gap: 5%;
`
const NoticeContainer = styled(GridBox)`
  grid-template-columns: 20% 80%;
  grid-column-gap: 5%;
`
const ImageBox = styled.div`
  img:first-child{
    display: none;
  }
  img:last-child{
    display: block;
  }
  @media (min-width: 1536px) {
    img:first-child{
      display: block;
    }
    img:last-child{
      display: none;
    }
  }
`

const Left = ({setLeftMenu, leftMenu}) => {
  return (
    <GridContainer onClick={()=>(leftMenu === false ? setLeftMenu(true) : '')}>
      <GridRow1 className='bg-Main mix-blend-difference'>
      { 
        leftMenu ? 
        <UserContainer>
          <div className='mx-auto overflow-hidden border-black border-solid rounded-full w-35 h-35 border-1'>
            <img src='/Images/Left/User.png' alt='사용자 이미지'/>
          </div>
          <p style={{fontWeight: 'bold', fontSize:'max(0.9vw, 16px'}}><span>황희원</span>님 반갑습니다.</p>
          <ImageBox>
            <img src='/Images/Left/Setting.png' alt='설정'/>
            <img src='/Images/Left/Cancel.png' alt='닫기' onClick={()=>{setLeftMenu(false)}}/>
          </ImageBox>
        </UserContainer>
        :
        <div className='mx-auto mt-10 overflow-hidden border-black border-solid rounded-full w-35 h-35 border-1'>
          <img src='/Images/Left/User.png' alt='사용자 이미지' onClick={()=>{setLeftMenu(true)}}/>
        </div>
      }
      </GridRow1>
      <GridRow2 className='bg-Custom1 mix-blend-difference'>
      { 
        leftMenu ? 
        <NoticeContainer>
          <span>공지사항</span><p>캘린터 프로젝트 공지사항 위치</p>
        </NoticeContainer>
        :
        <img src='/Images/Left/Notice.png' alt='공지사항' onClick={()=>{setLeftMenu(true)}}/>
      }
      </GridRow2>
      <GridRow3 className='bg-Custom2 mix-blend-difference'>
      { 
        leftMenu ? 
          '날씨'
        :
        <img src='/Images/Left/weather/clean_day.png' alt='날씨' onClick={()=>{setLeftMenu(true)}}/>
      }
      </GridRow3>
      <GridRow4 className='bg-Custom3 mix-blend-difference'>
      { 
        leftMenu ? 
          '일정'
        :
        <img src='/Images/Left/Calendar.png' alt='달력' onClick={()=>{setLeftMenu(true)}}/>
      }
      </GridRow4>
      <GridRow5 className='bg-Custom4 mix-blend-difference'>
      { 
        leftMenu ? 
          '메모'
        :
        <img src='/Images/Left/Memo.png' alt='메모' onClick={()=>{setLeftMenu(true)}}/>
      }
      </GridRow5>
    </GridContainer>
  )
}
export default Left