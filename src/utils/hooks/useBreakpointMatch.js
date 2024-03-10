import { useMediaQuery, useTheme } from "@mui/material";

export function useBreakpointMatch(){
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down());
}