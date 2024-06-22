import {createSlice} from "@reduxjs/toolkit";

export const todosDataSlice = createSlice({
    name: "todosData",
    initialState:{
        data: []
    },
    reducers:{
        setTodosData: (state, action)=>{
            state.data = action.payload;
        },
        addTodo: (state, action)=>{
            state.data = [...state.data, {
                "key": state.data[state.data.length - 1].key+1,
                "todo": action.payload.todoName,
                "due date": action.payload.todoDueDate
            }];
        },
        deleteTodo: (state, action)=>{
            state.data = state.data.filter(record => record.key !== action.payload.key);
        },
        finishTodo: (state, action)=>{
            state.data = state.data.filter(record => record.key !== action.payload.key);
        }
      
    }
});

export const {setTodosData, addTodo, deleteTodo, finishTodo} = todosDataSlice.actions;
export default todosDataSlice.reducer;