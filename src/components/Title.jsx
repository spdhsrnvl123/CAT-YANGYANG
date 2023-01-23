import styled from 'styled-components';

const CatTitle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@700&display=swap');
    font-family: 'Cabin Sketch', cursive;
    font-size: 74px;
    text-align: center;
    margin : 20px;
`

export default function Title(){
    return(
        <CatTitle>
          CAT Background
      </CatTitle>
    )
}