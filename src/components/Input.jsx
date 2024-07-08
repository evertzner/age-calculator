const Input = ({ labelText, maxLength, placeholder, onInputChange, error }) => {
  const handleChange = (event) => {
    onInputChange(event.target.value);
  };
  return (
    <div className='flex flex-col w-32 gap-1'>
      <label htmlFor='input' className='text-smokey-grey font-bold tracking-[0.15em]'>
        {labelText}
      </label>
      <input
        id='input'
        type='text'
        className={`${
          error ? 'border-light-red' : 'border-light-grey'
        }  border outline-none focus:border-purple font-bold text-2xl py-4 xs:py-2 px-5 rounded-lg`}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span
        className={`${error ? 'opacity-100' : 'opacity-0'} text-light-red italic text-[10px] mt-1`}
        id='error'
      >
        Wrong or empty value
      </span>
    </div>
  );
};

export default Input;
