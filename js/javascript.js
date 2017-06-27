function changeTimeline($idNum){
  clearTimeline();

  switch($idNum){
    case 1:
      document.getElementById("timeline1").style.display = 'block';
      break;
    case 2:
      document.getElementById("timeline2").style.display = 'block';
      break;
    case 3:
      document.getElementById("timeline3").style.display = 'block';
      break;
    case 4:
      document.getElementById("timeline4").style.display = 'block';
      break;
    case 5:
      document.getElementById("timeline5").style.display = 'block';
      break;
    case 6:
      document.getElementById("timeline6").style.display = 'block';
      break;
    case 7:
      document.getElementById("timeline7").style.display = 'block';
      break;
    case 8:
      document.getElementById("timeline8").style.display = 'block';
      break;
    case 9:
      document.getElementById("timeline9").style.display = 'block';
      break;
    case 10:
      document.getElementById("timeline10").style.display = 'block';
      break;
    case 11:
      document.getElementById("timeline11").style.display = 'block';
      break;
    case 12:
      document.getElementById("timeline12").style.display = 'block';
      break;
    case 13:
      document.getElementById("timeline13").style.display = 'block';
      break;
    case 14:
      document.getElementById("timeline14").style.display = 'block';
      break;
  }
  return;
}

function clearTimeline(){
  document.getElementById("timeline1").style.display = 'none';
  document.getElementById("timeline2").style.display = 'none';
  document.getElementById("timeline3").style.display = 'none';
  document.getElementById("timeline4").style.display = 'none';
  document.getElementById("timeline5").style.display = 'none';
  document.getElementById("timeline6").style.display = 'none';
  document.getElementById("timeline7").style.display = 'none';
  document.getElementById("timeline8").style.display = 'none';
  document.getElementById("timeline9").style.display = 'none';
  document.getElementById("timeline10").style.display = 'none';
  document.getElementById("timeline11").style.display = 'none';
  document.getElementById("timeline12").style.display = 'none';
  document.getElementById("timeline13").style.display = 'none';
  document.getElementById("timeline14").style.display = 'none';
}


function changeCollab($collab_id){
    document.getElementById("first").style.display = 'none';
    document.getElementById("second").style.display = 'none';
    document.getElementById("third").style.display = 'none';
    document.getElementById("fourth").style.display = 'none';
    document.getElementById($collab_id).style.display = 'block';
}


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
