$(function() {
    var arrayTodoList = new Array();
    
    $('#form').submit(function() {
        var textValue = $('#text-form').val();
        $('#output-text').text(textValue);

        //配列をリスト表示
        arrayTodoList.push(textValue);

        return false;
    });

    $.each(arrayTodoList, function (index, element) {
        $('#output-text').append(index + ':' + element + '<br>');
      })
});
