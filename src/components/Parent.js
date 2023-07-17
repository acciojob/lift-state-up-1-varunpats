import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [showModal, setShowModal] = useState(false);

    const getState = (newState) => {
        setShowModal(newState);
    }

    return (
        <div className="parent"> 
            <h2>Parent Component</h2>
            <Child modal = {showModal} setState = {getState}/>
        </div>
    )
}

export default Parent;