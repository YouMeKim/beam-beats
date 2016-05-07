var visuals = [];
var numLoaded = 1;
var firstImage = "sample";
var selectedImage = "sample";
var canvas;

$(document).ready(function() {
    $.when(loadVis()).done(function() {
        loadInitial();
        loadMoreEntries(9);
    });

    $('#welcome-content').click(nextStep);
    $('#instructions-button').click(nextStep);
    $('#list-show-more').click(function() {
        loadMoreEntries(6);
    });
    $('#list-button-edit').click(function() {
        selectedImage = firstImage;
        nextStep();
    });
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
    /* $('#full-screen').click(fullScreenImage); */
    $('#edit-button-next').click(function(event) {
        var editImageContainer = $("#edit-image");

        html2canvas(editImageContainer, {
            onrendered: function(c) {
                canvas = c;
                console.log(canvas);
            }
        });
        nextStep();
    });
    $('#email-button').click(function(event) {
        sendEmail(event);
    });
    $('#success-button').click(nextStep);

    nextStep();
});

/***********************/
/* CONTROL PAGE CHANGE */
/***********************/

var currentStep = 2;

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

function startOver() {
    console.log("welcome");
    currentStep = 0;
    nextStep();
}

function moveTo(sectionName) {
    if (sectionName == "edit") {
        $('#image').attr('src','assets/vis/' + selectedImage + "all.png");
        $('#image-background').attr('src','assets/vis/' + selectedImage + 'all.png');
        changeColor("swatch-color-all");
        changeLogo("swatch-logo-none");
    }
    $('#' + sectionName).fadeIn(300).siblings().hide();
}

/****************************************/
/* LOAD MORE ENTRIES INTO LIST ALL PAGE */
/****************************************/

function loadVis() {
    var urlVis = "http://beambeats.cias.rit.edu/visualization/visualizations.php";

    var jqxhr = $.getJSON(urlVis)
    .done(function(data) {
        $.each(data, function(i, vis) {
            visuals.push(vis);
        });
    })
    .fail(function() {
        console.log("error loading json stream from " + urlVis);
    });
    jqxhr.complete(function() {

    });

    return jqxhr;
}

function loadInitial() {
    var nameContainer = $('#list-recent-title');
    var dateContainer = $('#list-recent-time');
    var imageContainer = $('#list-recent-image');

    var vis = visuals[0];
    var id = vis.id;
    var name = vis.name;
    var image = vis.imageall;
    var datecreated = vis.datecreated;

    firstImage = name;
    selectedImage = firstImage;

    nameContainer.html(name);
    dateContainer.html(datecreated);
    imageContainer.attr('src', 'assets/vis/' + image);
}

function loadMoreEntries(numEntries) {
    var container = $('#list-all');

    for(var i = 0; i < numEntries; i++) {
        if (visuals.length <= i + numLoaded) {
            $('#list-show-more').remove();
            return;
        } else {
            var num = i + numLoaded;
            var vis = visuals[num];
            var id = vis.id;
            var name = vis.name;
            var image = vis.imageall;
            var datecreated = vis.datecreated;

            var html = "<div id='" + name + "' class='container' onclick='changeSelectedImage(\"" + name + "\");'><img class='preview' alt='preview' src='assets/vis/" + image + "'/><h1 class='preview-title'>" + name + "</h1><p class='preview-time'>" + datecreated + "</p></div>";
            container.append(html);

            if (visuals.length <= i + numLoaded + 1) {
                $('#list-show-more').remove();
                return;
            }
        }
    }
    numLoaded += numEntries;
}

function changeSelectedImage(name) {
    selectedImage = name;
    nextStep();
}

/**********************/
/* EDIT VISUALIZATION */
/**********************/

var id = "";

function changeColor(nodeID) {
    var activeOne = $('#' + nodeID);
    var color = nodeID.split('-')[2].substring(0, 3);
    $('.swatch-color').removeClass('active');
    $('#image').attr('src','assets/vis/' + selectedImage + color + ".png");
    activeOne.addClass('active');
}

function changeLogo(nodeID) {
    var activeOne = $('#' + nodeID);
    var name = nodeID.split("-")[2];
    $('#image-filter').css('background-image','url(assets/img/logo-' + name + '.png)');
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
    var imageDiv = $('#image');
    var imageBg = $('#image-background');

    if (nodeID.indexOf("-") > -1) {
        nodeID = nodeID.split("-")[0];
    }

    if (nodeID == "portrait") {
        editImageContainer.css("width", "356px");
        editImageContainer.css("height", "562px");
        editImageContainer.css("margin-top", "36px");
        editImageContainer.css("margin-bottom", "30px");
        editImage.css("width", "293px");
        editImage.css("height", "499px");
        imageDiv.css("margin", "100px auto");
        imageBg.css("margin", "100px auto");
    } else {
        editImageContainer.css("width", "562px");
        editImageContainer.css("height", "356px");
        editImageContainer.css("margin-top", "139px");
        editImageContainer.css("margin-bottom", "133px");
        editImage.css("width", "499px");
        editImage.css("height", "293px");
        imageDiv.css("margin", "0px auto");
        imageBg.css("margin", "0px auto");
    }

    var layout = nodeID + "-layout";
    var title = nodeID + "-title";
    $('.layout').removeClass('layout-active');
    $('.layout-title').removeClass('layout-title-active');
    $('#' + layout).addClass('layout-active');
    $('#' + title).addClass('layout-title-active');
}

/*********/
/* EMAIL */
/*********/

function sendEmail(event) {
    // get email from input
    var email = $('#email-email').val();

    if (email.toLowerCase().indexOf("@") > 0 &&
        email.toLowerCase().indexOf(".") > 0) {
        var editImageContainer = $("#edit-image");
        var image;

        image = canvas.toDataURL("image/png");
        console.log(canvas);
        console.log(image);

        $.post( "email.php", { email: email, id: selectedImage , data: image })
        .done(function( data ) {
            $('#email-email').val('');
            $('#email-email').css('border', '0px solid rgba(255,255,255,0)');
            $('#email-email').css('border-bottom', '1px solid #858585');
            nextStep();
        });
        /* REMOVE THI LATER */
        event.preventDefault();
    } else {
        event.preventDefault();
        $('#email-email').css('border','1px solid rgba(255,0,0,0.5)');
    }
}
