// React Hook : Hook is a special function that allows functional components to use
// react features without writing class components
// if function begings with use it is probably a react use state.
//  (useState,useEffect,useContext,useReducer,useCallback and many more)

// useState() : it is a react hook that allows the the creation of a stateful variable and a Setter function to update its value in
// the virtual Dom basically by using the usate hook we can create not just a variable but a stateful variable
// [name] [setname]

import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

function APP() {
  return (
    <>
      {/* <MyComponent /> */}
      <Counter />
    </>
  );
}

export default APP;
