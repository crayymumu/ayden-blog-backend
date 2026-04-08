import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useLogin } from '@refinedev/core'
import { useState } from 'react'
import { EyeOffIcon, HrLogo, ViewIcon } from '@/icons'

export function PageLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)

  const { mutate: login } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = { username: '', password: '' }
    if (!username.trim())
      newErrors.username = '此字段为必填项'
    if (!password.trim())
      newErrors.password = '此字段为必填项'

    setErrors(newErrors)

    if (newErrors.username || newErrors.password)
      return

    setIsLoading(true)
    login(
      { email: username, password },
      { onSettled: () => setIsLoading(false) },
    )
  }

  return (
    <Box
      sx={{
        position: 'relative',
        background:
          'linear-gradient(180deg, #7DE8CD 0%, #C6ECD9 24.5%, #5CD6D6 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          zIndex: 2,
          background: 'white',
          width: '328px',
          padding: '24px',
          borderRadius: '36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <HrLogo />
          <Typography variant="body1" fontWeight={600}>
            Welcome to RefineHR
          </Typography>
        </Box>

        <Divider />

        <Stack spacing={2}>
          <TextField
            fullWidth
            label="用户名或邮箱"
            placeholder="请输入用户名或邮箱"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
              if (errors.username)
                setErrors({ ...errors, username: '' })
            }}
            error={!!errors.username}
            helperText={errors.username}
          />

          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            label="密码"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              if (errors.password)
                setErrors({ ...errors, password: '' })
            }}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <EyeOffIcon /> : <ViewIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          sx={{
            borderRadius: '12px',
            height: '40px',
            width: '100%',
          }}
        >
          {isLoading
            ? (
                <>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  登录中...
                </>
              )
            : (
                '登录'
              )}
        </Button>
      </Box>
      <Box
        sx={{
          zIndex: 1,
          width: {
            xs: '240px',
            sm: '370px',
            md: '556px',
          },
          height: {
            xs: '352px',
            sm: '554px',
            md: '816px',
          },
          position: 'absolute',
          left: '0px',
          bottom: '0px',
        }}
      >
        <img
          src="/images/login-left.png"
          alt="flowers"
          width="100%"
          height="100%"
        />
      </Box>
      <Box
        sx={{
          zIndex: 1,
          width: {
            xs: '320px',
            sm: '480px',
            md: '596px',
          },
          height: {
            xs: '312px',
            sm: '472px',
            md: '584px',
          },
          position: 'absolute',
          right: '0px',
          top: '0px',
        }}
      >
        <img
          src="/images/login-right.png"
          alt="flowers"
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  )
}
