import React from 'react';

const Form = () => {
    return (
        <div>
            <label htmlFor="">Email Address</label>
            <input type="text" placeholder='Enter Email Id' />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter Password'/>
            <button>Submit</button>
        </div>
    );
};

export default Form;