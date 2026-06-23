import React,{createContext,useState} from "react";
export const themeContext=createContext() /// a new context is created
export const themeProvider=({children})=>{
    const [theme,setTheme]=useState('light')
    const toggleTheme=()=>{

        setTheme(prev=>prev==='light'?"dark":'light')

    }
    if(!children) {console.error("themeProvider must have children")
        return null
    }
}


    <themeContext.provider value={{theme,toggleTheme}}></themeContext.provider>
