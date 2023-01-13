import styled, { keyframes } from "styled-components";


const Wrap = styled.section`
  width: ${(props) => props.width};
  //백틱 기호 안에서 계산식은 $를 사용함. 태그안에 props를 설정해 주고 싶을 경우
  height: 300px;
  background-color: #ccc;
`

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  line-height: 300px;
  color: ${(props) => props.color ? 'blue' : 'green' };
  //props가 있으면 props.color가 있으면 blue 없으면 green // 조건식으로 삼항연산자를 사용.
`

//styled 컴포넌트를 이용하면 콤포넌트 리턴을 돌려야 할 것들을 작은 컴포넌트로 만들어 돌려줌.

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: ${(props) => props.font || '16px'};
  text-align: center;
  line-height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: ${(props) => props.bg || 'white'};
  //props.bg가 들어오면(colo: ;r가 있으면) props.bg를 쓰고, 그렇지 않으면 white를 씀.
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`

//스타일을 상속받아서 쓰는 법

const FirstButton = styled(Button)`
//***Button의 모든 속성을 상속받고, 사이즈를 달리하고 싶은 props만 다르게 표현할 수 있음.
  width: 200px;
`

const rotate = keyframes`
  0%{transform: rotate(0deg);}  
  100%{transform: rotate(360deg);}  
`
//keyframes를 적는 순간 상단에 import안에 자동으로 keyframes이 생성
//백틱을 쓸때 띄워쓰지 않고 앞의 요소와 붙여쓰기

const Rotate = styled.div`
  font-size: 50px;
  padding: 30px;
  display: inline-block;
  animation: ${rotate} 1s infinite linear;
`

const StyledComponent = () => {

  return(
    <>
      <Wrap width='800px'>
        <Title color>Front-end</Title>
        <Title>React</Title>
      </Wrap>
      <Button bg='yellow' font='20px'>Click</Button>
      <Button>Click</Button>
      <FirstButton bg='pink'>Click</FirstButton>
      <Rotate>*lala</Rotate>
    </>
  )

}

export default StyledComponent;