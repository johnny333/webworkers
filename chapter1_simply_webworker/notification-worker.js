function _httpGetWrapper(url, success) {
    fetch(url)

        .then(function (response) {
            return response ? response.json() : {};
        })
        .then(function (response) {

            success({name: response.name, message: response.message});
        });
}

self.addEventListener('activate', function (event) {
    // Perform install steps
    setInterval(function () {
        _httpGetWrapper("http://localhost:3000/message", function (data) {
            if (data.name != "_") {
                const title = data.name;
                const options = {
                    body: data.message
                };
                self.registration.showNotification(title, options);
            }

        })
    }, 10000)
})
;
