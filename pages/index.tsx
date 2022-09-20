import type { NextPage } from 'next'
import Head from 'next/head'
import {Box, Container, TextField, Typography} from "@mui/material";
import {ChangeEvent, FC, useState} from "react";
import {requiredPixelSize} from "../libs/index"

const Home: NextPage = () => {
  const [result, setResult] = useState("")
  const [error, setError] = useState(false)

  const validator = (value: string) => {
    return /^[0-9\s]+$/.test(value);
  }

  const onError = () => {
    setResult("")
  }

  const onChange = (value: string, error: boolean) => {
    if (error) return;
    const list = value
    .trim()
    .split(" ")
    .filter(e => e.length > 0)
    .map(e => Number.parseInt(e));
    setResult(requiredPixelSize(list) + "")
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm">
        <Box minHeight="100vh" display="flex" justifyContent="center" alignItems="center" flex="1" flexDirection="column">
        <Typography variant='h3' component='h1' align='center'>ピクセル計算機</Typography>
        <Typography component='p' align='center' margin="4rem 0">イラストロジックのピクセル数を計算します</Typography>

        
        <ReactiveTextField label='塗りつぶすピクセルの数' helperText='スペース区切りの数列を入力してください。' validator={validator} onChange={onChange} onError={onError}></ReactiveTextField>
        <p>ピクセル数:{result}</p>
        </Box>

      </Container>
    </div>
  )
}

export default Home


type Validator = (value: string) => boolean;
type OnChange = (value: string, error: boolean) => void 
type OnError = () => void

type Props = {
    label?: string;
    helperText?: string;
    validator?: Validator;
    onChange?: OnChange;
    onError?: OnError;
}

const ReactiveTextField: FC<Props> = ({label, helperText, validator, onChange, onError}) => {
    const [error, setError] = useState(false)
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const changedValue = event.target.value
        const isError = validator === undefined ? false : !validator(changedValue);
        setError(isError)
        if (onError !== undefined && isError) {
            onError();
        }
        if (onChange !== undefined) {
          onChange(changedValue, isError)
        }
    }

    return (
        <TextField label={label} helperText={helperText} error={error} onChange={handleChange}></TextField>
    )
}