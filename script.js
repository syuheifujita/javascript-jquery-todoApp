$(function() {
    // 配列を初期化
    var arrayTodoList = [];
    
    $('#form').submit(function() {
        // #output-textを初期化
        $('#output-text').empty();

        // フォームに入力されたテキストを，変数に格納
        var textValue = $('#text-form').val();

        //配列に要素を追加
        arrayTodoList.push(textValue);

        // 配列を表示させる
        $.each(arrayTodoList, function (index, element) {
            $('#output-text').append(index + ':' + element + '<br>');
        })

        // 入力フォームのテキストを初期化
        $('#text-form').empty();

        return false;
    });
});
