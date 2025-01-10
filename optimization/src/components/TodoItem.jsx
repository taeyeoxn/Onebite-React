import { memo } from 'react';
import './TodoItem.css'

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
        <div className='TodoItem'>
            <input 
            onChange={onChangeCheckbox}
            checked={isDone} 
            type='checkbox'/>
            <div className='content'>{content}</div>
            <div className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

// // 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevprops, nextprops)=>{
//     // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//     // T -> Props 바뀌지 않음
//     // F -> Props 바뀜 -> 리렌더링 O
//     if(prevprops.id != nextprops.id) return false;
//     if(prevprops.isDone != nextprops.isDone) return false;
//     if(prevprops.content != nextprops.content) return false;
//     if(prevprops.date != nextprops.date) return false;

//     return true;
// });

export default memo(TodoItem);