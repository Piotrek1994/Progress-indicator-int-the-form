const formPages = document.querySelectorAll('.page')
const steps = document.querySelectorAll('.step')
const progressBar = document.querySelector('.progress-bar')
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')

let currentStep = 1

const handleNextBtn = () => {
	if (currentStep < 5) {
		currentStep++
	}
	handleProgressBar()
}
const handlePrevBtn = () => {
	if (currentStep > 1) {
		currentStep--
	}

	handleProgressBar()
}

const handleProgressBar = () => {
	steps.forEach((step, index) => {
		if (index < currentStep) {
			step.classList.add('active-step')
		} else {
			step.classList.remove('active-step')
		}
	})

	const activeSteps = document.querySelectorAll('.active-step')
	progressBar.style.width = ((activeSteps.length - 1) / (steps.length - 1)) * 100 + '%'
	handleButtons()
    handleFormPage()
}

const handleButtons = () => {
	if (currentStep === 1) {
		prevBtn.disabled = true
	} else if (currentStep === 5) {
		nextBtn.disabled = true
	} else {
		prevBtn.disabled = false
		nextBtn.disabled = false
	}

}


const handleFormPage = () => {
    formPages.forEach(page => {
        if (currentStep == page.dataset.number) {
            page.classList.add('active-page')
        } else {
            page.classList.remove('active-page')
        } console.log(page.dataset.number);
    }) 
    
}





nextBtn.addEventListener('click', handleNextBtn)
prevBtn.addEventListener('click', handlePrevBtn)
