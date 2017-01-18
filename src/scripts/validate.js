function validate() {
    var $data = {};
    $data.firstName = $("input[name=firstname]").val();
    $data.lastName = $("input[name=lastname]").val();
    $data.mail = $("input[name=mail]").val();
    $data.phone = $("input[name=phone]").val();
    $data.date = $("input[name=date]").val();

    if (!$data.firstName.length) {
        $('.error-firstname').html("Please, input your First Name");
        return false;
    } else {
        $('.error-firstname').html("");
    }
    if (!$data.lastName.length) {
        $('.error-lastname').html("Please, input your Last Name");
        return false;
    } else {
        $('.error-lastname').html("");
    }
    var isValidMail = $data.mail.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
    if (!isValidMail) {
        $('.error-mail').html("E-mail is invalid");
        return false;
    } else {
        $('.error-mail').html("");
    }
    if (!$data.mail.length) {
        $('.error-mail').html("Please, input your E-mail");
        return false;
    } else {
        $('.error-mail').html("");
    }
    if (!$data.phone.length) {
        $('.error-phone').html("Please, input your phone");
        return false;
    } else {
        $('.error-phone').html("");
    }
    if (!$data.date.length) {
        $('.error-date').html("Please, input current date");
        return false;
    } else {
        $('.error-date').html("");
    }

}