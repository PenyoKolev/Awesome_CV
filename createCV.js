$(function () {

    $("#contact").click(function () {
        $("#contactForm").toggle("slow");
        $("header img").toggle("slow");
        $("#footer").toggle("slow");

    });

    $("#about").click(function () {
        $("#aboutForm").toggle("slow");
        $("header img").toggle("slow");
        $("#footer").toggle("slow");


    });

    $("#create").click(function () {
        $("#createForm").toggle("slow");
        $("header img").toggle("slow");
        $("#footer").toggle("slow");

    });

    $("#projects").click(function () {
        $("#projectsForm").toggle("slow");
        $("header img").toggle("slow");
        $("#footer").toggle("slow");

    });

    $("#login").click(function () {
        $("#loginForm").toggle("slow");
        $("header img").toggle("slow");
        $("#footer").toggle("slow");

    });
}); 

// About
$(function () {

    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

});
// Login
$(function () {
    $(".login-button").click(function () {
        $("#login").text("Logout")
            .css({
                "background-color": "black",
                "color": "white"
            });
        $("#loginForm").css("display", "none");
        $("header img").toggle("slow");
        $("#footer").toggle("slow");
        $(".login").attr("class", "logout");
        $("#loginForm").empty()
            .append("<form action='http://google.com'><input type='submit' value='Leave this site?' style='height:150px; width:250px'></form>");
        $(".logBlur").css("filter", "none");
        $("#logMessage").empty();

    });
});
// Logout

// Contact
$(function () {
    $("#submitContact").click(function () {
        alert("Dear " + $("#fname").val() + ", your email was sent.");
    })
});


// Get value from create and put to projects
$(function () {
    $("#firstButton").click(function () {
        $("#firstName").text($("#firstNameInput").val());
        $("#firstName").append(" " + $("#lastNameInput").val());
        $("#profession").text(" " + $("#professionInput").val());
        $("#adress").text(" " + $("#adressInput").val());
        $("#phone").text(" " + $("#phoneInput").val());
        $("#email").text(" " + $("#emailInput").val());

    })
    $("#secondButton").click(function () {
        $("#motherTongue").text($("#motherTongueInput").val());
        $("#firstLanguage").text($("#firstLanguageInput").val());
        $("#languageRange1").css("width", $("#languageRange1Input").val() * 30);
        $("#secondLanguage").text($("#secondLanguageInput").val());
        $("#languageRange2").css("width", $("#languageRange2Input").val() * 30);

    });
    $("#thirdButton").click(function () {
        $("#firstSkill").text($("#firstSkillInput").val());
        $("#skillsRange1").css("width", $("#skillsRange1Input").val() * 30);
        $("#skillsRange1").text($("#skillsRange1Input").val() * 10 + "%");
        $("#secondSkill").text($("#secondSkillInput").val());
        $("#skillsRange2").css("width", $("#skillsRange2Input").val() * 30);
        $("#skillsRange2").text($("#skillsRange2Input").val() * 10 + "%");
        $("#thirdSkill").text($("#thirdSkillInput").val());
        $("#skillsRange3").css("width", $("#skillsRange3Input").val() * 30);
        $("#skillsRange3").text($("#skillsRange3Input").val() * 10 + "%");


    });
    $("#fourthButton").click(function () {
        $("#university").text($("#universityInput").val());
        $("#degree").text($("#degreeInput").val());
        $("#degree").append(" / " + $("#specialityInput").val());
        $("#educationDate").text($("#educationFromInput").val());
        $("#educationDate").append(" : " + $("#educationToInput").val());
        $("#aboutEducation").text($("#aboutEducationInput").val());

    });
    $("#fifthButton").click(function () {
        $("#position").text($("#positionInput").val());
        $("#position").append(" / " + $("#entrepriseInput").val());
        $("#aboutJob").text($("#aboutJobInput").val());
        $("#jobDate").text($("#jobFromInput").val());
        $("#jobDate").append(" : " + $("#jobToInput").val());

    });
    $("#submitButton").click(function () {
        $("#headline").text($("#headlineInput").val());
        $("#aboutYou").text($("#aboutYouInput").val());
        $("#createForm").toggle("slow");
        $("header img").toggle("slow");
        $("#footer").toggle("slow");

    });

});

// Create
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;
$(function () {

    $(".next").click(function () {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        next_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = (now * 50) + "%";
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'position': 'absolute'
                });
                next_fs.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            }
        });
    });

    $(".previous").click(function () {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        previous_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now, mx) {
                scale = 0.8 + (1 - now) * 0.2;
                left = ((1 - now) * 50) + "%";
                opacity = 1 - now;
                current_fs.css({
                    'left': left
                });
                previous_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            }
        });
    });

    $(".submit").click(function () {
        return false;
    });
});