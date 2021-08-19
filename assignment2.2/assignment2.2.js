function getWords(){
    var num = document.getElementById('words').value;
    num = num.split(' ').length;
    alert('The word count is '+num);
}