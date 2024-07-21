import { useState } from 'react';

const TodoList = () => {
    const [todoItems, setTodoItems] = useState(['Learn', 'Shopping', 'Homework'])

    const addItem = () => {
        setTodoItems(prev => {
            return [...prev, 'New Todo Item']
        })
    }

    // const todoItemLi = todoItems.map(item => {
    //     return <li>{item}</li>
    // })

    // console.log(todoItemLi);

    return (
        <div>
            <button onClick={addItem}>Add</button>
            <ul>
                {
                    todoItems.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <span>{item}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default TodoList;