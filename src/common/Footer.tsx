import React from "react";
import { alpha, Grid, Typography, Box, Link } from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import constant from "../theme/constants.json";

const styles = {
    root: {
        background: alpha(constant.shiningBlue, 0.3),
        color: alpha("#000", 0.7),
    },
    bottomBanner: {
        background: constant.shiningBlue,
        padding: ".5rem 0",
        color: "white",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    topBanner: {
        maxWidth: "1400px",
        margin: "0 auto",
    },
    bharatrajput: {
        fontSize: "32px",
        padding: ".5rem",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        padding: ".5rem",
        borderRadius: "1rem",
        "&:hover": {
            background: "rgba(0,0,0,0.1)",
        },
        transition: "background 400ms",
    },
};

interface SocialHandle {
    icon: JSX.Element | string;
    name: string;
    link: string;
}

const Footer: React.FC = () => {
    const socialHandles: SocialHandle[] = [];

    return (
        <Box sx={styles.root}>
            <Box sx={styles.topBanner}>
                <Typography sx={styles.bharatrajput}></Typography>
                <Grid container sx={{ padding: "1rem" }}>
                    {socialHandles.map((social) => (
                        <Grid item xs={6} md={3} key={social.name}>
                            <Typography
                                component={Link}
                                target="_blank"
                                sx={styles.link}
                                href={social.link}
                            >
                                {social.icon}
                                <Box component="span" sx={{ width: "10px" }} />
                                {social.name}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Typography sx={styles.bottomBanner}>
                Developed with <FavoriteIcon sx={{ margin: "0 .5rem" }} /> by xyz
            </Typography>
        </Box>
    );
};

export default Footer;
