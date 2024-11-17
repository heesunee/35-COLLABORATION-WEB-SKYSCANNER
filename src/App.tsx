import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import styled from "styled-components";
import { useEffect } from "react";

const App = () => {
  //뷰포트 높이를 즉시 계산하여 커스텀 된 100vh를 보여줌
  function setScreenSize() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Title>글꼴 테스트</Title>
      </Container>
    </ThemeProvider>
  );
};



//스타일
const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
`;

const Title = styled.h1`
    ${({ theme }) => theme.fonts.head1_eb_30};
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    margin: 2rem 0;
    font-weight: bold;
`;

export default App;
