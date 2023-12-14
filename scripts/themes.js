function dark()
{
	header.style.background = '#262626';
	header.style.transition = '1s';
	main.style.background = '#3f3f3f';
	main.style.transition = '1s';
	footer.style.transition = '1s';
	footer.style.background = '#262626';
}
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
function light()
{
	header.style.background = '#d8ab4e';
	header.style.transition = '1s';
	main.style.background = 'RGB(229, 223, 204)';
	main.style.transition = '1s';
	footer.style.transition = '1s';
	footer.style.background = '#d8ab4e';
}