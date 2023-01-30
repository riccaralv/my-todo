import './scss/App.scss';
// import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import ToDosContainer from './components/ToDosContainer';
import Help from './views/Help';
import NotFound from './views/NotFound';
import ToDonesContainer from './components/ToDonesContainer';
import { Routes, Route } from 'react-router-dom';
import ContextContainer from './Context/ContextContainer';

function App() {
  /* Elimino desde aquí hasta el return, porque todo lo vamos a pasar a ContextContainer.jsx

    const tasks = [
        { id: 0, text: 'Walk a cat', done: false },
        { id: 1, text: 'Walk a god', done: false },
        { id: 2, text: 'Pay taxes', done: false },
        { id: 3, text: 'Buy food', done: false },
        { id: 4, text: 'Play some music', done: false },
        { id: 5, text: 'Learn React', done: true },
        { id: 6, text: 'Build a Website', done: true },
        { id: 7, text: 'Reading', done: true },
        { id: 8, text: 'Sleep more than 6 hours', done: true },
    ];

    const [items, setItems] = useState(tasks);

    // queremos filtrar 'tasks' en función de que la tarea esté o no hecha y así poder definir los que van a ser nuestros props
    const toDos = items.filter((element) => !element.done);
    const toDones = items.filter((element) => element.done);

    // función añadir items desde form
    const addItem = (value) => {
        // value es el texto me escribo en el form
        const newItem = { id: items.length, text: value, done: false };
        setItems([...items, newItem]);
        // una vez que lo añadimos, lo "metemos" en la local storage
        localStorage.setItem('todos', JSON.stringify(items));
    }; // "todos" sería una variable que definimos. El otro argumento se encarga de transformar nuestro objeto JS en objeto JSON

    // función que cambie el valor de la propiedad 'done' y este valor lo tenemos que pasar a `ToDosContainer.jsx' y de ahí a 'ToDoItem.jsx'

    const updateItem = (id) => {
        // return a copy items,
        // change only the done states,
        // check id with item.id
        const updatedItems = items.map((item) => {
            // if (item.id === id) {
            //   item.done = !item.done;
            //   return item;
            // } else return item;
            return item.id === id ? { ...item, done: !item.done } : item;
        });

        // const updateItemBack = (id) => {
        //   const updatedItemsBack = items.map(item => {
        //     return item.id === id ? { ...item, done: !item.done } : item;
        //   })
        // }; // realmente esto podemos quitarlo, puesto que para quitar elementos de la lista, usaríamos la misma lógica que hemos usado antes para añadir las tareas a la lista

        setItems(updatedItems);

        localStorage.setItem('todos', JSON.stringify(updatedItems));
    };

    // Ahora vamos a gestionar que no se pierdan los datos o los cambios una vez que refresquemos la página
    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('todos'));
        if (tasks) {
            setItems(tasks);
        }
    }, []);

    // ahora tenemos que pasar dichos props a cada uno de los child components
    */

  return (
    <ContextContainer>
      <div className='app'>
        <Navigation />
        {/* <Navigation> está fuera de <Routes> */}
        <Routes>
          <Route
            path='/'
            element={
              <>
                <ToDosContainer
                // ya no necesitamos pasarlos por aquí, por lo hacemos desde ContextContainer.jsx
                // items={toDos}
                // handleAddToDo={addItem}
                // handleChange={updateItem}
                />
                {/* así paso los props a ToDosContainer y a ToDonesContainer */}
                {/* paso la funcionalidad de addItem a donde está el form */}
                <ToDonesContainer
                // ya no necesitamos pasarlos por aquí, por lo hacemos desde ContextContainer.jsx
                // items={toDones}
                // handleChange={updateItem}
                />
              </>
            }
          />

          <Route path='help' element={<Help />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </ContextContainer>
  );
}

export default App;
