function changeCollab($collab_id) {

    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById($collab_id).style.display = 'block';

    return;
}


function showBio($person_id, $person_face) {

  hideAllDivs();
  document.getElementById($person_id).style.display = 'block';
  document.getElementById($person_face).style.filter = 'brightness(100%)';

  return;
}


function hideAllDivs() {
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

  return;
}

function showBioMobile($person_id, $person_face) {

  hideAllDivsMobile();
  document.getElementById($person_id).style.display = 'block';
  document.getElementById($person_face).style.filter = 'brightness(100%)';

  return;
}

function hideAllDivsMobile() {
  document.getElementById("paulina-bio-mobile").style.display = 'none';
  document.getElementById("paulina-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("dominique-bio-mobile").style.display = 'none';
  document.getElementById("dominique-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("andries-bio-mobile").style.display = 'none';
  document.getElementById("andries-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("ella-bio-mobile").style.display = 'none';
  document.getElementById("ella-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("mallory-bio-mobile").style.display = 'none';
  document.getElementById("mallory-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("lorenzo-bio-mobile").style.display = 'none';
  document.getElementById("lorenzo-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("libby-bio-mobile").style.display = 'none';
  document.getElementById("libby-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("nicholas-bio-mobile").style.display = 'none';
  document.getElementById("nicholas-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("kate-bio-mobile").style.display = 'none';
  document.getElementById("kate-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("claire-bio-mobile").style.display = 'none';
  document.getElementById("claire-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("sean-bio-mobile").style.display = 'none';
  document.getElementById("sean-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("liliana-bio-mobile").style.display = 'none';
  document.getElementById("liliana-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("moiz-bio-mobile").style.display = 'none';
  document.getElementById("moiz-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("joshua-bio-mobile").style.display = 'none';
  document.getElementById("joshua-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("ryan-bio-mobile").style.display = 'none';
  document.getElementById("ryan-face-mobile").style.filter = 'brightness(30%)';

  document.getElementById("ishan-bio-mobile").style.display = 'none';
  document.getElementById("ishan-face-mobile").style.filter = 'brightness(30%)';

  return;
}

function defineAllo(){
  var tempStyle = document.getElementById("allophonic").style.display;

  if (tempStyle=='block') {
    tempStyle='none'
  }
  else {
    tempStyle='block';
  }
  document.getElementById("allophonic").style.display = tempStyle;
  return;
}
