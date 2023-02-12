import {useState} from 'react';

export const App = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <p>himprover's react boilerplate</p>
      <p>{num}</p>
      <button onClick={() => setNum(prev => prev + 1)}>test button</button>
    </>
  );
};
