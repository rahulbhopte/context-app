import { useContext, useState } from "react"
import { ProfileContext } from "../contexts/ProfileContext"

export default function Profile(){
  const[updateUsername,setUpdateUsername]=useState("")
const profileContextValues=useContext(ProfileContext)
  return(
    <div style={{marginTop:30}}>
      <input type="text" placeholder="username" value={updateUsername} onChange={(e)=>setUpdateUsername(e.target.value)}/>
      <button onClick={(e)=>{
        profileContextValues.setUsername(updateUsername)
      }}>update username</button>
    </div>
  )
}