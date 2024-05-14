import { useState } from "react";
import { Container, VStack, HStack, Button, Input, Text } from "@chakra-ui/react";
import { FaEquals } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Note: eval() is used here for simplicity, but it's not recommended for production use due to security risks.
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Simple Calculator</Text>
        <Input value={input} isReadOnly placeholder="0" size="lg" />
        <Text fontSize="2xl">{result}</Text>
        <HStack spacing={2}>
          <Button onClick={() => handleClick("1")}>1</Button>
          <Button onClick={() => handleClick("2")}>2</Button>
          <Button onClick={() => handleClick("3")}>3</Button>
          <Button onClick={() => handleClick("+")}>+</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => handleClick("4")}>4</Button>
          <Button onClick={() => handleClick("5")}>5</Button>
          <Button onClick={() => handleClick("6")}>6</Button>
          <Button onClick={() => handleClick("-")}>-</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => handleClick("7")}>7</Button>
          <Button onClick={() => handleClick("8")}>8</Button>
          <Button onClick={() => handleClick("9")}>9</Button>
          <Button onClick={() => handleClick("*")}>*</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={handleClear}>C</Button>
          <Button onClick={() => handleClick("0")}>0</Button>
          <Button onClick={handleCalculate} colorScheme="teal">
            <FaEquals />
          </Button>
          <Button onClick={() => handleClick("/")}>/</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
