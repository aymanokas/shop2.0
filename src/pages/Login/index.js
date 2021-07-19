import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import BreadCrumb from '../../components/BreadCrumb'
import Footer from '../../components/Footer'
import { Typography, makeStyles, TextField, Button } from '@material-ui/core'
import style from './style'
import Container from '../../components/Container'
import { signupAction, signinAction } from './store'
import { useDispatch } from 'react-redux'

const useStyle = makeStyles(style)
export default _ => {
  const { row, headerText, active, slash, paper, root, textFieldClass, button } = useStyle()
  const dispatch = useDispatch()
  const [isLogin, setIslogin] = useState('login')
  const [email, setEmail] = useState('')
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handleUsernameChange = (e) => setUsername(e.target.value)
  const handleRegister = () => dispatch(signupAction({ email, userName, password }))
  const handleLogin = () => dispatch(signinAction({ userName, password }))
  return (
    <>
      <NavBar fixed />
      <BreadCrumb pathname='Login' />
      <Container>
        <div className={row}>
          <Typography onClick={() => setIslogin(!isLogin)} className={isLogin ? [headerText, active] : headerText}>Login</Typography>
          <Typography className={slash}> / </Typography>
          <Typography onClick={() => setIslogin(!isLogin)} className={!isLogin ? [headerText, active] : headerText}>Register</Typography>
        </div>
        <div className={root}>
          <div className={paper}>
            {
              isLogin
                ? <>
                  <TextField label='Username' className={textFieldClass} variant='outlined' onChange={handleUsernameChange} />
                  <TextField label='Password' className={textFieldClass} variant='outlined' onChange={handlePasswordChange} />
                  <Button onClick={handleLogin} className={button}>Login</Button>
                  </>
                : <>
                  <TextField label='Email' className={textFieldClass} variant='outlined' onChange={handleEmailChange} />
                  <TextField label='Username' className={textFieldClass} variant='outlined' onChange={handleUsernameChange} />
                  <TextField label='Password' className={textFieldClass} variant='outlined' onChange={handlePasswordChange} />
                  <Button onClick={handleRegister} className={button}>Register</Button>
                </>
            }
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
