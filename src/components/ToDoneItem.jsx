import { useContext } from 'react';
import { MyContext } from '../Context/ContextContainer';

const ToDoneItem = ({ item }) => {
    const { updateItem } = useContext(MyContext);

    return (
        <div className='todones-item'>
            <p>{item.text}</p>
            <div className='actions'>
                <button className='btn' onClick={() => updateItem(item.id)}>
                    &#8635;
                </button>
            </div>
        </div>
    );
};

export default ToDoneItem;
