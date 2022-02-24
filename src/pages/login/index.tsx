import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { userUseCase } from 'src/domain/useCase'
import { useUser } from 'src/hooks/useUser'

export default function Login() {
  const [email, setEmail] = useState('')
  const handleEmailChange = (e: any) => setEmail(e.target.value)
  const isEmailError = email === '' || !email.includes('@')

  const [password, setPassword] = useState('')
  const handlePasswordChange = (e: any) => setPassword(e.target.value)
  const isPasswordError = password === '' || password.length < 8

  const { login } = useUser(userUseCase)

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>ログインしましょう！</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            利用規約は <Link color={'green.400'}>こちら</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={isEmailError}>
              <FormLabel>メールアドレス</FormLabel>
              <Input
                type="email"
                color={'green.400'}
                focusBorderColor={'green.400'}
                placeholder="example@acompany.com"
                value={email}
                onChange={handleEmailChange}
              />
              <FormErrorMessage>
                正しいメールアドレスを入力してください
              </FormErrorMessage>
            </FormControl>
            <FormControl id="password" isInvalid={isPasswordError}>
              <FormLabel>パスワード</FormLabel>
              <Input
                type="password"
                color={'green.400'}
                focusBorderColor={'green.400'}
                onChange={handlePasswordChange}
              />
              {isPasswordError ? (
                <FormErrorMessage>
                  8文字以上のパスワードを設定してください
                </FormErrorMessage>
              ) : null}
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'green.400'}
                color={'white'}
                _hover={{
                  bg: 'green.600',
                }}
                onClick={() => {
                  login(email, password)
                }}
              >
                ログインする
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
