/*Bij het laden van de window worden de functies die het accordion op de facliteitenpagina, de slideshow en de modalslideshow op de fotoimpressiepagina, en de tabs op de huurpagina geladen*/
window.onload = function() {
    accordionMenu();
    showSlides();
    showModalSlides();
    openTerms();
};

function accordionMenu () {
    var acc = document.getElementsByClassName('accordion');
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            /* Toggle tussen het toevoegen en het verwijderen van de "active" class, om de button te laten zien die het paneel controleert*/
            this.classList.toggle('active');

            /*Toggle tussen het laten zien van het actieve paneel*/
            var panel = this.nextElementSibling;
            console.log(panel);
            /*Als de panel geen hoogte heeft, niet laten zien*/
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                /*Anders de pixels laten zien dus de hoogte van de panel, laat het panel verschijnen*/
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    } 
    
}
function scrollupButton(pixels){
    var scrollupButton = document.getElementById("scroll-up");
    /*Als er meer dan 800 pixels is gescrollt, laat dan de scroll-up button zien*/
    if(pixels > 800){
        scrollupButton.style.visibility = 'visible';
    }
    /*(anders) Als er minder dan 800 pixels is gescrollt, laat dan de scroll-up button niet zien*/
    else{
        scrollupButton.style.visibility = 'hidden';
    }

}

window.onscroll = function(){
    /*Scroll naar de top*/
    scrollupButton(document.body.scrollTop);
};

/*slideshow dots*/

//Maak variabele slideIndex aan
var slideIndex = 1;
showSlides(slideIndex);

//Maak de functie plusSlides aan die de showslides laat zien aan de hand van het nummer dat in de html staat
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Maak de functie currentSlide aan die bij houd welke slide wordt weergegeven aan de hand van de index
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
    // de slides hebben de classname "mySlides' hier worden ze opgehaald
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

/*slideshow dots*/

/*slideshow modal*/

//Functie die ervoor zorgt dat het model opent door hem weer te geven als block
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

//Functie die ervoor zorgt dat het model sluit door hem niet meer weer te geven
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

//Maak variabele slideIndex voor de model slides aan
var slideIndex = 1;
showModalSlides(slideIndex);

//Maak de functie plusSlides aan die de showslides laat zien aan de hand van het nummer dat in de html staat
function plusModalSlides(n) {
  showModalSlides(slideIndex += n);
}

//Maak de functie currentSlide aan die bij houd welke slide wordt weergegeven aan de hand van de index
function currentModalSlide(n) {
  showModalSlides(slideIndex = n);
}

function showModalSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myModalSlides");
  var dots = document.getElementsByClassName("overgang");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/*slideshow modal*/

/*tab*/

function openTerms(termNumber,elmnt,color) {
    var i, tabcontent, tablinks;
    //Spreek de class tabcontent aan
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    //Spreek de class tablink aan
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    //Spreek de id termNumber aan
    document.getElementById(termNumber).style.display = "block";
    elmnt.style.backgroundColor = color;
}

// Get het element met id="defaultOpen" en klik erop
document.getElementById("defaultOpen").click();

/*tab*/

/*FORM*/

    function validateGroupName(x){
        /*Als de naam input klopt met de validatie regel return dan true en maak de border groen zo niet return false en maak de border rood*/
      var re = /[A-Za-z -']$/;
      if(re.test(document.getElementById(x).value)){
          //check input
        document.getElementById(x).style.border = '2px solid #02A660';//groene border
        return true;
      }else{
        document.getElementById(x).style.border ='2px solid #d90243';//rode border
        return false;
      }
    }
//name1
    function validateName1(x){
        /*Als de naam input klopt met de validatie regel return dan true en maak de border groen zo niet return false en maak de border rood*/
      var re = /[A-Za-z -']$/;
      if(re.test(document.getElementById(x).value)){
          //check input
        document.getElementById(x).style.border = '2px solid #02A660';//groene border
        return true;
      }else{
        document.getElementById(x).style.border ='2px solid #d90243';//rode border
        return false;
      }
    }

    //name2
        function validateName2(x){
            /*Als de naam input klopt met de validatie regel return dan true en maak de border groen zo niet return false en maak de border rood*/
          var re = /[A-Za-z -']$/;//validatie regel
          if(re.test(document.getElementById(x).value)){
              //check input
            document.getElementById(x).style.border = '2px solid #02A660';//groene border
            return true;
          }else{
            document.getElementById(x).style.border ='2px solid #d90243';//rode border
            return false;
          }
        }

    // Validate email
    function validateEmail(email){
        /*Als de email input klopt met de validatie regel return dan true en maak de border groen zo niet return false en maak de border rood*/
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//validatie regel
      if(re.test(email)){
          //check input
        document.getElementById('email').style.border = '2px solid #02A660';//groene border
        return true;
      }else{
        document.getElementById('email').style.border ='2px solid #d90243';//rode border
        return false;
      }
    }
    // Validate Select boxes
    function validateSelect(x){
        /*Als de select box geselcteerd is return dan true en maak de border groen zo niet return false en maak de border rood*/
      if(document.getElementById(x).selectedIndex !== 0){
          //check input
        document.getElementById(x).style.border = '2px solid #02A660'; //groene border
        return true;
        }else{
        document.getElementById(x).style.border ='2px solid #d90243';//rode border
        return false;
      }
    }
    function validateRadio(x){
        /*Als de radio button checked is return dan true zo niet return false*/
      if(document.getElementById(x).checked){
          //check input
        return true;
      }else{
        return false;
      }
    }
    function validateCheckbox(x){
        /*Als de checkbox checked is return dan true zo niet return false*/
      if(document.getElementById(x).checked){
          //check input
        return true;
      }
      return false;
    }

    function validateForm(){
      // Set error catcher
      var error = 0;
        
      // Check name
        /*Als het antwoord niet klopt met de validatieregels die eerder gemaakt zijn in de functie valdiateGroupName()...*/
      if(!validateGroupName('name')){
          /*Verander de tekst dan van kleur*/
        document.getElementById('groupNameError').style.color = "#d90243";
        error++;
      }

      //check name1
        /*Als het antwoord niet klopt met de validatieregels die eerder gemaakt zijn in de functie valdiateName1()...*/
      if(!validateName1('name')){
          /*Verander de tekst dan van kleur*/
        document.getElementById('name1Error').style.color = "#d90243";
        error++;
      }

      //check name2
        /*Als het antwoord niet klopt met de validatieregels die eerder gemaakt zijn in de functie valdiateName2()...*/
      if(!validateName2('name')){
          /*Verander de tekst dan van kleur*/
        document.getElementById('name2Error').style.color = "#d90243";
        error++;
      }

      // Validate email
        /*Als het antwoord niet klopt met de validatieregels die eerder gemaakt zijn in de functie valdiateEmail()...*/
      if(!validateEmail(document.getElementById('email').value)){
          /*Verander de tekst dan van kleur*/
      document.getElementById('emailError').style.color = "#d90243";
        error++;
      }
        
      // Validate freq dropdown box
        /*Als het antwoord niet klopt met de validatieregels die eerder gemaakt zijn in de functie valdiateSelect()...*/
      if(!validateSelect('freq')){
          /*Verander de tekst dan van kleur*/
        document.getElementById('freqError').style.color = "#d90243";
        error++;
      }

      // Validate size dropdown box
        /*Als het antwoord niet klopt met de validatieregels die eerder gemaakt zijn in de functie valdiateSelect()...*/
      if(!validateSelect('size')){
        /*Verander de tekst dan van kleur*/
        document.getElementById('sizeError').style.color = "#d90243";
        error++;
      }

      // Validate Radio generale repetitie
        /*Als het antwoord niet ja of nee is is het een error en verander de tekst dan van kleur*/
      if(validateRadio('ja')){

      }else if(validateRadio('nee')){

      }else{
         /*Verander de tekst dan van kleur*/
        document.getElementById('repError').style.color = "#d90243";
        error++;
      }

      // Validate Radio beamer
        /*Als het antwoord niet ja of nee is is het een error en verander de tekst dan van kleur*/
      if(validateRadio('ja')){

      }else if(validateRadio('nee')){

      }else{
         /*Verander de tekst dan van kleur*/
        document.getElementById('beamerError').style.color = "#d90243";
        error++;
      }

      // Validate Radio reserveringssysteem
        /*Als het antwoord niet ja of nee is is het een error en verander de tekst dan van kleur*/
      if(validateRadio('ja')){

      }else if(validateRadio('nee')){

      }else{
        /*Verander de tekst dan van kleur*/
        document.getElementById('reserveringError').style.color = "#d90243";
        error++;
      }

      //checkbox
        /*Als het antwoord niet accept is..*/
      if(!validateCheckbox('accept')){
         /*Verander de tekst dan van kleur*/
        document.getElementById('termsError').style.color = "#d90243";
        error++;
      }
      //Niet verzenden als er errors zijn
      if(error > 0){
        return false;
      }
    }

/*Form*/