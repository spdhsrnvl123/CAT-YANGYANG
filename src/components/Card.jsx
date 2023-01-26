import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setList } from '../store/store'

const Img = styled.img`
  width:340px;
  height:400px;
  border-radius: 30px;
  box-shadow: 2px -2px 3px;
`;

const Container = styled.div`
   border:0;
   margin-left:2px;
   width:352px;
   margin-bottom:20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Button = styled.button`
    border : 0;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    /* color:white; */
    background-color: #212529;
    margin-top: 20px;
    cursor: pointer;
`

const MainCard = ({img})=>{
  //Redux
  let list = useSelector((state) => state.name);
  let dispatch = useDispatch();
  
  const handleHeartClick = () => {
    dispatch(setList(img))
    window.alert("장바구니에 추가되었습니다.")
  }
    return(
        <>
          <Container>
            <Img src={img} alt="Card image" />
            <Button onClick={handleHeartClick} >💖</Button>
          </Container>
        </>
    )
}

export default MainCard;