(() => {
    let items = document.getElementsByClassName('item');
    let tabs = document.getElementsByClassName('tabs')[0].children;
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('index', i);
        tabs[i].ontouchstart = function () {
            let index = this.getAttribute('index');
            // console.log(index);
            for (let i in tabs) {
                tabs[i].className = '';
                tabs[index].className = 'active';
            }

            for (let i in items) {
                items[i].style.display = 'none';
                items[index].style.display = 'block';
            }
        }
    }
})();

let index = 60;
let code = document.getElementById('code');
let timer;
code.onclick = () => {
    clearInterval(timer);
    timer = setInterval(() => {
        index--;
        let str = `(${index}秒)重发`
        code.innerHTML = str;

        if (index <= 0) {
            index = 60;
            clearInterval(timer);
            code.innerHTML = '发送验证码';
        }
    }, 1000);
}