function change_colour(){
    var hex_num=["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    var hex_code='';
    for(var i=0;i<6;i++){
        var rand_index=Math.floor(Math.random()*hex_num.length);
        hex_code+=hex_num[rand_index];
    }
    document.getElementById("hex-code1").innerHTML=hex_code;
    document.getElementsByTagName("body")[0].style.background="#"+hex_code;
}