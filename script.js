document.getElementById('send-button').onclick = function() {
    var textInput = document.getElementById('text-input').value;

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'text=' + encodeURIComponent(textInput)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = 'Sentiment: ' + data.sentiment;
    })
    .catch(error => console.error('Error:', error));
};
