import * as React from 'react';

const useCount = () => {
  const [count, setCount] = React.useState(0);
  const setIncrement = () => {
    setCount(c => c + 1);
  };
  const setDecrement = () => {
    setCount(c => c - 1);
  };
  return { count, setIncrement, setDecrement };
};

export default useCount;
