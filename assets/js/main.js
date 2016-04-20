var currentStep = 3;

$(document).ready(function() {
    $('#welcome-content').click(nextStep);
    $('#instructions-button').click(nextStep);

    moveTo("list");
});

function nextStep() {
    currentStep++;
    switch(currentStep) {
        case 1:
            moveTo("welcome");
            break;
        case 2:
            moveTo("instructions");
            break;
        case 3:
            moveTo("list");
            break;
        default:
            moveTo("welcome");
            currentStep = 1;
            break;
    }
}

function openWelcomePage() {
    console.log("welcome page");
}

function openInstructionPage() {
    console.log("instruction page");
}

function moveTo(sectionName) {
    $('#' + sectionName).fadeIn(300).siblings().hide();
}
