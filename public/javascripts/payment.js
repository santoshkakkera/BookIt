function validate1(inputText) {
    var format = /^[\w.-]+@[\w.-]+$/;
    if (inputText.value.match(format)) {


    } else {
        alert("You have entered an invalid UPI ID");



    }
}

function validate2(cno, cvv) {
    var str = cno;
    var str1 = cvv;
    if (str.value.length == 16) {



    } else {
        alert("You have entered an invalid card number");


    }
    if (str1.value.length == 3) {



    } else {
        alert("You have entered an invalid cvv number");


    }
}

function chk() {
    var x = document.getElementById('upi');
    var y = document.getElementById('card');

    var a = document.getElementById('iupi');
    var h = document.getElementById('btn1');
    a.disabled = y.checked ? true : false;
    h.disabled = y.checked ? true : false;

    if (!a.disabled) {
        a.focus();

    }
    if (!h.disabled) {
        h.focus();

    }

    var b = document.getElementById('cvv');
    var c = document.getElementById('nc');
    var d = document.getElementById('cno');
    var e = document.getElementById('months');
    var f = document.getElementById('years');
    var g = document.getElementById('btn2');

    b.disabled = x.checked ? true : false;
    c.disabled = x.checked ? true : false;
    d.disabled = x.checked ? true : false;
    e.disabled = x.checked ? true : false;
    f.disabled = x.checked ? true : false;
    g.disabled = x.checked ? true : false;

    if (!b.disabled) {
        b.focus();

    }
    if (!c.disabled) {
        c.focus();

    }
    if (!d.disabled) {
        d.focus();

    }
    if (!e.disabled) {
        e.focus();

    }
    if (!f.disabled) {
        f.focus();

    }

    if (!g.disabled) {
        g.focus();

    }

}