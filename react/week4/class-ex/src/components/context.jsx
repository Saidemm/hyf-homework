import React, { useContext } from 'react';

const ThemeContext = React.createContext()
export default function Parent() {

    return (
        <ThemeContext.Provider value='dark'>
            <Child data="something for grandChild"></Child>
        </ThemeContext.Provider>
    )
}
function Child() {
    return (
        <GrandChild ></GrandChild>
    )
}
function GrandChild() {
    const theme = useContext(ThemeContext);

    return (
        
        <div>{theme}</div>
    )
}