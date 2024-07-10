import React from "react";
import { Link } from "react-router-dom";


function VendingMachine(){
    return (
        <>
            <div>
                <h2><Link to="/soda">SODA</Link></h2>
                <h2><Link to="/chips">CHIPS</Link></h2>
                <h2><Link to="/fresh-sardines">fresh sardines</Link></h2>
            </div>
        </>
    )
}

export default VendingMachine;