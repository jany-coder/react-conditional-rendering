import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    
    // first type of condition
    let greetings;
    if(familiar) {
        greetings = <p>Welcome, my friend.</p>;
    } else {
        greetings = <p>Who the hell are you?</p>
    }

    // 2nd type condition (ternary operator)   
    const greetings2 = familiar ? <p>Hello, my friend</p>
                        : <p>Who are you?</p>
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greetings}
                {greetings2}
            </div>
            <div>
                <h2>Food</h2>
                {
                    familiar 
                    ? <p>I will buy food for you</p> :
                    <p>Let's it his his whose whose?</p>
                }
                
            </div>
            <div>
                <h2>Connection</h2>
                {/* logical && true */}
                {
                    familiar && <p>Let,s join facebook</p>
                }
            </div>
        </div>
    );
};

export default User;