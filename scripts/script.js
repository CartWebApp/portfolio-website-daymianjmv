// Display a warning message in the console when dev tools are opened
(function() {
    const message = `
    %c⚠️ WARNING ⚠️
    
    This site is a work in progress. 
    Please note that some features may not be fully functional yet.
    Thank you for your patience!
    `;

    const style = `
        font-size: 16px;
        font-weight: bold;
        color: #ff0000;
        background-color: #ffff00;
        padding: 10px;
        border: 2px solid #ff0000;
        border-radius: 5px;
    `;

    console.log(message, style);
})();