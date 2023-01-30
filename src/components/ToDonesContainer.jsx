import ToDoneItem from './ToDoneItem';

// para poder coger "toDones" desde MyContext.Provider
import { useContext } from 'react';
import { MyContext } from '../Context/ContextContainer';

// el primer día tenía los datos aquí, pero prefiero que todos me vengan del parent ('App.jsx') y pasarlos como props
// const toDones = [
//   {text: "Learn React"},
//   {text: "Build a Website"},
//   {text: "Reading"},
//   {text: "Sleep more than 6 hours"}
// ];
const ToDonesContainer = () => {
    // sustituyo los props que recibía aquí con la línea siguiente
    const { toDones } = useContext(MyContext);
    // mejor crear una const y referenciarla abajo
    const toDonesItems = toDones.map((toDone) => {
        // lo mismo que en 'ToDosContainer.jsx'
        // return (
        //   <div className="todones-item" key={todone.text}>
        //     <p>{todone.text}</p>
        //     <div className="actions">
        //       <button className="btn">&#8635;</button>
        //     </div>
        //   </div>
        // );
        return <ToDoneItem key={toDone.id} item={toDone} />;
    });

    return (
        <div className='todones-container'>
            <h3>BACKLOG</h3>
            {toDones.length > 0 && toDonesItems}
            {/* solo se da render si hay algo en 'todones' */}
        </div>
    );
};

export default ToDonesContainer;
