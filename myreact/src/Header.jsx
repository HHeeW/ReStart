import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const HeaderUl = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const HeaderText = styled(Link)`
    font-size: 18px;
    font-weight: bold;
    line-height: 60px;
`
const HeaderContainer = styled.header`
    border-bottom:  ${props => props.scrollValue ? '1px solid #ededed':'none'};
`
  
const Header = () => {
    const [scrollYValue, setScrollYValue] = useState(false);

    const addScrollCss = () => {
        window.pageYOffset === 0 ?
        setScrollYValue(false)
        :setScrollYValue(true)
      };
      
    window.addEventListener("scroll", addScrollCss);

  return (
    <HeaderContainer scrollValue ={scrollYValue} className='sticky top-0 z-50 w-full bg-white h-60'>
        <div className='container flex justify-between w-full max-auto'>
            <p className='w-1/12'><HeaderText to={"/"}>황희원</HeaderText></p>
            <nav className='w-4/12'>
                <HeaderUl>
                    <li>
                        <HeaderText to={"/listhome"}>게시판</HeaderText>
                    </li>
                    <li>
                        <HeaderText to={"/newshome"}>뉴스</HeaderText>
                    </li>
                    <li>
                        <HeaderText to={"/skillhome"}>기술과 서비스</HeaderText>
                    </li>
                    <li>
                        <HeaderText to={"/promisehome"}>약속과 책임</HeaderText>
                    </li>
                </HeaderUl>
            </nav>
            <div className='w-2/12'>
                <HeaderUl>
                    <button>
                        <HeaderText to={"#"}><img src="" alt="검색" /></HeaderText>
                    </button>
                    <button>
                        <HeaderText to={"/signin"}><img src="" alt="로그인" /></HeaderText>
                    </button>
                    <button>
                        <HeaderText to={"#"}><img src="" alt="다크모드" /></HeaderText>
                    </button>
                </HeaderUl>
            </div>
        </div>
    </HeaderContainer>
  )
}

export default Header