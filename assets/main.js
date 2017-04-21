//calling div prompt
var elPrompt = document.getElementById('prompt');
var elSymbol = document.getElementById('symbol');
var elCopyright = document.getElementById('copyright');
var elFooter = document.getElementById('footer');
var elAbout = document.getElementById("about");
var elShare = document.getElementById("share");
var elIntrotext = document.getElementById("introtext");

//reveal about
function change1(){

    if (elAbout.textContent=="about") {
      elAbout.textContent = "close";
      elAbout.style.color = '#ffe433';
      $('#intro').addClass('appear');
      $('#maincontainer').addClass('fade');
      $('#share').addClass('fade');
      $('#intro').css("z-index", 3);
      $('#footer').css("z-index", 4);
      $('#copyright').css("z-index", 3);

    }
    else {
      elAbout.textContent = "about";
      $('#intro').removeClass('appear');
      $('#maincontainer').removeClass('fade');
      $('#share').removeClass('fade');
      $('#intro').css("z-index", -2);
      elAbout.style.color = '';
    };

};

//reveal about
function change2(){

    if (elShare.textContent=="input") {
      elShare.textContent = "close";
      elShare.style.color = '#ffe433';
      document.body.style.overflowY = 'visible';
      $('#input').addClass('appear');
      $('#maincontainer').addClass('fade');
      $('#about').addClass('fade');
      $('#input').css("z-index", 3);
      $('#footer').css("z-index", 4);
      $('#copyright').css("z-index", 3);
      document.body.style.backgroundColor = '#444444';
      elPrompt.style.color = '#ffe433';
      elSymbol.style.fill = '#ffe433';
      elCopyright.style.color = 'white';
      elFooter.style.color = '#ffe433';
    }
    else {
      elShare.textContent = "input";
      document.body.style.overflowY = 'hidden';
      $('#input').removeClass('appear');
      $('#maincontainer').removeClass('fade');
      $('#about').removeClass('fade');
      $('#input').css("z-index", -2);
      elShare.style.color = '';
      window.scrollTo(0, 0);
    };

};

//All the adjective
var adjective = ['a porous','a matte','a static','a terrifying','a boring','an un-designed','a delicious','a festive','a subtle','a gross','an ugly','a beautiful','a repulsive','a hideous','a delectable','a whimsical','a quizzical','a radical','a mossy','a broken','a tender','an adorable','a nasty','a shocking','a soft','an old','a charismatic','a cute','a gigantic','a funny','a delicate','a psychedelic','an expressive','a confusing','an amped','a strange','a foreign','a tinted','an organic','an austere','a quirky','a gentle'];

//All the medium
var medium = ['label','button','web icon','flyer','poster','booklet','album cover','bookmark','sign','billboard','website','magazine cover','logo','typeface','magazine','trailer','podcast','app','packaging','virtual element','road sign','graphic tee','prototype','mockup','microsite','pattern','ID'];

//All the subject
var subject = ['an animal charity','a discovery','an electronic bike','an exercise class','a conceptual chair','a service cart','a trash can','a restaurant','a water bottle','a treadmill','an archive','a library','net art','water pollution','deforestation','animal cruelty','a frisbee golf club','a child hunger organization','a curiosity museum','a laptop','a conspicuous consumption','human population growth','DNA testing'];

//All the audience
var audience = ['parents','aliens','millennials','distracted colleagues','toddlers','grandma','patients','kids','babies','foreigners','teenagers','hybrid designers','internet users','day dreamers','the board members','at-risk teens','baby boomers'];

//All the colors
var pjcolor = ['silver','teal','olive','maroon','gold','black','white','navy blue','orange','mustard yellow','hot pink','baby blue','new leaf green','turquoise green','beige','grey','off-white','lilac','steel blue','chartreuse'];

//All the typefaces
var pjtypeface = ['an old style typeface','a transitional serif typeface','a modern typeface','a slab-serif typeface','a humanist sans-serif typeface','a transitional sans-serif typeface','a geometric sans-serif typeface','hand lettering'];

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
  var randSubject = subject[Math.floor(Math.random() * subject.length)];
  var randAudience = audience[Math.floor(Math.random() * audience.length)];
  var randColor = pjcolor[Math.floor(Math.random() * pjcolor.length)];
  var randTypeface = pjtypeface[Math.floor(Math.random() * pjtypeface.length)];
  var andHolder = ' and ';
  var usingHolder = ', using shades of ';

  //delete certain elements of the sentence.

  if (randMedium == 'typeface') {
    andHolder = "";
    randTypeface = "";
    usingHolder = "";
    randColor = "";
  };

  if (randMedium == 'logo') {
    andHolder = "";
    randTypeface = "";
  };

  if (randMedium == 'web icon') {
    andHolder = "";
    randTypeface = "";
  };

  //print
  var newPrompt = 'create ' + randAdjective + ' ' + randMedium + ' of ' + randSubject + ' for ' + randAudience + usingHolder + randColor + andHolder + randTypeface + '.';

  var i = 0;
  var timer = setInterval(function(){
    elPrompt.textContent+=newPrompt[i];i++;
    if(i>newPrompt.length-1){clearInterval(timer)}
  },80)


  //change text color based on background color.
  if (randbgcolors == '#6d30b5') {
    elPrompt.style.color = '#ceff00';
    elSymbol.style.fill = '#ceff00';
    elCopyright.style.color = 'white';
    elFooter.style.color = '#aaaaaa';
  };

  if (randbgcolors == '#00123f') {
    elPrompt.style.color = '#dd1064';
    elSymbol.style.fill = '#dd1064';
    elCopyright.style.color = 'white';
    elFooter.style.color = '#aaaaaa';
  };

  if (randbgcolors == '#290059') {
    elPrompt.style.color = '#fff800';
    elSymbol.style.fill = '#fff800';
    elCopyright.style.color = 'white';
    elFooter.style.color = '#aaaaaa';
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
