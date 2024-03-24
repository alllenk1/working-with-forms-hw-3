import React from 'react';

import { cnWinMessage } from './WinMessage.classname';

import './WinMessage.css';

const WinMessage = () => {
    return (
        <p className={cnWinMessage()}>Победа! 🥳</p>
    );
}

export { WinMessage };