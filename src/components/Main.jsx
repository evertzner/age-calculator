import { useEffect, useState } from 'react';
import Counter from './Counter';
import Input from './Input';
import moment from 'moment';

const Main = () => {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(timeElapsed ? false : true);
  }, [timeElapsed]);

  const addZeroAtStart = (value) => {
    if (value.length === 1) {
      return '0' + value;
    } else {
      return value;
    }
  };

  const timeFromGivenDate = () => {
    const startDate = moment(
      `${addZeroAtStart(day)}/${addZeroAtStart(month)}/${addZeroAtStart(year)}`,
      'DD/MM/YYYY',
      true
    );

    const currentDate = moment();

    const years = currentDate.diff(startDate, 'years');

    startDate.add(years, 'years');

    const months = currentDate.diff(startDate, 'months');

    startDate.add(months, 'months');

    const days = currentDate.diff(startDate, 'days');

    if (startDate.isValid()) {
      setTimeElapsed({ years, months, days });
    } else {
      setTimeElapsed(false);
    }
  };

  const handleDayChange = (value) => {
    setDay(value);
  };

  const handleMonthChange = (value) => {
    setMonth(value);
  };

  const handleYearChange = (value) => {
    setYear(value);
  };

  return (
    <main className='bg-white px-6 py-10 rounded-3xl rounded-br-[150px] flex flex-col gap-2 w-[500px]'>
      <div className='flex gap-4'>
        <Input
          labelText='DAY'
          maxLength={2}
          placeholder='DD'
          key='day'
          onInputChange={handleDayChange}
          error={error}
        />
        <Input
          labelText='MONTH'
          maxLength={2}
          placeholder='MM'
          key='month'
          onInputChange={handleMonthChange}
          error={error}
        />
        <Input
          labelText='YEAR'
          maxLength={4}
          placeholder='YYYY'
          key='year'
          onInputChange={handleYearChange}
          error={error}
        />
      </div>
      <div className='relative flex items-center justify-center'>
        <div className='h-[1px] absolute xs:relative bg-off-white w-full'></div>
        <button
          id='btnCalculate'
          className='bg-purple self-center z-30 hover:bg-off-black transition-all p-5 rounded-full'
          onClick={timeFromGivenDate}
        >
          <img src='src/images/icon-arrow.svg' width='24' alt='icon-arrow' />
        </button>
      </div>
      <div>
        <Counter value={timeElapsed.years} block='year' />
        <Counter value={timeElapsed.months} block='month' />
        <Counter value={timeElapsed.days} block='day' />
      </div>
    </main>
  );
};

export default Main;
