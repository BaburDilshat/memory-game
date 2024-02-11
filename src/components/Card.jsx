import { Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";

const Card = () => {
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
    ></Box>
  );
};

export default Card;
