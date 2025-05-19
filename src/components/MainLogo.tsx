import React from 'react';
import { logos } from '../data/logo';

const MainLogo: React.FC = () => {
    const mainLogo = logos[0];
    return (
        <img
            src={mainLogo.avatar}
            alt={mainLogo.name}
            style={{ height: 48 }}
        />
    );
};

export default MainLogo;