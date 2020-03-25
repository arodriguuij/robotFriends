import React, { useState } from 'react';

const CounterButton = (props) => {
        const [counterButtonState, setCounterButtonState] = useState(0);

        const updateCount = () => {
            setCounterButtonState(previousState => previousState + 1);
        }

        return (
            <button color={props.color} onClick={updateCount} >
                Count: {counterButtonState}
            </button>
        )
    }


export default React.memo(CounterButton);