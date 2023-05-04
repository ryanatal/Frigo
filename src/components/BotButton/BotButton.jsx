import React, { useState } from 'react';
import Bot from '../Bot/Bot';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./BotButton.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

function BotButton() {
    const [showBot, setShowBot] = useState(false);
    
    return (
        <>
            <Button variant="success" className='bot-button-design' onClick={() => setShowBot(true)}>
                <FontAwesomeIcon icon={faCommentDots} />
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