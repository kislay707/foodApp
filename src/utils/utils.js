
exports.getData = () => {
    var req = new XMLHttpRequest();
    const promise = new Promise((resolve, reject) => {
        req.open("GET", "http://temp.dash.zeta.in/food.php");
        req.onload = () => {
            resolve(req.responseText);
        };
        req.onerror = () => {
            reject(new Error(
                req.responseText));
        };
        req.send();
    });
    return promise;
}

