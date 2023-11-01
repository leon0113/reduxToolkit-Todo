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
            todo.text ? (state.todos.unshift(todo)) : alert("Please write a TODO");
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => (todo.id === action.payload) ? { ...todo, isEdit: true } : todo)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.isEdit ? { ...todo, text: action.payload, isEdit: false } : todo)
        },
        cancelEditTodo: (state) => {
            state.todos = state.todos.map((todo) => todo.isEdit ? { ...todo, isEdit: false } : todo)
        }
    }
});


export const { addTodo, editTodo, updateTodo, deleteTodo, cancelEditTodo } = todoSlice.actions;

export default todoSlice.reducer;