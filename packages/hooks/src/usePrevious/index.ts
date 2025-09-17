import { useRef } from 'react';

export type ShouldUpdateFunc<T> = (prev: T | undefined, next: T) => boolean;

// const defaultShouldUpdate = <T>(a?: T, b?: T) => !Object.is(a, b);

// function usePrevious<T>(
//   state: T,
//   shouldUpdate: ShouldUpdateFunc<T> = defaultShouldUpdate,
// ): T | undefined {
//   const prevRef = useRef<T>();
//   const curRef = useRef<T>();

//   if (shouldUpdate(curRef.current, state)) {
//     prevRef.current = curRef.current;
//     curRef.current = state;
//   }

//   return prevRef.current;
// }

const defaultUpdateFn = <T>(a?: T, b?: T) => !Object.is(a, b);

function usePrevious<T>(state: T, shouldUpdateFn : ShouldUpdateFunc<T> = defaultUpdateFn): T | undefined{
  const prev = useRef<T>()
  const cur = useRef<T>()

  if(shouldUpdateFn(state, cur.current)){
    prev.current = cur.current
    cur.current = state
  }

  return prev.current
}

export default usePrevious;
