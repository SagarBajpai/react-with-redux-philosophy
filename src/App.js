import React, { useReducer } from 'react';

const todos = [
  {
    id: 'a',
    task: 'Learn React',
    completed: true,
    link: 'https://www.robinwieruch.de/the-road-to-learn-react/',
  },
  {
    id: 'b',
    task: 'Learn Firebase',
    completed: true,
    link:
      'https://www.robinwieruch.de/the-road-to-react-with-firebase-book/',
  },
  {
    id: 'c',
    task: 'Learn GraphQL',
    completed: false,
    link: 'https://www.robinwieruch.de/the-road-to-graphql-book/',
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: true };
        } else {
          return todo;
        }
      });
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, completed: false };
        } else {
          return todo;
        }
      });
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, todos);

  return (
    <div>
      <ul>
        {state.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  dispatch({
                    type: todo.completed ? 'UNDO_TODO' : 'DO_TODO',
                    id: todo.id,
                  })
                }
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
