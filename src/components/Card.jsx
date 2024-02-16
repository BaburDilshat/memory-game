import { Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";

const Card = ({ data }) => {
  const { id, imageUrl, isFlipped, isMatched } = data;
  return (
    <Box
      height={100}
      width={100}
      bgcolor={"white"}
      margin={1}
      sx={{
        "&:hover": {
          bgcolor: deepPurple[200],
        },
      }}
    >
      <img src={imageUrl} alt={`card-${id}`} loading="lazy" height="100%" />
    </Box>
  );
};

export default Card;
