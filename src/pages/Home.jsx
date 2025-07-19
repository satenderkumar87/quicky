import React from 'react'
import Form from '../components/Form'
import { Box, Card, CardContent, Typography, Button, TextField, Stack } from '@mui/material'

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#fafbfc',
      }}
    >
      <Card sx={{ minWidth: 400, maxWidth: 600, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Stack spacing={3} alignItems="center">
            <Typography variant="overline" color="primary" fontWeight={700} sx={{ letterSpacing: 2 }}>
              AI App
            </Typography>
            <Typography variant="h4" align="center" fontWeight={700}>
              What should we build?
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary">
              Start designing and generating code with AI
            </Typography>
            <TextField
              fullWidth
              placeholder="Build your dream web app with AI"
              variant="outlined"
              size="medium"
            />
            <Stack direction="row" spacing={2} width="100%" justifyContent="center">
              <Button variant="contained" color="primary" fullWidth>
                Submit
              </Button>
              {/* <Button variant="outlined" color="primary" fullWidth>
                Get Extension
              </Button> */}
            </Stack>
            {/* Optionally, include your Form component below if needed */}
            {/* <Form /> */}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Home