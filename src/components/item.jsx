import React from "react";

const Item = (props) => {
    return(
        <div className=" w-44">
            <img src={props.image} alt="" />
            <p  className="mx-2">{props.name}</p>
            <div>
                <div>
                    <p>{props.price}</p>
                </div>



            </div>

        </div>
    )
}

export default Item