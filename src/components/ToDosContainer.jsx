import ToDoItem from './ToDoItem';
import { useState, useContext } from 'react';
import { MyContext } from '../Context/ContextContainer';

// el primer día tenía los datos aquí, pero prefiero que todos me vengan del parent ('App.jsx') y pasarlos como props
// const toDos = [
//   {text: "Walk a god"},
//   {text: "Pay taxes"},
//   {text: "Buy food"},
//   {text: "Play some music"}
// ];
// estos son los props que vienen de 'App.jsx'
const ToDosContainer = () => {
    // aquí había unos props que me venían de App.jsx, pero los he borrado y he creado la siguiente línea (para poder usarlos)
    const { toDos, addItem } = useContext(MyContext);

    const [value, setValue] = useState('');

    const handleNewToDoChange = (e) => {
        setValue(e.target.value);
    };

    // cuando le doy a submit "meto" el nuevo item desde form
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(value);
        setValue('');
    };

    // mejor crear una const y referenciarla abajo
    const toDosItems = toDos.map((toDo) => {
        //  en la clase anterior los datos del todo los cogía de este mismo archivo; ahora los paso como props a 'ToDoItem.jsx' (por eso el código está comentado)
        //  return (
        //    <div className="todos-item">
        //      <p key={todo.text}>{todo.text}</p>
        //      <div className="actions">
        //        <button className="btn">&#10004;</button>
        //      </div>
        //    </div>
        //  );
        return <ToDoItem key={toDo.id} item={toDo} />;
    });

    return (
        <div className='todos-container'>
            <form className='todo-form' onSubmit={handleSubmit}>
                <label htmlFor='todo' className='input-item'>
                    <input
                        type='text'
                        name='todo'
                        id='todo'
                        value={value}
                        onChange={handleNewToDoChange}
                    />
                </label>
                <input type='submit' value='ADD' className='btn' />
            </form>
            <h3>TO DO</h3>
            {toDos.length > 0 && toDosItems}
        </div>
    );
};

export default ToDosContainer;
