function fetchJson(file, mapJson) {
    fetch(file,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            mapJson(json);
        });
}
function fetchText(file, mapText) {
    fetch(file,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            mapText(text);
        });
}

export { fetchJson, fetchText };
