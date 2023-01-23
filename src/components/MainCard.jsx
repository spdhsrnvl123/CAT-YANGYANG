import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const MainCard = ({img,onHeartClick,alreadyFavorite})=>{

    const heartIcon = alreadyFavorite ? "💖" : "🤍";

    return(
        <>
        <Card style={{marginLeft:"2px", width:"352px" , marginBottom:"20px"}}>
        <Card.Img width="200px" height="400px"  src={img} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
        {/* // <div style={{width:"340px"}}>
        //     <img width="200px" height="300px" variant="top" src={img} alt="" />
        //     <button onClick={onHeartClick} variant="outline-info">{heartIcon}</button>
        // </div> */}
        <Button onClick={onHeartClick} variant="dark">{heartIcon}</Button>
        </>
    )
}

export default MainCard;