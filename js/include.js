// index.js 파일 또는 해당 코드가 위치한 파일에서 실행
fetch("../header.html")
    .then(response => {
    return response.text()
    })
    .then(data => {
    document.querySelector("header").innerHTML = data;
});

fetch("../footer.html")
    .then(response => {
    return response.text()
    })
    .then(data => {
    document.querySelector("footer").innerHTML = data;
});