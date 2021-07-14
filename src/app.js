import React from "react"
import Card from "./Card"
import tower from "./tower.jpg"
import angryCat from "./angry-cat.jpg"

function App() {

    return (
        <div>
            <Card uwu={tower} title="this is a picture of a tower"/>
            <Card uwu={angryCat} title="I am very angry"/>
            
        </div>
    )

}



export default App
