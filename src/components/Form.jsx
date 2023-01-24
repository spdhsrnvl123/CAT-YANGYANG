import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
`

const Input = styled.input`
    border:0.1px solid gray;
    border-radius: 10px;
    width: 270px;
    font-size: 18px;
    padding: 5px;
`
const Button = styled.button`
    border : 0;
    border-radius: 10px;
    margin-left: 10px;
    width: 60px;
    height: 30px;
    color:white;
    background-color: #212529;
`

const CardForm = ({onUpdate})=>{
    const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const translate = (e)=>{
        const userValue = e.target.value; //input값이 저장되는 이벤트객체의 속성위치를 변수 지정.
        setErrorMessage("") //함수가 호출될 때 마다 초기값을 지정해줘야 된다.
        if(includesHangul(userValue)){
            setErrorMessage("You cannot input Korean!");
        }
        setValue(userValue.toUpperCase()); //소문자를 대문자로 변경.
    }

    const create = (e)=>{
        e.preventDefault();
        setErrorMessage("")
        if(value === ""){
            setErrorMessage("It cannot be submitted with an empty value!")
            return; //return을 작성을 안하면 빈값일 때도 onUpdate(value)함수가 실행이 되기 때문에 꼭 return 작성.
        }
        onUpdate(value);
    }

    return(
        <>
            <Form onSubmit={create}>
                <Input
                    className = "input_style"
                    type="text"
                    value={value}
                    onChange={translate}
                    placeholder="Please English language."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button>Click</Button>
            </Form>
            <p style={{margin : "10px" , color : "red"}}>{errorMessage}</p>
        </>

    )
}

export default CardForm;