var world ;
var myInterval;
var xhr = new XMLHttpRequest();
xhr.open("GET", "./src/lexicon.json"); 
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var lexiconResponse = JSON.parse(xhr.responseText);
      var select = document.getElementById('select-lexicon');
      for (var i in lexiconResponse) {
        var option = document.createElement("option");
        option.text = lexiconResponse[i].name;
        option.value = JSON.stringify(lexiconResponse[i]);
        select.appendChild(option);
      }
      select.value = JSON.stringify(lexiconResponse[0]);
      onLexiconChange();
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(); 

function onLexiconChange(){
 var select = document.getElementById('select-lexicon');
 var selectedValue = JSON.parse(select.value)
 document.getElementById('pattern-description').innerHTML = selectedValue.description;
 world = parse(selectedValue.pattern);
 render(world);
}
function onStart(){
    myInterval =setInterval(function () {
    world = next(world);
    render(world);
}, 100);
}
function onStop(){
    clearInterval(myInterval);
}
