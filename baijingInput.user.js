// ==UserScript==
// @name         百京话输入法
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动生成百京话评论
// @author       relic
// @match        https://bbs.sgamer.com/thread*
// @grant        none
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var textArea = $('#fastpostmessage');

    var btn_html = ' | <span id = "baijing">百京话</span>';
    var fpd = $('.fpd');
    if(fpd){
        fpd.append(btn_html);
    }
    var btn = $('#baijing');
    btn.click(function(){
        var text=($('textarea').eq(0).val());
        var txt_split=text.split('');
        var arr = new Array();
        for(var index=0 ; index < txt_split.length;index++){
            arr.push(txt_split[index]);
            var reg=new RegExp("[\\u4E00-\\u9FFF]+","g");
            if(reg.test(txt_split[index])){
                arr.push('儿');
            }
        }
        var txt_new=arr.join('');
        $('textarea').eq(0).val(txt_new);
    })



    // Your code here...
})();