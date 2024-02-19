import { useContext } from "react";
import { CardGrid } from "./components/CardGrid";
import Navbar from "./components/Navbar";
import { StartGameSetup } from "./components/StartGameSetup";
import { CardDataContext } from "./context/CardDataContext";
import { Box } from "@mui/material";
import { GameCompletion } from "./components/GameCompletion";

function App() {
  const { gameStarted, gameCompleted } = useContext(CardDataContext);

  return (
    <>
      <Navbar />
      <Box id="main-container" display="flex" justifyContent="center" my={5}>
        {gameStarted && <CardGrid />}
        {gameCompleted && <GameCompletion />}
        {!gameStarted && !gameCompleted && <StartGameSetup />}
      </Box>
    </>
  );
}

export default App;
