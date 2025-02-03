document.getElementById('fetchButton').addEventListener('click', function() {
    const url = document.getElementById('url').value;
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('content').innerHTML = data.contents;
        })
        .catch(error => {
            document.getElementById('content').innerHTML = 'Terjadi kesalahan: ' + error;
        });
});
