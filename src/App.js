import { useState,useEffect } from 'react';
import MainCard from './components/MainCard';
import CardForm from './components/Form';
import ClickPlease from './components/ClickPlease';
import Title from './components/Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import Menu from './components/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { setList } from './store/store';

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
`

const Content = styled.div`
    max-width: 414px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding : 30px;
`

const Footer = styled.footer`
    text-align: center;
    display: flex;
    align-items: center;
    font-size : 24px;
    padding-bottom: 30px;
    @import url('https://fonts.googleapis.com/css2?family=Gluten:wght@500&display=swap');
    font-family: 'Gluten', cursive;
`

const fetchCat = async (text) => {
    const OPEN_API_DOMAIN = "https://cataas.com";
    const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
    //fetch API를 사용하여 이 도메인에 입력한 대사를 json으로 받아오라는 뜻.
    console.log(response)
    const responseJson = await response.json();
    
    return `${OPEN_API_DOMAIN}/${responseJson.url}`;
};

function App() {
        const Loading = "https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif"
        //Redux
        let list = useSelector((state) => state.name);
        let dispatch = useDispatch();
        const [mainCat,setMainCat] = useState(Loading);
        async function setInitialCat(){
            const newCat = await fetchCat('first Cat')
            setMainCat(newCat);
        }
        useEffect(()=>{
            setInitialCat();
        },[])
        const handleHeartClick = () => {
            dispatch(setList(mainCat))
        }
        async function update(value){
            const main_img = await fetchCat(value);
            setMainCat(main_img);
        }
        // const alreadyFavorite = list.includes(mainCat);

  return (
      <Container>
        <Reset />
        <Content>
                <header>
                    <Title />
                </header>
                <Menu />
                <Main>
                    <CardForm onUpdate={update} />
                    <MainCard img={mainCat} onHeartClick={handleHeartClick}  />
                     {/* alreadyFavorite={alreadyFavorite} */}
                </Main>
                <Footer>
                    <ClickPlease />
                </Footer>
            </Content>
      </Container>
  );
}

export default App;
