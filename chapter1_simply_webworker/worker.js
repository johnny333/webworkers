function count (e) {
    var start = performance.now();
    while (performance.now() - start < e.data) ;
    console.log("end",performance.now())
    var notification = new Notification("Właśnie obliczyłem!");
    var req = new XMLHttpRequest();
    req.open("GET","http://localhost:3000/message");
    req.send();
    console.log(req.responseText);
    this.postMessage('Zwracam wynik');
};

this.addEventListener('message',count);