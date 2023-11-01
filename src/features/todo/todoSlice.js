import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: nanoid(),
        text: 'Learn RTK',
        isEdit: false
    }]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isEdit: false
            };
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const updateableTodo = state.todos.find(todo => todo.id == id);
            if (updateableTodo) {
                updateableTodo.text = text;
            }
        }
    }
});


export const { addTodo, editTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;