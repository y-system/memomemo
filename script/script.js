function saveStorage(id,idid){
    var data = document.getElementById(id).value;
    var title = document.getElementById(idid).value;
    localStorage.setItem(title,data);
    alert('めも：'+title+'を記帳しました。');
    loadStorage('ichiran');
}
 
function loadStorage(id){
    var result = '<section id="memo">';
    
    for(var i = 0;i < localStorage.length;i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        result += '<div class="memo-article"><div class="title">' + key + '<img class="delete" src="img/batsu.svg" onclick="deletememo(\''　+　key　+　'\');"></div><article><textarea>' + value + '</textarea></article></div>';
    }
    result += '</section>';
    var target = document.getElementById(id);
    target.innerHTML = result;
}
 
function clearStorage(){
    if(confirm('本当にすべてのメモを削除しますか？')){
    localStorage.clear();
    alert("すべてのメモを削除しました。");
    loadStorage('ichiran');}
}

function deletememo(memo){
    localStorage.removeItem(memo);
    alert('メモ(' + memo + ')を削除しました。');
    loadStorage('ichiran');
}