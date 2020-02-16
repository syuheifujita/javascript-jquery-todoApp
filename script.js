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

        // 配列を表示
        $.each(arrayTodoList, function (index, element) {
            $('#output-text').append((index + 1) + ': ' + element + '<br>');
        })

        // 入力フォームのテキストを初期化
        // $('#text-form').empty();

        return false;
    });

    $('output-text').on('click',function() {
        var id = $(this).attr("id");
        alert(id);

        // クリックされたときに，モーダルのタグが表示されるようにする
        $("body").append('<div id="modal-bg"></div>');
        $("#modal-bg").fadeIn("slow");

        //画面のどこかをクリックしたらモーダルを閉じる
        $("#modal-bg").click(function(){
            $("#modal-bg").fadeOut("slow",function(){
            //挿入した<div id="modal-bg"></div>を削除
                $('#modal-bg').remove() ;
            });
        });
    });
});
