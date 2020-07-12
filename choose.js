let brawl = document.querySelector('.brawl');
let royale = document.querySelector('.royale');
let brawl_stars = document.querySelector('.brawl-stars');
let clash_royale = document.querySelector('.clash-royale');

brawl_stars.style.display = 'none';
clash_royale.style.display = 'none';

brawl.addEventListener('click', brawlfunc);
royale.addEventListener('click', royalefunc);

function brawlfunc() {
	brawl_stars.style.display = 'block';
	clash_royale.style.display = 'none';
};

function royalefunc() {
	brawl_stars.style.display = 'none';
	clash_royale.style.display = 'block';
}