import styled from 'styled-components';

const CatTitle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Gluten:wght@500&display=swap');
    font-family: 'Gluten', cursive;
    font-size: 53px;
    text-align: center;
    margin : 30px;
    text-shadow: 3px -1px 2px gray;
`

export default function Title(){
    return(
        <CatTitle>
          CAT Background
        </CatTitle>
    )
}