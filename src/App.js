import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [yo, youpdate] = useState(0);
  const yolist = ['Mon', 'Tues', 'Wedns', 'Thurs', 'Fri', 'Satuer', 'Sun'];

  const updateyo = () => {
    let count;
    count = (yo + 1) % yolist.length;
    youpdate(count);
  }
  



  return (
    <div>
      <button onClick={updateyo}>클릭하면 요일 하나씩 바뀜</button>
      <p>{yolist[yo]}day</p>

      

    </div>
  );
}

export default App;
