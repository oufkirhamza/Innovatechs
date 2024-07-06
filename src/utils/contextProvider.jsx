
import React, { createContext, useState } from 'react'
export const MyContext = createContext()
export const MyProvider = ({ children }) => {
    const [test, setTest] = useState('Hello Test')
    return (
        <>
            <MyContext.Provider value={ [test, setTest] } >
                {children}
            </MyContext.Provider>
        </>
    )
}
