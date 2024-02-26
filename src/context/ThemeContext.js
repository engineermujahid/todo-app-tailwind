import React, { createContext, useContext, useState } from 'react'

const Theme = createContext()
export function ThemeContext() {
    return useContext(Theme);
}

export const ThemeProvider = ({ children }) => {


    const [state, setState] = useState(true)
    const [textColor, setTextColor] = useState("")
    const [backgroundColor, setBackgroundColor] = useState("")
    const [componentColor, setComponentColor] = useState("")

    return <Theme.Provider value={{ state, setState, componentColor, setComponentColor, textColor, setTextColor, backgroundColor, setBackgroundColor }}>
        {children}
    </Theme.Provider>
}