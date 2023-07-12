import React from 'react';

const Content = () => {
    function clickTextArea(){
        const inputValue = document.getElementById('inputArea').value;

        document.getElementById('outputArea').textContent = inputValue;
    }

    return (
        <div>
            <textarea id="inputArea"></textarea>
            <br></br>
            <button onClick={clickTextArea}>Click Btn</button>
            <br></br>
            <span id="outputArea"></span>
        </div>
    );
};

export default Content;