//constructor
function NewUser(username, password) {
	this.username = username;
	this.password = password;
}

const usersArr = [];

const userwarn = document.querySelector(".user-warning");
const passwarn = document.querySelector(".pass-warning");
const userwarnSignup = document.querySelector(".user-warning-signup");
const passwarnSignup = document.querySelector(".pass-warning-signup");

const contentLogin = document.querySelector(".content__login");
const contentSignup = document.querySelector(".content__signup");

const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");

const popUpLogin = document.querySelector(".pop-login");

const usernameInput = document.querySelector(".input__box-bar-user");
const passwordInput = document.querySelector(".input__box-bar-password");

const usernameInputSignup = document.querySelector(
	".input__box-bar-user-signup"
);
const passwordInputSignup = document.querySelector(
	".input__box-bar-password-signup"
);

const movingBtn = document.querySelector(".move-btn");
const moveToLogin = document.querySelector(".moveTo-login");

// const loginvalue = usernameInput.value;

// const user = {
// 	name: "NewUser",
// 	password: 1234,
// };

const checkInputs = (username, password) => {
	if (
		usernameInput.value == "" ||
		passwordInput.value == "" )
	
		// (usernameInput.value !== user.name && passwordInput.value !== user.password)
	 {
		userwarn.style.display = "block";
		passwarn.style.display = "block";

		popUpLogin.classList.remove("show-pop-up");
	}
	else {
		
				popUpLogin.classList.add("show-pop-up");
				usernameInput.value = "";
				passwordInput.value = "";
			
	}

};

const checkInputsForSignup = () => {
	checkPasswordLength(passwordInputSignup);
	if (usernameInputSignup.value == "" || passwordInputSignup.value == '') {
		userwarnSignup.style.display = "block";
		passwarnSignup.style.display = "block";
		console.log(`pass jest za krótkie`);
	} else 
	{
		const nextUser = usernameInputSignup.value;
		const nextUserPassword = passwordInputSignup.value;

		const newObj = new NewUser(nextUser, nextUserPassword);

		usersArr.push(newObj);
		console.log(usersArr);

		usernameInputSignup.value = "";
		passwordInputSignup.value = "";
	}
};

const checkPasswordLength = (input,min) =>{
	if (input.value.length < min){
		passwarnSignup.style.display = 'block';
		passwarnSignup.textContent = `Password is too short. Have to be at least ${min} znaków`;
	}else{
		passwarnSignup.style.display = "none";
	}
}

const handeContentMove = () => {
	contentLogin.classList.remove("login-movingBack");
	contentSignup.classList.remove("signup-movingBack");
	contentLogin.classList.add("login-moving");
	contentSignup.classList.add("signup-moving");

	userwarn.style.display = "none";
	passwarn.style.display = "none";
};

const handeContentMoveBack = () => {
	contentLogin.classList.remove("login-moving");
	contentSignup.classList.remove("signup-moving");
	contentLogin.classList.add("login-movingBack");
	contentSignup.classList.add("signup-movingBack");

	userwarn.style.display = "none";
	passwarn.style.display = "none";
};

loginBtn.addEventListener("click", checkInputs);
signupBtn.addEventListener("click", checkInputsForSignup);
movingBtn.addEventListener("click", handeContentMoveBack);
moveToLogin.addEventListener("click", handeContentMove);
