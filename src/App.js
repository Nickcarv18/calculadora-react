import { useEffect, useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { Container, Content, Row } from './styles';


function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
      if (theme) {
        document.documentElement.setAttribute("data-theme", theme);
        setTheme(theme);
      }
  },[theme])

  const handleClear =() => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  } 

  const lightMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  const handleAddNumber = (num) => {
    if(num === "."){
      setCurrentNumber(prev => `${prev === '0' ? '0' : prev}${num}`);
    }else{
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
    }
  } 

  const handleAddSinal = () => {
    const newValue = parseFloat(currentNumber) * -1;
    setCurrentNumber(newValue);
  } 

  const handleCalculatePercent = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('%');
    } else {
      let resultPercent;
      switch (operation) {
        case '+':
          resultPercent = Number(firstNumber) + Number(firstNumber) * (Number(currentNumber) / 100);
          break;
        case '-':
          resultPercent = Number(firstNumber) - Number(firstNumber) * (Number(currentNumber) / 100);
          break;
        case '÷':
          resultPercent =
            Number(firstNumber) / (Number(firstNumber) / (Number(firstNumber) / (Number(currentNumber) / 100)));
          break;
        case 'x':
          resultPercent = Number(firstNumber) * (Number(currentNumber) / 100);
          break;
        default:
          break;
      }

      setCurrentNumber(String(resultPercent));
      setOperation('');
    }
  };

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    }else{
      const result = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
    }
  } 

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    }else{
      const result = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
    }
  } 

  const handleDivideNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('÷');
    }else{
      const result = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
    }
  } 

  const handleMultiplyNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('x');
    }else{
      const result = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(result));
      setOperation('');
    }
  } 

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '÷':
          handleDivideNumbers();
          break;
        case 'x':
          handleMultiplyNumbers();
          break;
        case '%':
          handleCalculatePercent();
          break;
          default:
            break;
      }
    }
  } 

  return (
    <Container>
      <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button label="C"  onClick={() => handleClear()} className={'clear'}/>
            <Button label="&#9728;" onClick={lightMode} className={'lightMode'}/>
            <Button label="%" onClick={handleCalculatePercent}/>
            <Button label="÷" onClick={handleDivideNumbers}/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="x" onClick={handleMultiplyNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={handleMinusNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" onClick={handleSumNumbers}/>
          </Row>
          <Row>
            <Button label="." onClick={() => handleAddNumber('.')}/>            
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="+/-" onClick={handleAddSinal}/>
            <Button label="=" onClick={handleEquals} className={'equal'}/>
          </Row>
      </Content>
    </Container>
  );
}

export default App;
