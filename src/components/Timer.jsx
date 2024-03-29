import React, { useContext, useEffect } from "react";
import { CardDataContext } from "../context/CardDataContext";
import { differenceInHours, differenceInMinutes } from "date-fns";
import { Box, Typography } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const Timer = () => {
  const {
    startedTimeStamp,
    diffSeconds,
    setDiffSeconds,
    diffMinutes,
    setDiffMinutes,
    diffHours,
    setDiffHours,
  } = useContext(CardDataContext);

  useEffect(() => {
    if (startedTimeStamp) {
      const interval = setInterval(() => {
        const currentTimeStamp = new Date();

        const currentDiffMinutes =
          differenceInMinutes(currentTimeStamp, startedTimeStamp) % 60;
        const currentDiffHours = differenceInHours(
          currentTimeStamp,
          startedTimeStamp
        );

        if (currentDiffHours !== diffHours) {
          setDiffHours(currentDiffHours);
        }

        if (currentDiffMinutes !== diffMinutes) {
          setDiffMinutes(currentDiffMinutes);
        }

        setDiffSeconds((prev) => {
          if (prev === 59) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startedTimeStamp]);

  const getTimerDisplayValue = () => {
    let displayValue = `${diffSeconds}s`;

    if (diffMinutes > 0) {
      displayValue = `${diffMinutes}m ${diffSeconds}s`;
    }

    if (diffHours > 0) {
      displayValue = `${diffHours}hr ${diffMinutes}m ${diffSeconds}s`;
    }

    return displayValue;
  };

  return (
    startedTimeStamp && (
      <Box display="flex" alignItems="center" gap={1}>
        <AccessAlarmIcon />
        <Typography>{getTimerDisplayValue()}</Typography>
      </Box>
    )
  );
};

export { Timer };
