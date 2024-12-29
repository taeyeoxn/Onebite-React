const Controller = ({onClickBoutton}) => {
    return (
        <div>
            <button onClick={() => {onClickBoutton(-1)}}>-1</button>
            <button onClick={() => {onClickBoutton(-10)}}>-10</button>
            <button onClick={() => {onClickBoutton(-100)}}>-100</button>
            <button onClick={() => {onClickBoutton(+100)}}>+100</button>
            <button onClick={() => {onClickBoutton(+10)}}>+10</button>
            <button onClick={() => {onClickBoutton(+1)}}>+1</button>
        </div>
    );
};

export default Controller;