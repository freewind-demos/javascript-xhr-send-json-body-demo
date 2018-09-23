document.getElementById('xhr-trigger').onclick = () => {
    const request = new XMLHttpRequest()
    request.open('POST', '/data.json', true)
    request.onload = function () {
        const data = JSON.parse(request.responseText)
        document.getElementById('data').innerText = JSON.stringify(data, null, 2)
    }
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify({'username': 'freewind'}))
}

