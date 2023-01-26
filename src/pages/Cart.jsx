import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteList } from '../store/store';

const Title = styled.h1`
    font-size: 42px;
    margin-top: 27px;
    margin-bottom: 27px;
`

const Container = styled.ul`
    height: 100%;
    width: 100%;
    /* background: whitesmoke; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const List = styled.li`
    width:180px;
    height: 200px;
    margin : 10px;
    
    border-radius: 20px;
    box-shadow: 0.5px -0.5px 2px;
    overflow: hidden;
    transition: all 1s;
`

const Img = styled.img`
    width : 100%;
    height: 80%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transition: all .4s;
    &:hover{
        transform: scale(1.07);
    }
`
const Button = styled.button`
    width: 50px;
    height: 20px;
    color: white;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    margin : 0 auto;
    padding-top: 17px;
    font-weight: bold;
    border: 0;
    border-radius : 20px;
`

const Cart = ()=>{
    let list = useSelector((state) => state.name);
    let dispatch = useDispatch()

    return(
        <>
        <Title>Cart list</Title>
            <Container>
                {
                    list.map((v,i)=>{
                        return(
                            <List key={i}>
                                <Img src={v} alt="Cart-List-Image" />
                                <Button onClick={()=>{
                                    let isBoss= window.confirm("삭제하시겠습니까?")
                                    console.log(isBoss)
                                    console.log(i)
                                    if(isBoss){
                                        dispatch(deleteList(i))
                                    }else{
                                        console.log("삭제를 취소하였습니다.")
                                    }
                                }}><AiOutlineDelete/></Button>
                            </List>
                        )
                    })
                }
            </Container>
        </>

    )
}

export default Cart;
