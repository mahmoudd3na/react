import { useEffect, useState } from "react";

export default function Quotes() {

    const [factData, setFactData] = useState("");

    async function fetchFact() {
        const response = await fetch("https://catfact.ninja/fact");
        const result = await response.json();
        console.log(result); 
        setFactData(result.fact); 
    }
    useEffect(()=>{
        fetchFact()
    },[]); 




    return (
        <div>
            <h1>{factData}</h1>
            <button onClick={fetchFact}>generate new Quote</button>
        </div>

    )

}