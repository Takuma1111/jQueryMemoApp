"use strict";
$('#addButton').on('click',function(){
    //入力蘭が空の場合追加されない
    if($('#addText').val() != ""){
        const str = $('#addText').val();
        var $List = $('#textShow');
        $List.append('<li>'+ str + '</li>');
        $('#addText').val("");
    }
});
