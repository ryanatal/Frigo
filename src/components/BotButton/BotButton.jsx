import React, { useState } from 'react';
import Bot from '../Bot/Bot';

function BotButton() {
    const [showBot, setShowBot] = useState(false);

  return (
    <>
      {showBot && <Bot />}
      <button onClick={() => setShowBot(prevShowBot => !prevShowBot)} style={{position: 'fixed', bottom: 0, right: 0}}>
        Show Bot
      </button>
    </>
  );
}

export default BotButton