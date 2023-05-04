import React, { useState } from 'react';
import Bot from '../Bot/Bot';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./BotButton.scss";

function BotButton() {
    const [showBot, setShowBot] = useState(false);
    
    return (
        <>
            <Button variant="success" onClick={() => setShowBot(true)} style={{position: 'fixed', bottom: 0, right: 0, backgroundColor: "#de1f1f", borderColor: "#de1f1f"}}>
                Show Bot
            </Button>
            <Modal show={showBot} onHide={() => setShowBot(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>FrigoBot</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Bot />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default BotButton;