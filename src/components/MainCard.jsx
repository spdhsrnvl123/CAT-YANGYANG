const MainCard = ({img,onHeartClick,alreadyFavorite})=>{

    const heartIcon = alreadyFavorite ? "💖" : "🤍";
    
    return(
        <div className="main-card">
            <img
                src = {img}
                alt = ""
                width = "260"
            />
            <button onClick={onHeartClick}>{heartIcon}</button>
        </div>
    )
}

export default MainCard;