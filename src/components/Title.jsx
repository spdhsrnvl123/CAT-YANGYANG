import styled from 'styled-components';

const CatTitle = styled.div`
    font-size: 45px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 50px;
    font-weight: bold;
    color: #1e6b89;
    text-shadow: 2px 3px 3px powderblue;
`

export default function Title(){
    return(
        <CatTitle>
          CAT Background
      </CatTitle>
    )
}