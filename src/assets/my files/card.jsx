import React, { use } from "react";
import Product from "./product";

const Card = ({cardpromiss}) => {
    
    console.log(cardpromiss)
    const data=use(cardpromiss);
    console.log(data)

    return (
        <div className="container mx auto">
            
            <Product data={data}></Product>
        </div>
    );
};

export default Card;