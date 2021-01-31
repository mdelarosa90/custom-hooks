import { useState, useCallback } from "react"

export const useCounter = (initialState = 10) => {
   const [state, setState] = useState(initialState);

   const increment = useCallback(() => {
       setState(c => c+1);
   },[]);

   const decrement = useCallback(() => {
       setState(c => c-1);
   },[]);

   const reset = () => setState(initialState);

   return {
       state,
       increment,
       decrement,
       reset
   }
}
