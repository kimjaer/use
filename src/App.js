import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [yo, youpdate] = useState(0); // 컨텐츠 번호 
  const [isPaused, setPaused] = useState(false); // 
  // useEffect 안에 자동롤링이 있으므로 멈추는 것만 할 필요없음, 
  // yo만 업데이트 안하면 useEffect는 실행안됨 

  const yolist = ["월", "화", "수", "목", "금", "토", "일"];
  const yocontent = [
    {
      subject: "이날은 기운이 없어",
      content: "그래도 리액트 공부해야지"
    },
    {
      subject: "이날은 화가나 ",
      content: "그래도 리액트 또 공부해야지"
    },
    {
      subject: "이날은 이틀만 참아",
      content: "그래도 리액트 또또 공부해야지"
    },
    {
      subject: "이날은 느므 피곤해",
      content: "그래도 리액트와 그누보드도  공부해야지"
    },
    {
      subject: "이날은 금요일",
      content: "쫌만 버텨"
    },
    {
      subject: "이날은 토요일",
      content: "뭘해도 불안해"
    },
    {
      subject: "이날은 일요일",
      content: "자포자기상태"
    }
  ]

  const updateyo = () => {

    if (!isPaused) {
      let count = (yo + 1) % yolist.length;
      youpdate(count); //랜더링함 yo변경되면서 자동롤링진행하게 됨
    }

  }

  const handleItemClick = () => {
    setPaused(true);
  }



  useEffect(() => {
    const intervalId = setInterval(updateyo, 1000);
    return () => clearInterval(intervalId);
  }, [yo]);




  return (
    <>
      <div className="App">
        {/* li클릭시 하단에 노출되도록해줘요 */}

        <ul className='d-flex tablist'>
          {
            yolist.map(
              (v, i) => <li onClick={() => { handleItemClick(i); }}
                className={yo === i ? "act" : null}
              >{v}요일</li>
            )

          }</ul>
        <div >
          <p >
            {yocontent[yo].subject}
          </p>
          <div>
            {yocontent[yo].content}
          </div>
        </div>

      </div>
    </>

  );
}

export default App;