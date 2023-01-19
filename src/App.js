import { useState,useEffect } from 'react';
import MainCard from './components/MainCard';
import Form from './components/Form';
import ClickPlease from './components/ClickPlease';
import Title from './components/Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

     const fetchCat = async (text) => {
            const OPEN_API_DOMAIN = "https://cataas.com";
            const response = await fetch(`${OPEN_API_DOMAIN}/cat/says/${text}?json=true`);
            //fetch API를 사용하여 이 도메인에 입력한 대사를 json으로 받아오라는 뜻.
            const responseJson = await response.json();
            
            return `${OPEN_API_DOMAIN}/${responseJson.url}`;
        };

const Wrapper = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 480px;
    margin: 0 auto;
    border: 1px solid powderblue;

`

function App() {
        const Loading = "https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif"
        
        const [list, setList] = useState([]);
        const [mainCat,setMainCat] = useState(Loading);
        
        async function setInitialCat(){
            const newCat = await fetchCat('first Cat')
            setMainCat(newCat);
        }

        useEffect(()=>{
            setInitialCat();
        },[])
        //setInitialCat() 함수가 한번만 실행되게 useEffect로 감싸주었다.
        const handleHeartClick = () => {
            setList([...list,mainCat]);
        }
        console.log(list)
        //첫번째 handleHearClick 함수가 실행되면 mainCat에는 Loading 이미지가 mainCat이 된다.
        //두번째 setInitialCat() 함수에 fetchCat 비동기 함수가 실행되어 mainCat 이미지는 'firtst Cat'을 텍스트 문구로 한 이미지 데이터가 얻게된다.

        async function update(value){
            const main_img = await fetchCat(value);
            setMainCat(main_img);
            // setCounter(counter + 1)
        }

        const alreadyFavorite = list.includes(mainCat);

// 삭제기능 구현
const ResultList = ({value,index})=>{    
    const onClick = (newValue,newIndex)=>{
        console.log(newIndex)
        setList((item)=>{
            const targetIndex = newIndex;
            return[...item.slice(0,targetIndex),...item.slice(targetIndex+1)]
        })
    }

    return(
        <li>
            <img
                src={value}
                alt =""
            />
            <button onClick={()=>onClick(value,index)}>X</button>
        </li>
    )
}


  return (
      <Wrapper>
            <header>
                <Title />
            </header>
            <main>
                <Form onUpdate={update} />
                <MainCard img={mainCat} onHeartClick={handleHeartClick} alreadyFavorite={alreadyFavorite} />
            </main>
            <footer>
                {
                    list.length === 0 ? <ClickPlease /> :
                    <ul>
                        {
                            list.map((value,index) => (
                                <ResultList key={index} index={index} value={value}></ResultList>
                            ))
                        }
                    </ul> 
                }
            </footer>
      </Wrapper>
  );
}

export default App;
