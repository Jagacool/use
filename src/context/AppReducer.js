
// esto se ejecuta con el dispatch()
export  default function appReducer(state, action ) {
    console.log('desde appReducer', state, action)

    switch (action.type) {
      //
      case "ADD_TASK":
        return {
// esto es donde se  implementerá el payload..
          tasks: [...state.tasks,  action.payload],
        };
        //
      case "DELETE_TASK":
  //  console.log(action.payload)     
        return {
          tasks: state.tasks.filter(task => task.id !== action.payload)
        };
        //
    
       //
       case 'TOGGLE_TASK_DONE':
       return {
         tasks: state.tasks.map((task) =>
           task.id === action.payload ? {...task , done: !task.done} : task
         ),
       };

      default:
      return state;
    }
}




