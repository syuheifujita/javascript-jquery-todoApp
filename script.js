$(function() {
    $('#form').submit(function() {
        var textValue = $('#text-form').val();
        $('#output-text').text(textValue);

        return false;
    });
});
