document.getElementById('scanButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const content = doc.querySelector('.novel-content'); // Sesuaikan dengan selector yang tepat
            document.getElementById('novelContent').innerHTML = content.innerHTML;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
