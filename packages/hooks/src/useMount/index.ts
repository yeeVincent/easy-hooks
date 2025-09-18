import { useEffect } from 'react';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';


// let _deps

// const useEffect = function(cb, deps){
//   let isNoDeps = !deps

//   let isDepsChange = _deps ? deps.every((el, i) => el === _deps[i]) : true

//   if(isNoDeps || isDepsChange ){
//     cb?.()
//     _deps = deps
//   }
// }

const useMount = (fn: () => void) => {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
      );
    }
  }

  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
