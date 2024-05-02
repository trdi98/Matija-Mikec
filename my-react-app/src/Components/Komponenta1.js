import React from "react";
const animals = ['slon', 'zebra', 'pas'];

export default function Komponenta1() {
    return <div>Ovo su moje zivotinje:  {animals.join(', ')}
    <br></br>
    </div>
}