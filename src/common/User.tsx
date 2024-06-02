import React from 'react';
import { Card, CardContent, CardMedia, Button, TypographyProps, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface UserCardProps {
    image: string;
    name: string;
    details: string;
    onPayTip: () => void;
}

const StyledCard = styled(Card)({
    maxWidth: 345,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
});

const GradientText = styled(Typography)<TypographyProps>({
    background: 'linear-gradient(90deg, #1e8bff, #6955ff 45%, #a83af5 50%, #c03ada 75%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
});

const GradientButton = styled(Button)({
    width: '100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    background: 'linear-gradient(90deg, #1e8bff, #6955ff 45%, #a83af5 50%, #c03ada 75%)',
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    fontWeight: 'bold',
});

const UserCard: React.FC<UserCardProps> = ({ image, name, details, onPayTip }) => {
    return (
        <StyledCard>
            <div>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={name}
                    sx={{ objectFit: 'scale-down' }}
                />
                <CardContent>
                    <GradientText gutterBottom variant="h5" component="div">
                        {name}
                    </GradientText>
                    <GradientText variant="body2">
                        {details}
                    </GradientText>
                </CardContent>
            </div>
            <GradientButton onClick={onPayTip}>
                Pay Tip
            </GradientButton>
        </StyledCard>
    );
};

export default UserCard;
