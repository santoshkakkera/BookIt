const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');


form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs(){
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    
    if(firstnameValue === '' || firstnameValue == null){
        setErrorFor(firstname,'firstname cannot be empty');
    }
    else{
        setSuccessFor(firstname);
    }

    if(lastnameValue === '' || lastnameValue == null){
        setErrorFor(lastname,'lastname cannot be empty');

    }
    else{
        setSuccessFor(lastname);
    }
    
    if(emailValue === '' || emailValue == null) {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
    
    if(passwordValue === '' || passwordValue == null) {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}

    if(confirmpasswordValue === '') {
		setErrorFor(confirmpassword, 'Password2 cannot be blank');
	} else if(passwordValue !== confirmpasswordValue) {
		setErrorFor(confirmpassword, 'Passwords does not match');
	} else{
		setSuccessFor(confirmpassword);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
