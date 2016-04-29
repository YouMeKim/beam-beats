$(document).ready(function() {
    $('#welcome-content').click(nextStep);
    $('#instructions-button').click(nextStep);
    $('#list-show-more').click(loadMoreEntries);
    $('#list-button-edit').click(nextStep);
    $('#list-button-email').click();
    $('#list-button-email').click(function() {
        currentStep = 4;
        nextStep();
    });
    $('#discard-edits-yes').click(function() {
        currentStep = 2;
        nextStep();
    });
    $('.swatch-color').click(function(event) {
        changeColor(event.target.id);
    });
    $('.swatch-logo').click(function(event) {
        changeLogo(event.target.id);
    });
    $('.swatch-size').click(function(event) {
        changeSize(event.target.id);
    });
    $('.layout-container').click(function(event) {
        changeLayout(event.target.id);
    });
    $('#full-screen').click(fullScreenImage);
    $('#edit-button-next').click(nextStep);
    $('#email-button').click(sendEmail);
    $('#success-button').click(nextStep);

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
        case 5:
            moveTo("email");
            break;
        case 6:
            moveTo("success");
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

function changeColor(nodeID) {
    var activeOne = $('#' + nodeID);
    $('.swatch-color').removeClass('active');
    activeOne.addClass('active');
}

function changeLogo(nodeID) {
    var activeOne = $('#' + nodeID);
    $('.swatch-logo').removeClass('active');
    $('.swatch-logo').css('background-position','0px 0px');
    activeOne.addClass('active');
    activeOne.css('background-position','-3px -3px');
}

function changeSize(nodeID) {
    var activeOne = $('#' + nodeID);
    $('.swatch-size').removeClass('active');
    activeOne.addClass('active');
}

function changeLayout(nodeID) {
    var editImageContainer = $('#edit-image-container');
    var editImage = $('#edit-image');

    if (nodeID.indexOf("-") > -1) {
        nodeID = nodeID.split("-")[0];
    }

    if (nodeID == "portrait") {
        editImageContainer.css("width", "356px");
        editImageContainer.css("height", "562px");
        editImageContainer.css("margin-top", "36px");
        editImageContainer.css("margin-bottom", "30px");
        editImage.css("width", "356px");
        editImage.css("height", "562px");
    } else {
        editImageContainer.css("width", "562px");
        editImageContainer.css("height", "356px");
        editImageContainer.css("margin-top", "139px");
        editImageContainer.css("margin-bottom", "133px");
        editImage.css("width", "562px");
        editImage.css("height", "356px");
    }

    var layout = nodeID + "-layout";
    var title = nodeID + "-title";
    $('.layout').removeClass('layout-active');
    $('.layout-title').removeClass('layout-title-active');
    $('#' + layout).addClass('layout-active');
    $('#' + title).addClass('layout-title-active');
}

function fullScreenImage() {
    console.log("full screen image");
}

/*********/
/* EMAIL */
/*********/

function sendEmail() {
    $('#email-email').val('');
    nextStep();
}
