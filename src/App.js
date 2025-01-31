// src/App.js
import React, { useState } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { Button, Box, Typography } from "@mui/material";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    console.log("Current theme mode:", !isDarkMode ? "Dark" : "Light");
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <Button variant="contained" onClick={toggleTheme} color="primary">
          {isDarkMode ? "ライトモード" : "ダークモード"}
        </Button>
      </Box>
      <Typography variant="h6" color="primary" align="center" gutterBottom>
        テーマのテストメッセージ
      </Typography>
    </ThemeProvider>
  );
}

export default App;
