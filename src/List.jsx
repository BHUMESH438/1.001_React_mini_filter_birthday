import React from 'react';
import Person from './Person';
const List = ({ people, setPeople }) => {
  console.log(people);
  const deleteone = id => {
    setPeople(people.filter(person => person.id !== id));
    //filter function
  };
  return (
    <section>
      {people.map(props => {
        return <Person key={props.id} {...props} deleteone={() => deleteone(props.id)} />;
      })}
    </section>
  );
};
export default List;
