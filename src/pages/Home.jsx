import { useState,useEffect } from 'react';
import MainCard from '../components/Card';
import CardForm from '../components/Form';
import ClickPlease from '../components/ClickPlease';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

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

const Home =()=>{
    const Loading = "https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif"
    const [mainCat,setMainCat] = useState(Loading);
    async function setInitialCat(){
        const newCat = await fetchCat('first Cat')
        setMainCat(newCat);
    }
    useEffect(()=>{
        setInitialCat();
    },[])

    async function update(value){
        const main_img = await fetchCat(value);
        setMainCat(main_img);
    }


    return (
            <>
                <Main>
                    <CardForm onUpdate={update} />
                    <MainCard img={mainCat} />
                </Main>
                <Footer>
                    <ClickPlease />
                </Footer>
            </>
    )
}
export default Home;