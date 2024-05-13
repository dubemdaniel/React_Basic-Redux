import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

interface IState {
    counter: number 
    showCounter?: boolean
    
}

// type IState: (state:)

const Counter = () => {
    const dispatch = useDispatch();

    const counter = useSelector((state: IState) => state.counter);
    
    const incrementHandler = () => { 
        dispatch({type : 'INCREMENT'})
    }
    
    const decrementHandler = () => {
        dispatch({type : 'DECREMENT'})

    }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
          <div className={classes.value}>{counter}</div>
          <div className='flex align-middle  justify-around m-[2rem]'>
              <div className='bg-[#3c0080] px-2 py-2 rounded font-bold' onClick={incrementHandler}>Increment</div>
              <div className='bg-[#3c0080] px-2 py-2 rounded font-bold' onClick={decrementHandler}>Decrement</div>
          </div>
      <button  onClick={toggleCounterHandler} className='bg-[#3c0080] px-2 py-2 rounded font-bold' >Toggle Counter</button>
    </main>
  );
};

export default Counter;