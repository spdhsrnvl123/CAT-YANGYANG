import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { setList } from '../store/store'


const MainCard = ({img})=>{
  //Redux
  let list = useSelector((state) => state.name);
  let dispatch = useDispatch();
  
  const handleHeartClick = () => {
    dispatch(setList(img))
    window.alert("장바구니에 추가되었습니다.")
  }

  // const heartIcon = alreadyFavorite ? "💖" : "🤍";
    // const alreadyFavorite = list.includes(img);
    // console.log(alreadyFavorite)

    return(
        <>
          <Card style={{ border:"0", marginLeft:"2px", width:"352px" , marginBottom:"20px"}}>
            <Card.Img width="200px" height="400px" src={img} alt="Card image" />
          </Card>
          <Button onClick={handleHeartClick} variant="dark">💖</Button>
        </>
    )
}

export default MainCard;