const Person = props => {
  return (
    <article className='person'>
      <img src={props.image} alt={props.name} className='img' />
      <div>
        <h4>{props.name}</h4>
        <p>{props.age} years</p>
      </div>
      <button className='btn' onClick={props.deleteone}>
        clear one
      </button>
    </article>
  );
};
export default Person;
