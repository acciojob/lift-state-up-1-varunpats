import React, { useState } from "react";

const Child = (props) => {
    const [flag, setFlag] = useState(false);

    const btnClick = () => {
        setFlag(!props.modal);
        props.setState(!props.modal);
    }

    return (
        <>
            <h2>Child Component</h2>
            <button onClick={btnClick}>Show Modal</button>
            {flag && <div>
                <h3>Modal Content</h3>
                <p>This is the modal content.</p>
            </div>}
        </>
    )
}

export default Child;