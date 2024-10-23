var icon = document.getElementById("dark-mode");
    icon.onclick = function(){
        document.body.classList.toggle("second-color");
    }

    var theme = document.getElementById("change-theme");
    theme.onclick = function() {
        if (document.body.classList.contains("theme-color")) {
            document.body.classList.remove("theme-color");
            document.body.classList.add("theme-color1");
        } else if (document.body.classList.contains("theme-color1")) {
            document.body.classList.remove("theme-color1");
        } else {
            document.body.classList.add("theme-color");
        }
    }
    const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Een moment geduld A.U.B."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Er is iets mis gegaan, probeer het later opnieuw";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});

$(".card").click(function () {
    $(".card").removeClass("active");
    $(this).addClass("active");
  });