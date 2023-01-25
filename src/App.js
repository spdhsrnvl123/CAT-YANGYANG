import { Reset } from "styled-reset";
import Router from "./router/router"
import styled from "styled-components";
import Title from "./components/Title";
import Menu from "./components/Menu";
import { BrowserRouter } from "react-router-dom";

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Gluten', cursive;
    margin: 0 auto;
`

const Content = styled.div`
    max-width: 414px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%);
`

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Container>
          <Reset />
            <Content>
              <header>
                <Title />
              </header>
                <Menu />
                <Router />
            </Content>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
