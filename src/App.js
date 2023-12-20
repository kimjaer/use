import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [yo, youpdate] = useState(0);
  const yolist = ['Mon', 'Tues', 'Wedns', 'Thurs', 'Fri', 'Satuer', 'Sun'];
  const updateyo = (num) => {

    youpdate(num % 7); // yo 변수가 변경되고 랜더링 되어 새로운 화면이 출력된다 / usestate 변경함수만 연산식 가능
  }



  return (
    <div>
      <button onClick={()=>{ updateyo(yo + 1) }}>클릭하면 요일 하나씩 바뀜</button>
      <p>{yolist[yo]}day</p>

      

    </div>
  );
}

export default App;
