import { useMemo, useState } from 'react';

export interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

// function useToggle<T = boolean>(): [boolean, Actions<T>];

// function useToggle<T>(defaultValue: T): [T, Actions<T>];

// function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Actions<T | U>];

function useToggle<T = boolean>(): [boolean, Actions<T>]; 
function useToggle<T>(defaultValue : T): [T, Actions<T>]; 
function useToggle<T, R>(defaultValue : T, reverseValue : R): [T | R, Actions<T | R>]; 

function useToggle<D, R>(defaultValue: D = (false as unknown) as D, reverseValue?: R) {
  // const [state, setState] = useState<D | R>(defaultValue);

  // const actions = useMemo(() => {
  //   const reverseValueOrigin = (reverseValue === undefined ? !defaultValue : reverseValue) as D | R;

  //   const toggle = () => setState((s) => (s === defaultValue ? reverseValueOrigin : defaultValue));
  //   const set = (value: D | R) => setState(value);
  //   const setLeft = () => setState(defaultValue);
  //   const setRight = () => setState(reverseValueOrigin);

  //   return {
  //     toggle,
  //     set,
  //     setLeft,
  //     setRight,
  //   };
  // }, []);

  // return [state, actions];

  const [state, setState] = useState<D | R>(defaultValue)

  const action = useMemo(() => {
    const reverseValueOrigin = reverseValue !== undefined ? reverseValue : !defaultValue
    const toggle = () => setState((s: D | R) => s === defaultValue ? reverseValueOrigin : defaultValue)
    const set = (value: D | R) => setState(value)
    const setLeft = () => setState(defaultValue)
    const setRight = () => setState(reverseValueOrigin)
    return {
        toggle,
        set,
        setLeft,
        setRight
    }
  }, []) 

  return [state, action]
}

export default useToggle;
