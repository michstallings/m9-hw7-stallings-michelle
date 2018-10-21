var button = document.getElementsByTagName('button');

var locationDiv = document.getElementsByClassName('hide-div');

function showDiv() {
  this.nextElementSibling.classList.toggle('show-div');
  //Get THIS button's next sibling and toggle ITS class

  if (this.nextElementSibling.classList.contains('show-div')) {
    //If THIS button's next sibling has the class show-div

    this.innerHTML = "Close";
    //Make THIS button's innerHTML equal to Close Bio

  } else {
    this.innerHTML = "Find A Location";
    //Otherwise, make THIS button's innerHTML equal to Read Bio
  }
};

for (i=0; i < button.length; i++) {
  button[i].addEventListener('click', showDiv);
};