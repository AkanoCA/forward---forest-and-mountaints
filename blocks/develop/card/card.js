"use strict";

function isCard(temp) {

	let card = temp;
	let day = card.querySelector('.card__value');
	let buttonPlus = card.querySelector('.card__plus');
	let buttonMinus = card.querySelector('.card__minus');


	isDay(day, buttonMinus, buttonPlus);

	function isDay(day, minus, plus) {

		plus.addEventListener('click', function () {
			let numOfDay = +day.value;

			if (numOfDay < 5) {
				++numOfDay;
				day.value = numOfDay;

				isActive(numOfDay, minus, plus);

			}
		});

		minus.addEventListener('click', function () {
			let numOfDay = +day.value;

			if (numOfDay > 1) {
				--numOfDay;
				day.value = numOfDay;
				isActive(numOfDay, minus, plus);
			}
		});

	}

	function isActive(day, minus, plus) {
		if (day == 1) {
			minus.classList.add('card__change_unactive');
		} else if (day == 5) {
			plus.classList.add('card__change_unactive');
		} else {
			minus.classList.remove('card__change_unactive');
			plus.classList.remove('card__change_unactive');
		}
	}

}


function isPrice(card) {

	let costs = {};

	switch (card) {
		case premium:
			costs = {
				Altai: '8 000',
				Swed: '12 000',
				China: '10 000',
            };
            
            exPrice(card, costs);
			break;

		case comfort:
			costs = {
				Altai: '4 000',
				Swed: '8 000',
				China: '5 000',
            };
            exPrice(card, costs);
			break;

		case econom:
			costs = {
				Altai: '2 000',
				Swed: '4 000',
				China: '2 000',
            };
            exPrice(card, costs);
			break;
		default:
			alert('Извините, у нас неисправности... Попробуйте позже');
	};

	function exPrice(card, cost) {
		let price = card.querySelector('.card__price-value');
		let buttonAltai = card.querySelector('.card__altai');
		let buttonSwed = card.querySelector('.card__swed');
        let buttonChina = card.querySelector('.card__china');
        
        buttonAltai.addEventListener('change', function() {
            price.textContent = cost.Altai;
        });

        buttonSwed.addEventListener('change', function() {
            price.textContent = cost.Swed;
        });

        buttonChina.addEventListener('change', function() {
            price.textContent = cost.China;
        });
	}
}

// function isPrice (price, altai, swed, china) {

//     let altaiPrice = 8000;
//     altai.addEventListener('change', function() {
//         price.textContent = altaiPrice + ' &#x20bd/сутки';
//     });
// }



let cards = document.querySelectorAll('.card');
let premium = document.querySelector('.card__premium');
let comfort = document.querySelector('.card__comfort');
let econom = document.querySelector('.card__econom');

isPrice(premium);
isPrice(comfort);
isPrice(econom);

for (let i = 0; i < cards.length; i++) {
	isCard(cards[i]);
}
