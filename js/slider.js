//  slider scrol 
const slider = document.querySelector('.slider__inner');
const progressBar = document.querySelector('.prog-bar-inner')


let sliderGrabbed = false;

slider.parentElement.addEventListener('scroll', (e) =>{
	console.log(getScrollPercentage())
	progressBar.style.width = `${getScrollPercentage()}%`
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
slider.addEventListener('mousedown', (e) =>{
	sliderGrabbed = true;
	slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e) =>{
	sliderGrabbed = false;
	slider.style.cursor = 'grab';
})

slider.addEventListener('mouseleave', (e) =>{
	sliderGrabbed = false;
	slider.style.cursor = 'grab';
})

slider.addEventListener('mousemove', (e) =>{
	if(sliderGrabbed){
		slider.parentElement.scrollLeft -= e.movementX;
	}
})

slider.addEventListener('wheel', (e) =>{   // Скрол колесиком
	e.preventDefault();
	slider.parentElement.scrollLeft += e.deltaY;
})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function getScrollPercentage() {
	return((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth))*100)
}
//  slider scrol end