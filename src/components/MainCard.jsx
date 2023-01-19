import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MainCard = ({img,onHeartClick,alreadyFavorite})=>{

    const heartIcon = alreadyFavorite ? "💖" : "🤍";
    
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt="" />
            <Button onClick={onHeartClick} variant="outline-info">{heartIcon}</Button>
        </Card>
    )
}

export default MainCard;