import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { orange } from "@mui/material/colors";
import { CardDataContext } from "../context/CardDataContext";
import { Timer } from "./Timer";
import MoveCounter from "./MoveCounter";

const Navbar = () => {
  const { handleNewGame, gameStarted, gameCompleted } =
    useContext(CardDataContext);

  return (
    <AppBar position="static" sx={{ bgcolor: orange[300] }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box id="navbar-left-side">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" sx={{ mx: 1 }} onClick={handleNewGame}>
            New Game
          </Button>
        </Box>
        <Box id="navbar-right-side" display="flex" gap={2} alignItems="center">
          {gameStarted && !gameCompleted && (
            <>
              <Timer />
              <MoveCounter />
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
