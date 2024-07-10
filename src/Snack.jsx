import React from "react";
import { Link, useParams } from "react-router-dom";

function Snack(){
    const snack = useParams();
    return(
        <>
            <div>
                <h1>Mmmmmmmm, {snack.snack}!</h1>
                <p><Link to="/">Go back to the vending machine!</Link></p>
            </div>
        </>
    );
}

export default Snack;