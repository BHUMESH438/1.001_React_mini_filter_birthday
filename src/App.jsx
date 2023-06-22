import { useState } from 'react';
import data from './data';
import List from './List.jsx';

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h3>{people.length} birthdays today</h3>
      <br></br>
      <br></br>
      <button className='btn' onClick={() => setPeople([])}>
        clearall
      </button>

      <button className='btn' onClick={() => setPeople(data)}>
        resetall
      </button>
      <br></br>
      <br></br>
      <br></br>
      <List people={people} setPeople={setPeople} />
    </>
  );
};
export default App;
