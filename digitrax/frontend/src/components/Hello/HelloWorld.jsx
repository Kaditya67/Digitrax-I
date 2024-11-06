// frontend/src/HelloWorld.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HelloWorld() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('/api/hello/')
            .then(response => setMessage(response.data.message))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Hello, world!</h1>
            <p>{message}</p>
        </div>
    );
}

export default HelloWorld;
