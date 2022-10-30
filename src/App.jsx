import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
  Heading,
  Stack,
  FormHelperText,
  Select,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

function App() {

  const [countries, setCountries] = useState([])

  const findCountries = async () => {
    const response = await fetch('https://amazon-api.sellead.com/country')
    const data = await response.json()

    const arrayAuxiliar = []
    for (let index in data) {
      arrayAuxiliar.push({
        code: data[index].code,
        ptBRname: data[index].name_ptbr,
      })
    }

    setCountries(arrayAuxiliar)
  }

  const [cities, setCities] = useState([])

  const findCities = async () => {
    const response = await fetch('https://amazon-api.sellead.com/city')
    const data = await response.json()

    const arrayAuxiliar = []
    for (let index in data) {
      arrayAuxiliar.push({
        code: data[index].code,
        ptBRname: data[index].name_ptbr,
      })
    }

    setCities(arrayAuxiliar)
  }



    useEffect(() => {
    findCountries()
    findCities()
    
  }, []);

  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="darkblue"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="10"
      >
        Informações Pessoais
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={1000}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={2}
          p="9"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl display="flex" flexDir="column" gap="10">
            <HStack spacing="20">
              <Box w="50%">
                <FormHelperText
                  margin="auto"
                  width="50%"
                  padding="15px">
                  Dados Pessoais
                </FormHelperText>
                <FormLabel htmlFor="nome">Nome</FormLabel>
                <Input id="nome" />
              </Box>
              <Box w="50%">
              <FormHelperText
                  margin="auto"
                  width="50%"
                  padding="30px">
                  Dados Pessoais
                </FormHelperText>
              <Select 
              placeholder='Selecione uma opção' 
              id={"countryId"} 
              name={"countryName"}>
                {
                  countries?.map((country, index) => (
                    <option key={index} value={country.code}>{country.ptBRname}</option>
                  ))}
              </Select>
              </Box>
            </HStack>
            <HStack spacing="20">
              <Box w="46%">
                <FormLabel htmlFor="nasc">E-mail</FormLabel>
                <Input id="email" type="email" />
              </Box>
              <Box w="46%">
               <Select 
               placeholder='Selecione uma opção' 
               id={"cityId"} 
               name={"cityName"}>
                {
                  cities?.map((city, index) => (
                    <option key={index} value={city.code}>{city.ptBRname}</option>
                  ))}
              </Select>
                </Box> 
            </HStack>
            <HStack spacing="10">
              <Box w="46%">
                <FormLabel htmlFor="cel">Telefone</FormLabel>
                <Input id="cel" type="number" />
              </Box>
            </HStack>
            <HStack spacing="20">
              <Box w="46%">
                <FormLabel htmlFor="endereco">CPF</FormLabel>
                <Input id="cpf" />
              </Box>
            </HStack>
            <HStack>
              
            </HStack>
            <HStack justify="center">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="darkblue"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                _hover={{ bg: "teal.800" }}
              >
                Enviar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  )
}

export default App
