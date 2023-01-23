import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Form2 = ({onUpdate})=>{
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

        <InputGroup className="mb-3" onSubmit={create}>
        {/* <form onSubmit={create}> */}
        <Form.Control
          className = "input_style"
          type="text"
          value={value}
          onChange={translate}
          placeholder="Please enter English language."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="dark">Click</Button>
        {/* </form> */}
        <p>{errorMessage}</p>
      </InputGroup>
        // <form onSubmit={create}>
        //     <input
        //         className = "input_style"
        //         type ="text"
        //         placeholder="Please enter English language."
        //         value={value}
        //         onChange ={translate}
        //         style={{marginRight:"20px"}}
        //     />
        //     <Button variant="dark">Dark</Button>
        //     <p>{errorMessage}</p>
        // </form>
    )
}

export default Form2;