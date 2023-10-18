import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

export default function MainPage(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Изменяем направление флекс-контейнера на вертикальное
        alignItems: 'center', // Выравниваем по центру по горизонтали
        '& > :not(style)': {
          mb: '50px', // Отступ между карточками по вертикали
          width: '70%',
        },
      }}
    >
      <Paper
        
      >
        <Typography sx={{
          m: '5% 10%', // Отступы 0% сверху и снизу, 15% слева и справа
        }}>
          Краткое описание стека технологий, примененных для реализации приложения.
        </Typography>
      </Paper>
      <Paper
        elevation={9}
      >
        <Typography
          sx={{
            m: '0 10%', // Отступы 0% сверху и снизу, 15% слева и справа
          }}
        >
          <ul>
            <li>Регистрация</li>
            <p>Регистрация. Можете изменить регистрационные данные в этой форме.</p>
            <li>Авторизация. Можете изменить регистрационные данные в этой форме.</li>
            <p>Регистрация. Можете изменить регистрационные данные в этой форме.</p>
            <li>Добавление постов. Можете изменить регистрационные данные в этой форме.</li>
            <p>Регистрация. Можете изменить регистрационные данные в этой форме.</p>
            <li>Запись в БД. Можете изменить регистрационные данные в этой форме.</li>
            <p>Регистрация. Можете изменить регистрационные данные в этой форме.</p>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
}
