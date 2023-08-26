export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      // Existing logic for adding tasks
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "DELETE_TASK":
      // Existing logic for deleting tasks
      return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };

    case "TOGGLE_TASK_DONE":
      // Existing logic for toggling task done
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };

    case "ADD_TO_CART":
      // Add the product to the cartItems array
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case "REMOVE_FROM_CART":
      // Remove the product from the cartItems array
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      // Update the quantity of a specific product in the cartItems array
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

    default:
      return state;
  }
}
