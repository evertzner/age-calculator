const Counter = ({ value, block }) => {
  return (
    <div className='text-6xl font-extrabold italic'>
      <span className='text-purple font-extrabold text-6xl'>{isNaN(value) ? '--' : value}</span>{' '}
      {block}
      <span>{value != 1 ? 's' : ''}</span>
    </div>
  );
};

export default Counter;
