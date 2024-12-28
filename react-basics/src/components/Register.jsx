import { useState, useRef } from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        birth:"",
        country:"",
        bio:"",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current ++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
            // [property의 키로 설정]
        });
    };

    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }

    }

    return (
        <div>

            <div>
            <input 
            ref={inputRef}
            name='name'
            value={input.name} 
            onChange={onChange} 
            placeholder='이름'
            />
            </div>

            <div>
            <input type='date'
            name='date'
            value={input.birth}
            onChange={onChange}
            />
            </div>

            <div>
                <select 
                value={input.country}
                name='country'
                onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>

            <div>
                <textarea
                name='bio'
                value={input.bio}
                onChange={onChange} />
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;