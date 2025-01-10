import './List.css'
import TodoItem from './TodoItem'
import { useState, useMemo } from 'react';

const List = ({ todos, onUpdate, onDelete }) => {

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

    const {totalCount, doneCount, notdoneCount} = 
    useMemo (() => {
        console.log("getAnalyzedData 호출!")
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notdoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notdoneCount,
        };
    }, [todos]);
    // 의존성배열 : deps

    // const {totalCount, doneCount, notdoneCount} = getAnalyzedData()

    return (
        <div className='List'>
            <h4>Todo List🌱</h4>
            <div>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>notDone: {notdoneCount}</div>
            </div>

            <input 
            value={search}
            onChange={onChangeSearch}
            placeholder='검색어를 입력하세요'/>
            <div className='todos_wrapper'>
                {filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};

export default List;