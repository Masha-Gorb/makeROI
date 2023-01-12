// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
	modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
	modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
	if (event.target === modal) {
		modal.style.display = "none";
	}
}


function validateInput(input_id, output_id, pattern_text, valid_message, invalid_message) {
	var form = document.getElementById("form");
	var data = document.getElementById(input_id).value;
	var result = document.getElementById(output_id);
	if (data.match(pattern_text)) {
		form.classList.add("valid");
		form.classList.remove("invalid");
		result.innerHTML = valid_message;
		result.style.color = "#00ff00";
	} else {
		form.classList.remove("valid");
		form.classList.add("invalid");
		result.innerHTML = invalid_message;
		result.style.color = "#ff0000";
	}
	if (data === "") {
		form.classList.remove("valid");
		form.classList.remove("invalid");
		result.innerHTML = "";
		result.style.color = "#00ff00";
	}

}

function validationName() {
	var pattern = "[a-zA-Z]{10}*";
	validateInput("name", "text2", pattern, "Имя подходит.", "Пожалуйста введите правильное имя");
}

function validationTel() {
	var pattern = "\\+[7-8]{10}";
	validateInput("tel", "text1", pattern, "Телефон подходит.", "Пожалуйста введите правильный телефон.");
}