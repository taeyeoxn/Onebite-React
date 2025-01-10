import { TodoStateContext } from '../App';
import './List.css'
import TodoItem from './TodoItem'
import { useState, useContext } from 'react';

const List = () => {
    const todos = useContext(TodoStateContext);
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if(search === ""){
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    return (
        <div className='List'>
            <h4>Todo List🌱</h4>
            <input 
            value={search}
            onChange={onChangeSearch}
            placeholder='검색어를 입력하세요'/>
            <div className='todos_wrapper'>
                {filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </div>
        </div>
    );
};

export default List;