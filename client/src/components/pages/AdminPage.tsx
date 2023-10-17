import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { upDateHandlerThunk } from '../../redux/slices/user/UserThunks';

export default function AdminPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const initialValues = {
    username: user.username,
    email: user.email,
    password: user.password,
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(upDateHandlerThunk(formValues));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextField
          label="Name"
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ m: 1, width: '25ch' }}
        />

        <TextField
          label="Email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ m: 1, width: '25ch' }}
        />

        <TextField
          label="Password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
          variant="outlined"
          type="password"
          sx={{ m: 1, width: '25ch' }}
        />

        <Button variant="contained" type="submit" sx={{ m: 1 }}>
          Save
        </Button>
      </Box>
    </form>
  );
}
