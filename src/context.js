import { createContext, useState } from "react";


export var postProvider = createContext();

export var PostProvider = (props)=>{
   const [changePost,setChangePost]= useState([]);

   return (
    <postProvider.Provider value={{changePost,setChangePost}}>
       {props.children}
    </postProvider.Provider>
   )
}
