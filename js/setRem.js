let setRem = () => {
    let ui_w = 375;
    let client_w = document.documentElement.clientWidth || document.body.clientWidth;
    let html = document.querySelector('html');
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}

window.onload = setRem;
window.onresize = setRem;