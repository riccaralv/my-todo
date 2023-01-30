import { MyContext } from '../Context/ContextContainer';
import { useContext } from 'react';

const ToDoItem = ({ item }) => {
    // los datos me vienen de 'ToDosContainer.jsx' (parent component)
    // const toDo = props.item;

    const { updateItem } = useContext(MyContext);

    return (
        <div className='todos-item'>
            <p>{item.text}</p>
            <div className='actions'>
                <button className='btn' onClick={() => updateItem(item.id)}>
                    &#10004;
                </button>
            </div>
        </div>
    );
};

export default ToDoItem;
