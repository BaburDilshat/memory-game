import { Box } from "@mui/material";
import { orange } from "@mui/material/colors";
import React, { useContext } from "react";
import { CardDataContext } from "../context/CardDataContext";

const Card = ({ data }) => {
  const { id, imageUrl, isFlipped, isMatched, hint } = data;
  const { handleCardClick } = useContext(CardDataContext);

  return (
    <>
      {isMatched ? (
        <Box height={100} width={100}></Box>
      ) : (
        <Box
          height={100}
          width={100}
          sx={{
            bgcolor: isFlipped ? "none" : "white",
            "&:hover": {
              bgcolor: isFlipped ? "none" : orange[200],
            },
            ...(hint ? hintAnimation : {}),
          }}
          onClick={() => handleCardClick(data)}
        >
          {isFlipped ? (
            <img
              src={imageUrl}
              alt={`card-${id}`}
              loading="lazy"
              height="100%"
            />
          ) : null}
        </Box>
      )}
    </>
  );
};

export default Card;

const hintAnimation = {
  animationName: "wiggle",
  animationDuration: "0.3s",
};
