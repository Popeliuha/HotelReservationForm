var dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/;
var myDiv = document.getElementById("myDiv");

var array = [];
var date = 1949;
for (var i = 0; date < 2000; i++) {
    array[i] = date + 1;
    date += 1;
}
var $dropdown = $("#year");
    $.each(array, function() {
        $dropdown.append($("<option />").val(this.toString()).text(this.toString()));
    });

function buildDaysDropDown(){
    var month = $("#month").val();
    var year = $("#year").val();
    var maxDays = daysInMonth(month, year);
    var days = [];
    for (var i = 0; i < maxDays; i++) {
        days[i] = i+1;
    }
    var $dropdown = $("#days");
    $dropdown.empty();
    $.each(days, function() {
        $dropdown.append($("<option />").val(this.toString()).text(this.toString()));
    });
}

function daysInMonth(m, y) {
    switch (m) {
        case "2":
            {
                if(y % 4 === 0){
                    return 29;
                }
                return 28;
            }
        case "9":
        case "4":
        case "6":
        case "11":
            return 30;
        default:
            return 31;
    }
}

function isValid(d, m, y) {
    return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
}

$(document).ready(function () {

    buildDaysDropDown();

    $("#days").keyup(function () {
        $("#days").val(this.value.match(/[0-9]*/));
    });

    $('#subb').click(function () {
        var flag = true;

        if (!$('#data_3').val()) {
            alert("Last name is empty");
            flag = false;
        }

        if (!$('#data_2').val()) {
            alert("First name is empty");
            flag = false;

        }
        if (!$('#data_4').val()) {
            alert("Password is empty");
            flag = false;
        }
        if (!isValid($('#days').val()
            , parseInt($('#month').val())
            , parseInt($('#year').val()))) {
            alert('Wrong birth dates parameter')
            flag = false;
        }
        if($('#arrival').val() == "" || $('#departure').val() == ""){
            alert('Fill dates.');
            flag = false;
        }else{
            var result = new Date($('#arrival').val()) > new Date( $('#departure').val());
            if (result){
                alert('Incorrect booking dates.');
                flag = false;
            }
        }
        if (!$('#data_2').val().match('^[a-zA-Z]{2,20}$')
            && $('#data_2').val()) {
            alert("Incorrect first name.");
            flag = false;
        }
        if (!$('#data_3').val().match('^[a-zA-Z]{2,20}$')
            && $('#data_3').val()) {
            alert("Incorrect last name.");
            flag = false;
        }
        if (flag) {
            alert("Data is correct.");
        }
    });
});







