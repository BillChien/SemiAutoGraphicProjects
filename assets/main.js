//calling div prompt
var elPrompt = document.getElementById('prompt');
var elSymbol = document.getElementById('symbol');
var elCopyright = document.getElementById('copyright');
var elFooter = document.getElementById('footer');


//All the adjective
var adjective = ['a porous','a matte','a static','a terrifying','a boring','an un-designed','a delicious','a festive','a subtle','a gross','an ugly','a beautiful','an repulsive','a hideous','a delectable','a whimsical','a quizzical','an radical','a mossy','a broken','a tender','an adoreble','a nasty','a shocking','a soft','an old','a charismatic','a cute','a gigantic','a funny','a delicate','a psychedelic','an expressive','a confused','an amped','a strange','a foreign','a tinted','an organic','an austere','a quirky','a gentle'];

//All the medium
var medium = ['label','button','web icon','flyer','poster','booklet','album cover','bookmark','sign','billboard','website','magzine cover','logo','typeface','magazine','television show','podcast','app','packaging','virtual element','road sign','graphic tee','prototype','mockup','microsite','pattern'];

function generate(){

  //randomly select background color.
  var bgcolors= ['#6d30b5', '#00123f','#290059','#ffd400','#191919','#00ff8b'];
  var randbgcolors = bgcolors[Math.floor(Math.random() * bgcolors.length)];

  document.body.style.backgroundColor = randbgcolors;

  //clear content before printing out new sentence.
  $('#prompt').empty();

  //randomly select a word from variables.
  var randAdjective = adjective[Math.floor(Math.random() * adjective.length)];
  var randMedium = medium[Math.floor(Math.random() * medium.length)];

  //print
  var newPrompt = 'create ' + randAdjective + ' ' + randMedium;

  var i = 0;
  var timer = setInterval(function(){
    elPrompt.textContent+=newPrompt[i];i++;
    if(i>newPrompt.length-1){clearInterval(timer)}
  },50)


  //change text color based on background color.
  if (randbgcolors == '#6d30b5') {
    elPrompt.style.color = '#ceff00';
    elSymbol.style.fill = '#ceff00';
    elCopyright.style.color = 'white';
    elFooter.style.color = '#777777';
  };

  if (randbgcolors == '#00123f') {
    elPrompt.style.color = '#dd1064';
    elSymbol.style.fill = '#dd1064';
    elCopyright.style.color = 'white';
    elFooter.style.color = '#5e5e5e';
  };

  if (randbgcolors == '#290059') {
    elPrompt.style.color = '#fff800';
    elSymbol.style.fill = '#fff800';
    elCopyright.style.color = 'white';
    elFooter.style.color = '#5e5e5e';
  };

  if (randbgcolors == '#ffd400') {
    elPrompt.style.color = '#c40000';
    elSymbol.style.fill = '#c40000';
    elCopyright.style.color = 'black';
    elFooter.style.color = 'white';
  };

  if (randbgcolors == '#191919') {
    elPrompt.style.color = '#00e1ff';
    elSymbol.style.fill = '#00e1ff';
    elCopyright.style.color = 'white';
    elFooter.style.color = '#5e5e5e';
  };

  if (randbgcolors == '#00ff8b') {
    elPrompt.style.color = '#2d2d2d';
    elSymbol.style.fill = '#2d2d2d';
    elCopyright.style.color = 'black';
    elFooter.style.color = 'white';
  };

};
