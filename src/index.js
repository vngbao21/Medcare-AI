import React from "react"
import App from "./components/App.js"
import './styles/global.css'
import { createRoot } from 'react-dom/client';

const rootNode = document.getElementById('root');
const root = createRoot(rootNode);

function ChatNow() {
    const shoot = () => {
        root.render(<App />);
    }

    const buttonStyles = {
        border: '2px solid #16a085',
        padding: '10px 20px',
        fontSize: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '5px',
        display: 'block',
        margin: 'auto',
    };

  
    const iconStyles = {
        marginRight: '5px', 
        fontSize: '20px',
    };

    return (
        <button style={buttonStyles} onClick={shoot}>
            <span style={{ fontWeight: 'bold', fontSize: '20px'}}>Trò chuyện ngay!  </span>
            <span style={iconStyles} className="far fa-comment-dots"></span>
        </button>
    );
  }

root.render(<ChatNow />);