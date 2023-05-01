import React, { useState } from 'react';
import Bot from '../Bot/Bot';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import "./BotButton.scss";

function BotButton() {
    const [showBot, setShowBot] = useState(false);
    
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">FrigoBot</Popover.Header>
            <Popover.Body>
                {showBot && <Bot />}
            </Popover.Body>
        </Popover>
    );

    return (
        <>
            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                <Button variant="success" onClick={() => setShowBot(prevShowBot => !prevShowBot)} style={{position: 'fixed', bottom: 0, right: 0}}>
                    Show Bot
                </Button>
            </OverlayTrigger>
        </>
    );
}

export default BotButton;