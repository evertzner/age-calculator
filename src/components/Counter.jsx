const Counter = ({ value, block }) => {
  return (
    <div className='text-6xl font-extrabold italic' id='counter'>
      <span className='text-purple font-extrabold text-6xl' id='counterValue'>
        {isNaN(value) ? '--' : value}
      </span>{' '}
      {block}
      <span>{value != 1 ? 's' : ''}</span>
    </div>
  );
};

export default Counter;
