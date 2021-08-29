const form = document.getElementById('form');
const username = document.getElementById('username');
const venuename = document.getElementById('venuename');
const venuecity = document.getElementById('venuecity');
const statecity = document.getElementById('statecity');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const areal = document.getElementById('areal');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});


function checkInputs() {

	const usernameValue = username.value;
	const venuenameValue = venuename.value;
	const venuecityValue = venuecity.value;
	const statecityValue = statecity.value;
	const emailValue = email.value.trim();
	const subjectValue = subject.value;
	const arealValue = areal.value;

	if (usernameValue === '') {
		setErrorFor(username);

		function setErrorFor(usernameValue) {
			const formControl = usernameValue.parentElement;
			formControl.className = 'form-control error';
		}
	} else {
		setSuccessFor(username);

		function setSuccessFor(usernameValue) {
			const formControl = usernameValue.parentElement;
			formControl.className = 'form-control succes';
		}
	}

	if (venuenameValue === '') {
		setErrorFor(venuename);

		function setErrorFor(venuenameValue) {
			const formControl = venuenameValue.parentElement;
			formControl.className = 'form-control error';
		}
	} else {
		setSuccessFor(venuename);

		function setSuccessFor(venuenameValue) {
			const formControl = venuenameValue.parentElement;
			formControl.className = 'form-control succes';
		}
	}

	if (venuecityValue === '') {
		setErrorVenue(venuecity);

		function setErrorVenue(venuecityValue) {
			const formControl = venuecityValue.parentElement;
			formControl.className = 'form-control__venue error';
		}
	} else {
		setSuccessVenue(venuecity);

		function setSuccessVenue(venuecityValue) {
			const formControl = venuecityValue.parentElement;
			formControl.className = 'form-control__venue succes';
		}
	}

	if (statecityValue === '') {
		setErrorCity(statecity);

		function setErrorCity(statecityValue) {
			const formControl = statecityValue.parentElement;
			formControl.className = 'form-control__city error';
			
		}
	} else {
		setSuccessCity(statecity);

		function setSuccessCity(statecityValue) {
			const formControl = statecityValue.parentElement;
			formControl.className = 'form-control__city succes';
		}
	}

	if (emailValue === '') {
		setErrorFor(email);

		function setErrorFor(emailValue) {
			const formControl = emailValue.parentElement;
			formControl.className = 'form-control error';
		}
	} else if (!isEmail(emailValue)) {
		setErrorFor(email);

		function isEmail(email) {
			return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
		}
	} else {
		setSuccessFor(email);

		function setSuccessFor(emailValue) {
			const formControl = emailValue.parentElement;
			formControl.className = 'form-control succes';
		}
	}

	if (subjectValue === '') {
		setErrorFor(subject);

		function setErrorFor(subjectValue) {
			const formControl = subjectValue.parentElement;
			formControl.className = 'form-control error';
		}
	} else {
		setSuccessFor(subject);

		function setSuccessFor(subjectValue) {
			const formControl = subjectValue.parentElement;
			formControl.className = 'form-control succes';
		}
	}

	if (arealValue === '') {
		setErrorFor(areal);

		function setErrorFor(arealValue) {
			const formControl = arealValue.parentElement;
			formControl.className = 'form-control error';
		}
	} else {
		setSuccessFor(areal);

		function setSuccessFor(arealValue) {
			const formControl = arealValue.parentElement;
			formControl.className = 'form-control succes';
		}
	}
}


let cookies_popup = 1000;
setTimeout("document.getElementById('overlay').style.transform='translateY(0)'", cookies_popup);



