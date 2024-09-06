document.getElementById('encodeButton').addEventListener('click', encodeText);
document.getElementById('decodeButton').addEventListener('click', decodeText);

function encodeText() {
    const inputText = document.getElementById('inputText').value;
    if (inputText === "") {
        displayNoMessage();
    } else {
        const encodedText = btoa(inputText);
        document.getElementById('outputText').value = encodedText;
        hideNoMessage();
    }
}

function decodeText() {
    const inputText = document.getElementById('inputText').value;
    if (inputText === "") {
        displayNoMessage();
    } else {
        try {
            const decodedText = atob(inputText);
            document.getElementById('outputText').value = decodedText;
            hideNoMessage();
        } catch (e) {
            alert('Texto inválido!');
        }document.getElementById('encodeButton').addEventListener('click', encodeText);
        document.getElementById('decodeButton').addEventListener('click', decodeText);
        
        function encodeText() {
            const inputText = document.getElementById('inputText').value;
            if (inputText === "") {
                displayNoMessage();
            } else {
                const encodedText = btoa(inputText);
                document.getElementById('outputText').value = encodedText;
                hideNoMessage();
            }
        }
        
        function decodeText() {
            const inputText = document.getElementById('inputText').value;
            if (inputText === "") {
                displayNoMessage();
            } else {
                try {
                    const decodedText = atob(inputText);
                    document.getElementById('outputText').value = decodedText;
                    hideNoMessage();
                } catch (e) {
                    alert('Texto inválido!');
                }
            }
        }
        
        function displayNoMessage() {
            document.querySelector('.message').style.display = 'flex';
            document.getElementById('outputText').style.display = 'none';
        }
        
        function hideNoMessage() {
            document.querySelector('.message').style.display = 'none';
            document.getElementById('outputText').style.display = 'block';
        }
    }
}

function displayNoMessage() {
    document.querySelector('.message').style.display = 'flex';
    document.getElementById('outputText').style.display = 'none';
}

function hideNoMessage() {
    document.querySelector('.message').style.display = 'none';
    document.getElementById('outputText').style.display = 'block';
}