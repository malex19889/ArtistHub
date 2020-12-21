import React from 'react'

export default function Modal(props) {
    const style = {
        modal: {
            display: props.open ? "block" : "none",
            position: "fixed",
            zIndex: 1,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            overflow: "auto",
            backgroundColor: "rgba(0,0,0,0.5)"
        },
        content: {
            backgroundColor: "#fff",
            margin: "15% auto",
            padding: "20px",
            border: "1px solid red",
            width: "80%"
        }
    }
    return <div style={style.modal}>
        <div style={style.content}>
            <button onClick={props.handleRegisterModal}>X</button>
            {props.children}
        </div>
    </div>
}
