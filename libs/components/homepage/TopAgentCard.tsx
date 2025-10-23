import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";

const TopAgentCard = () => {
    return (
        <Stack className={"card"}>
            <Box className={"image-box"}>
                <img src="/img/profile/girl.svg" alt="" className={"image"} />
            </Box>
            <Box className={"info"}>
                <strong className={"name"}>Martin</strong>
                <p className={"role"}>Agent</p>
            </Box>
        </Stack>
    );
};

export default TopAgentCard;