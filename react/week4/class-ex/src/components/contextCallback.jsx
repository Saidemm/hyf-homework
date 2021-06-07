import React, { useContext, useState } from 'react';


const ThemeContext = React.createContext('light');
// 1. Change the state in the GrandChild component
// 2. State change should be visible in the Parent Component
function Parent() {
  const [state, setState] = useState("light")
  return (
    <div>
      {state}
      <ThemeContext.Provider value={{state, setState}}>
        <Child></Child>
     </ThemeContext.Provider>
    </div>
  )
}
function Child() {
  return (
    <GrandChild></GrandChild>
  )
}
function GrandChild() {
  const theme = useContext(ThemeContext);
  console.log(theme)
  return (
    <botton onClick={() => theme.setState("dark")} ></botton> 
    <div>{theme}</div>
  )
}
export default Parent;
white_check_mark
eyes
raised_hands





