import { FC, useState } from "react";
import { IconButton, Typography, Box, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import constant from "../theme/constants.json";
import './style.css';
import clsx from "clsx";

const styles = {
    root: {
        minHeight: constant.headerHeight,
        position: "sticky",
        top: "0",
        zIndex: 1000,
        backdropFilter: "blur(10px)",
        padding: "0 1rem",
    },
    wraper: {
        maxWidth: "1400px",
        margin: "auto",
        height: constant.headerHeight,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    linksContainer: {
        display: { xs: "none", md: "flex" },
    },
    links: {
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "uppercase",
        margin: "0 1rem",
        color: constant.lightBlackText,
        borderRadius: ".5rem",
        padding: ".25rem .5rem",
        textDecoration: "none",
    },
    menuIcon: {
        display: { xs: "block", md: "none" },
    },
    mobileMenuContainer: {
        height: `calc(100vh - ${constant.headerHeight})`,
        zIndex: 1000,
        backdropFilter: "blur(6px)",
        padding: "0 1rem",
        position: "fixed",
        left: "0",
        right: "0",
        top: constant.headerHeight,
        display: { xs: "flex", md: "none" },
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: "translate(-110%)",
        transition: "transform 300ms",
    },
    links_mobile: {
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "uppercase",
        margin: "1rem",
        color: "black",
        borderRadius: ".5rem",
        padding: ".5rem 1rem",
        textDecoration: "none",
    },
};

interface Link {
    label: string;
    href: string;
    target: "_blank" | "_self";
}

const Header: FC = () => {
    const [isDrawer, setIsDrawer] = useState(false);

    const handleDrawer = () => {
        setIsDrawer(!isDrawer);
    };

    const links: Link[] = [
        {
            label: "resume",
            href: "https://drive.google.com/file/d/1cqcPSkPL_DSmtZvi7KaJl-3fQb_UZjQI/view",
            target: "_blank",
        },
        {
            label: "projects",
            href: "#projects",
            target: "_self",
        },
        {
            label: "contact-me",
            href: "#send-message",
            target: "_self",
        },
    ];

    return (
        <>
            <Box sx={styles.root}>
                <Box sx={styles.wraper}>
                    <Typography className='colorFullText logoTextBharatRajput' component="div">
                        Tipper
                    </Typography>
                    <Box sx={styles.linksContainer}>
                        {links.map((link) => (
                            <Typography
                                key={link.label}
                                className={clsx('colorFullText')}
                                component={Link}
                                variant="caption"
                                href={link.href}
                                target={link.target}
                                sx={styles.links}
                            >
                                {link.label}
                            </Typography>
                        ))}
                    </Box>
                    <IconButton sx={styles.menuIcon} onClick={handleDrawer}>
                        <MenuIcon style={{ height: "2rem", width: "2rem" }} />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{ ...styles.mobileMenuContainer, transform: isDrawer ? "translate(0%)" : "translate(-110%)" }}
                onClick={handleDrawer}
            >
                {links.map((link) => (
                    <Typography
                        key={link.label}
                        component={Link}
                        variant="caption"
                        href={link.href}
                        target={link.target}
                        sx={styles.links_mobile}
                    >
                        {link.label}
                    </Typography>
                ))}
            </Box>
        </>
    );
};

export default Header;
