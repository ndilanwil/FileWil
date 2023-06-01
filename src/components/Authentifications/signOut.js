import { useState } from "react"


export default function SignOut(){
    localStorage.setItem("username", null)
    
}