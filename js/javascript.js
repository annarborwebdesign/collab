function showBio($person_id, $person_face){

  //HIDE ALL THE BIOS and dim all the faces
  hideAllDivs();

  //DISPLAY THE BIO
  document.getElementById($person_id).style.display = 'block';

  //MAKE THE FACE BRIGHT
  document.getElementById($person_face).style.filter = 'brightness(100%)';
}


//TO DO: DIM ALL THE FACES
function hideAllDivs(){
  document.getElementById("paulina-bio").style.display = 'none';
  document.getElementById("paulina-face").style.filter = 'brightness(30%)';

  document.getElementById("dominique-bio").style.display = 'none';
  document.getElementById("dominique-face").style.filter = 'brightness(30%)';

  document.getElementById("andries-bio").style.display = 'none';
  document.getElementById("andries-face").style.filter = 'brightness(30%)';

  document.getElementById("ella-bio").style.display = 'none';
  document.getElementById("ella-face").style.filter = 'brightness(30%)';

  document.getElementById("mallory-bio").style.display = 'none';
  document.getElementById("mallory-face").style.filter = 'brightness(30%)';

  document.getElementById("lorenzo-bio").style.display = 'none';
  document.getElementById("lorenzo-face").style.filter = 'brightness(30%)';

  document.getElementById("libby-bio").style.display = 'none';
  document.getElementById("libby-face").style.filter = 'brightness(30%)';

  document.getElementById("nicholas-bio").style.display = 'none';
  document.getElementById("nicholas-face").style.filter = 'brightness(30%)';

  document.getElementById("kate-bio").style.display = 'none';
  document.getElementById("kate-face").style.filter = 'brightness(30%)';

  document.getElementById("claire-bio").style.display = 'none';
  document.getElementById("claire-face").style.filter = 'brightness(30%)';

  document.getElementById("sean-bio").style.display = 'none';
  document.getElementById("sean-face").style.filter = 'brightness(30%)';

  document.getElementById("liliana-bio").style.display = 'none';
  document.getElementById("liliana-face").style.filter = 'brightness(30%)';

  document.getElementById("moiz-bio").style.display = 'none';
  document.getElementById("moiz-face").style.filter = 'brightness(30%)';

  document.getElementById("joshua-bio").style.display = 'none';
  document.getElementById("joshua-face").style.filter = 'brightness(30%)';

  document.getElementById("ryan-bio").style.display = 'none';
  document.getElementById("ryan-face").style.filter = 'brightness(30%)';

  document.getElementById("ishan-bio").style.display = 'none';
  document.getElementById("ishan-face").style.filter = 'brightness(30%)';

}
