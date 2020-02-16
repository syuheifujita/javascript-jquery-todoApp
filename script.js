$(function() {
    // 配列を初期化
    var arrayTodoList = [];
    
    $('#form').submit(function() {
        // フォームに入力されたテキストを，変数に格納
        var textValue = $('#text-form').val();
        // $('#output-text').text(textValue);

        //配列に要素を追加
        arrayTodoList.push(textValue);

        // 配列を表示させる
        $('output-text').text();

        for(var i = 0; i < arrayTodoList.length; i++) {
            console.log(arrayTodoList[i]);
        }

        $.each(arrayTodoList, function (index, element) {
            $('#output-text').append(index + ':' + element + '<br>');
        })

        return false;
    });
});
