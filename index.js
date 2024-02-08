let arrows1_1 = document.getElementById('arrows1_1');
let arrows1_2 = document.getElementById('arrows1_2');
let kilometersElement = document.getElementById('kilometers');
let speedKilometersElement = document.querySelector('.speed_kilometers');

let kilometers = 750;
let speedKilometers = 60;

arrows1_1.onclick = () => {
  if (speedKilometers < 80) {
    kilometers -= 10;
    speedKilometers += 5;
  }
  updateValues();
}
arrows1_2.onclick = () => {
  if (speedKilometers > 20) {
    kilometers += 10;
    speedKilometers -= 5;
  }

  updateValues();
}

function updateValues() {
  kilometersElement.textContent = kilometers + 'км';
  speedKilometersElement.textContent = speedKilometers + ' км/ч';
}

let arrows2_1 = document.getElementById('arrows2_1');
let arrows2_2 = document.getElementById('arrows2_2');
let DegreesNumbersElement = document.querySelector('.degrees_numbers');
let conditioner_text = document.querySelector('.conditioner_text')
let degrees_numbers = 20;
arrows2_2.onclick = () => {
    if (degrees_numbers > 1) {
      degrees_numbers--;
      updateValue1();
    }
  
    if (degrees_numbers <= 15) {
      conditioner_text.innerHTML = "Печка"
      updateValue1()
    }
  };
  
  arrows2_1.onclick = () => {
    if (degrees_numbers < 20) {
      degrees_numbers++;
      updateValue1();
    }
  
    if (degrees_numbers > 15) {
      conditioner_text.innerHTML = "Кондиционнер"
      updateValue1()
    }
  };
  
  function updateValue1() {
    DegreesNumbersElement.textContent = degrees_numbers + "°";
  }
  
  
  let priceDescribe = document.getElementById('price_describe');
  
  function changePrice() {
    let toggle = document.getElementById('toggle2');
    if (toggle.checked) {
      priceDescribe.textContent = "$100000";
    } else {
      priceDescribe.textContent = "$89990";
    }
  }
  
  function changePrice1() {
    let toggle2 = document.getElementById('toggle');
    if (toggle2.checked) {
      priceDescribe.textContent = "$95000";
    } else {
      priceDescribe.textContent = "$89990";
    }
  }
  
  let arrows3_1 = document.querySelector('.arrows3_1');
  let arrows3_2 = document.querySelector('.arrows3_2');
  let discsEditionElement = document.querySelector('.discs_edition');
  let imagination = document.querySelectorAll(".img_discs")  
      arrows3_1.onclick = () => {
        discsEditionElement.textContent = '21';
        imagination[0].src = "img/wheels_21.png";
        imagination[1].src = "img/wheels_21.png";
      };
  
      arrows3_2.onclick = () => {
        discsEditionElement.textContent = '19';
        imagination[0].src = "img/wheels_19.png";
        imagination[1].src = "img/wheels_19.png";
      };

      let images = {
        black: "img/black_vehicle_interrior.svg",
        white: "img/white_vehicle_interrior.svg",
        yellow: "img/yellow_vehicle_interrior.svg"
    };
    
    let btns = document.querySelectorAll(".btn");
    let imaging = document.querySelector(".vehicle_interrior");
    
    btns.forEach((btn) => {
        let coloring = btn.getAttribute("data-color");
    
        btn.onclick = () => {
            imaging.setAttribute("src", images[coloring]);
        };
    });
    
let car_type1 = document.querySelector(".car_type1")
let toggle3 = document.getElementById('toggle3');
let toggle4 = document.getElementById('toggle4');
let secondSection = document.querySelector('.second');
let coloring = document.querySelector(".coloring")
let tesla_img = document.querySelector(".tesla_img")
let vehicle_interrior = document.querySelector(".vehicle_interrior")
let tesla_shell = document.querySelector(".tesla_shell")

toggle3.addEventListener('change', function() {
    if (toggle3.checked) {
        tesla_shell.style.height = "192px"
        secondSection.style.display = 'none';
        tesla_img.style.display = "none"
        coloring.style.display = "block"
        car_type1.style.display = "block"
        vehicle_interrior.style.display = "block"

    }
});

toggle4.addEventListener('change', function() {
    if (toggle4.checked) {
        secondSection.style.display = 'flex';
        tesla_img.style.display = "block"
        coloring.style.display = "none"
        car_type1.style.display = "none"
        vehicle_interrior.style.display = "none"

    }
});