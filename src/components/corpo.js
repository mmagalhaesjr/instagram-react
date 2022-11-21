import React from "react"
import SideBar from "./sideBar"
import Posts from "./posts"
import Stories from "./stories"


export default function Corpo(){
    return (
        <div class="corpo">
            <div class="esquerda">
              <Stories/>
              <Posts/>
            </div>
            <SideBar/>
            
        </div>
    )
}