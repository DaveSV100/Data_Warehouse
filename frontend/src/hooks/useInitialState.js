import { useState } from 'react';

const initialState = {
  selection: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addSelection = (payload) => {
    setState({
      ...state,
      selection: [...state.selection, payload],
    });
  };
  return {
    state,
    addSelection,
  };
};

export default useInitialState;
