import React from "react";
import { Box } from "@mui/material";
import Header from "./common/Header";
import Footer from "./common/Footer";
import UserCard from "./common/User";
import user_image from "./media/employee.webp"

const HomePage: React.FC = () => {
    const handlePayTip = () => {
        alert('Tip Paid!');
    };
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Header />
            <Box sx={{ minHeight: "100vh", padding: 20 }}>
                <UserCard
                    image={user_image}
                    name="Bharat Singh"
                    details="Professional Web Developer with over 5 years of experience in building scalable web applications."
                    onPayTip={handlePayTip}
                />
            </Box>
            <Footer />
        </Box>
    );
};

export default HomePage;
