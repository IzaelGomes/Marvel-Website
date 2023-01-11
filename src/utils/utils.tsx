import { useEffect, useState } from "react";


export function SaveLocalStorage(key:string, characterss:any){
    const [characters, setCharacters] = useState(() =>{
        return characterss
    })


    useEffect(() =>{
        window.localStorage.setItem(key, JSON.stringify(characters))
    }, [characters])

    return [characters, setCharacters]
}

