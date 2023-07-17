import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [showModal, setShowModal] = useState(false);

    const getState = (newState) => {
        setShowModal(newState);
    }

    return (
        <div className="parent"> 
            <h1>Parent Component</h1>
            <Child modal = {showModal} setState = {getState}/>
        </div>
    )
}

export default Parent;