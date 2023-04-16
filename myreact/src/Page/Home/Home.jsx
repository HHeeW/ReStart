import React, { useEffect, useRef } from 'react'


function Home() {
  
  const myTagRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const tagPosition = myTagRef.current.getBoundingClientRect().top;
      const windowPosition = window.innerHeight;

      if (tagPosition < 10) {
          console.log(tagPosition)
        // myTagRef 위치에 스크롤될 때 실행할 코드
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [myTagRef]);
  return (
    <div>
      <div className='font-bold text-left pt-100 text-42'>
        <p ref={myTagRef}>오늘의 네이버</p>
        <p>4월 16일 일요일 소식입니다.</p>
      </div>
      <div className='relative flex mt-100'>
        <div className='w-1/2 h-[600px] contentBox sticky top-100 left-0'>

        </div>
        <div className='sticky flex flex-wrap w-1/2 top-100'>
          <div className='w-[260px] h-[400px] contentBox'></div>
          <div className='w-[260px] h-[200px] contentBox'></div>
          <div className='w-[260px] h-[200px] contentBox'></div>
          <div className='w-[260px] h-[400px] contentBox'></div>
          <div className='w-[260px] h-[200px] contentBox'></div>
          <div className='w-[260px] h-[200px] contentBox'></div>
        </div>
      </div>
      <div className='h-[700px] mt-100 overflow-hidden flex '>
        <div className='w-1/2 h-[500px] contentBox'>

        </div>
        <div className='w-1/2'>
          <div className='w-10/12 h-[200px] contentBox'></div>
        </div>
      </div>
    </div>
  )
}

export default Home