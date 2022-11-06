
const getId = id => document.getElementById(id);
const regExpLG = /^[a-zA-Z]{2,16}$/;
const regExpPS = /^[a-zA-Z0-9_\.-]{8,16}$/;
const regExpEM = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const regExpMS = /^[a-zA-Z]{2,200}$/;


getId('name').oninput = function () {
    const nameUser = regExpLG.test(this.value);
    if (nameUser) {
        this.style.border = '1px solid #fff';
        getId('error').style.display = 'none';

    }
    else {
        this.style.border = '1px solid #f00';
    }
}
getId('password').oninput = function () {
    const passUser = regExpPS.test(this.value);
    if (passUser) {
        this.style.border = '1px solid #fff';
        getId('error').style.display = 'none';
    }
    else {
        this.style.border = '1px solid #f00';
    }
}
getId('email').oninput = function () {
    const eamilUser = regExpEM.test(this.value);
    if (eamilUser) {
        this.style.border = '1px solid #fff';
        getId('error').style.display = 'none';
    }
    else {
        this.style.border = '1px solid #f00';
    }
}
getId('message').oninput = function () {
    const message = regExpMS.test(this.value);
    if (message) {
        this.style.border = '1px solid #fff';
        getId('error').style.display = 'none';
    }
    else {
        this.style.border = '1px solid #f00';
    }
}


const addUser = (e) => {
    e.preventDefault();

    const nameUser = regExpLG.test(getId('name').value);
    const passUser = regExpPS.test(getId('password').value);
    const eamilUser = regExpEM.test(getId('email').value);
    const message = regExpMS.test(getId('message').value);


    if (nameUser && passUser && eamilUser && message) {
        getId('custom_form').style.display = 'none';
        textAnim();
        console.log('Done!');
    }

    else {
        getId('error').style.display = 'block';
        console.log('Please write field...');
    }
}

getId('btn').addEventListener('click', addUser);


let i = 0, text;
text = 'Welcome To Ukraine...';

function textAnim() {

    if (i < text.length) {
        getId('textAnimation').innerHTML += text.charAt(i);
        i++;
        setTimeout(textAnim, 50)
    }

}

