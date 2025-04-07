import React from "react";

export const Card=(props)=>{
    return(
        <div className="card myCard bg-primary">
            <div className="card-body m-auto">
                <h1 className="display-3 fw-bold text-light">{props.digito}</h1>
            </div>
        </div>
    )
}