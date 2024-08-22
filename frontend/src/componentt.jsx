import React, {useState} from 'react';
import api from './api2';

export default function Component() {
const [data, setData] = useState ("");

const onclick = () => {

api.getData().then ((res) => {
    setData(res.data);
    alert(`El mensaje es: ${JSON.stringify(data)}`);
});
};
return (
    <div>
        <button onClick={onclick}> <b>Mira todos nuestros gatitos </b></button>
        
    </div>
)
}