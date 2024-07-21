import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Hobby = () => {
    const [hobbies, setHobbies] = useState([
        {
            id: uuidv4(),
            hobby: 'Music'
        },
        {
            id: uuidv4(),
            hobby: 'Piano'
        }
    ])

    console.log(hobbies);

    const deleteHobby = (hobbyId) => {
        const updatedHobbies = hobbies.filter(item =>  item.id !== hobbyId);
        setHobbies(updatedHobbies);
    }

    return (
        <div>
            <h1>Rate your Hobbies!</h1>
            {
                hobbies.map((item, i) => {
                    return <li key={item.id}>
                        <select>
                            <option>Likes</option>
                            <option>Loves</option>
                        </select>
                        {item.hobby}
                        <button onClick={() => deleteHobby(item.id)}>X</button>
                    </li>
                })
            }
        </div>
    );
}

export default Hobby;