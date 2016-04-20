$(document).ready(function() {
    $('#welcome-content').click(nextStep);
    $('#instructions-button').click(nextStep);
    $('#list-show-more').click(loadMoreEntries);
    $('#list-button-edit').click(editVis);
    $('#list-button-email').click();

    nextStep();
});

/***********************/
/* CONTROL PAGE CHANGE */
/***********************/

var currentStep = 3;

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
        case 4:
            moveTo("edit");
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

/****************************************/
/* LOAD MORE ENTRIES INTO LIST ALL PAGE */
/****************************************/

function loadMoreEntries() {
    var container = $('#list-all');
    var html = "";

    for (var i = 0; i < 9; i++) {
        html += "<div class='container'><img class='preview' alt='preview' src='assets/img/sample.png'/><h1 class='preview-title'>BB.BNNY01</h1><p class='preview-time'>15 MINS AGO</p></div>";
    }

    container.append(html);
}

/**********************/
/* EDIT VISUALIZATION */
/**********************/

var id = "";

function editVis () {
    moveTo("edit");
}
