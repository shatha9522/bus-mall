'use strict';
var firstImageElement = document.getElementById('first-img');
var secImageElement = document.getElementById('sec-img');
var thirdImageElement = document.getElementById('third-img');
var numberOfRound = 25;
var userAttemptsCounter = 0;

var firstImageIndex=-1;
var secImageIndex=-1;
var thirdImageIndex=-1;

//var previousFirstImageIndex=-1;
//var previousSecImageIndex=-1;
//var previousThirdImageIndex=-1;

//var userClickCounter = 0;
var imagesNames = [];
var votes = [];
var view =[];
function BusMallImage(name, source) {
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.view = 0;
  BusMallImage.prototype.allImages.push(this);
  imagesNames.push(name);
  

}
var votingSessionForm = document.getElementById('votingSession')
votingSessionForm.addEventListener('submit', submitter);

function submitter(event) {
  event.preventDefault();
  console.log(event);
  numberOfRound = event.target.numberOfRound.value;
}



BusMallImage.prototype.allImages = [];
new BusMallImage('bag', 'img/bag.jpg');
new BusMallImage('banana', 'img/banana.jpg');
new BusMallImage('bathroom', 'img/bathroom.jpg');
new BusMallImage('boots', 'img/boots.jpg');
new BusMallImage('breakfast', 'img/breakfast.jpg');
new BusMallImage('bubblegum', 'img/bubblegum.jpg');
new BusMallImage('chair', 'img/chair.jpg');
new BusMallImage('cthulhu', 'img/cthulhu.jpg');
new BusMallImage('dog-duck', 'img/dog-duck.jpg');
new BusMallImage('dragon', 'img/dragon.jpg');
new BusMallImage('pen', 'img/pen.jpg');
new BusMallImage('pet-sweep', 'img/pet-sweep.jpg');
new BusMallImage('scissors', 'img/scissors.jpg');
new BusMallImage('shark', 'img/shark.jpg');
new BusMallImage('sweep', 'img/sweep.png');
new BusMallImage('tauntaun', 'img/tauntaun.jpg');
new BusMallImage('unicorn', 'img/unicorn.jpg');
new BusMallImage('usb', 'img/usb.gif');
new BusMallImage('water-can', 'img/water-can.jpg');
new BusMallImage('wine-glass', 'img/wine-glass.jpg');

renderRandomImages();

firstImageElement.addEventListener('click', handleUserClick);
secImageElement.addEventListener('click', handleUserClick);
thirdImageElement.addEventListener('click', handleUserClick);



//renderRandomImages();

firstImageElement.addEventListener('click', handleUserClick);
secImageElement.addEventListener('click', handleUserClick);
thirdImageElement.addEventListener('click', handleUserClick);

function handleUserClick(event) {
 // userAttemptsCounter++;

  if (userAttemptsCounter < numberOfRound) {
    if (event.target.id === 'first-img') {
      BusMallImage.prototype.allImages[firstImageIndex].votes++;
      userAttemptsCounter++;
    }

    //else if(userAttemptsCounter <= numberOfRound){h
    if (event.target.id === 'sec-img') {
      BusMallImage.prototype.allImages[secImageIndex].votes++;
      userAttemptsCounter++;
    }


    else {
      if (event.target.id === 'third-img') {
        BusMallImage.prototype.allImages[thirdImageIndex].votes++;
        userAttemptsCounter++;
      }

    }
    renderRandomImages();

  } else {
    // handle end of voting
    var resultsList = document.getElementById('results-list');
    var Result;
    for (var i = 0; i < BusMallImage.prototype.allImages.length; i++) {
      Result = document.createElement('li');
     // Result.textContent = BusMallImage.prototype.allImages[i].name + '  has ' + BusMallImage.prototype.allImages[i].votes + ' votes' + ', and was seen ' + BusMallImage.prototype.allImages[i].view + 'times' + ' the Persantage of times that an item was clicked' + (BusMallImage.prototype.allImages[i].votes * 100 / BusMallImage.prototype.allImages[i].viwe + '%');
      Result.textContent = BusMallImage.prototype.allImages[i].name + 'has'+ BusMallImage.prototype.allImages[i].votes + ' votes , and was seen ' +
        BusMallImage.prototype.allImages[i].view + 'times.' + ' the Persantage of times that an item was clicked : ' + (BusMallImage.prototype.allImages[i].
          votes * 100 / BusMallImage.prototype.allImages[i].view) + '%';
      resultsList.appendChild(Result);

    }
    firstImageElement.removeEventListener('click', handleUserClick);
    secImageElement.removeEventListener('click', handleUserClick);
    thirdImageElement.removeEventListener('click', handleUserClick);



    for (var i = 0; i < BusMallImage.prototype.allImages.length; i++) {
      votes.push(BusMallImage.prototype.allImages[i].votes);
      view.push(BusMallImage.prototype.allImages[i].view);

    }
    chart.config.data.datasets[0].data = votes;
    chart.config.data.datasets[1].data = view;


  }

}

function renderRandomImages() {
  var previousIndex=[firstImageIndex,secImageIndex,thirdImageIndex]


  do {
    firstImageIndex = generateRandomIndex();
  }
     while (previousIndex.includes(firstImageIndex));

previousIndex.push(firstImageIndex);
  firstImageElement.src = BusMallImage.prototype.allImages[firstImageIndex].source;
  BusMallImage.prototype.allImages[firstImageIndex].view++;
  do {
    secImageIndex = generateRandomIndex();
  }
     while (previousIndex.includes(secImageIndex));

previousIndex.push(secImageIndex);

  secImageElement.src = BusMallImage.prototype.allImages[secImageIndex].source;
  BusMallImage.prototype.allImages[secImageIndex].view++;

  do {
    thirdImageIndex = generateRandomIndex();
  }
     while (previousIndex.includes(thirdImageIndex));

previousIndex.push(thirdImageIndex);
  thirdImageElement.src = BusMallImage.prototype.allImages[thirdImageIndex].source;
  BusMallImage.prototype.allImages[thirdImageIndex].view++;
  console.log(firstImageIndex,secImageIndex,thirdImageIndex);
}

  

function generateRandomIndex() {
  return Math.floor(Math.random() * (BusMallImage.prototype.allImages.length));
}


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: imagesNames,
    datasets: [{
      label: 'Votes',
      backgroundColor: ' rgb(253, 184, 39)',
      borderColor: ' rgb(253, 184, 39)',
      data: votes      
    },{label: 'Viwe',
    backgroundColor: 'black',
    borderColor: 'black',
    data: view      }]
    
  },

  // Configuration options go here
  options: {}
  


  
});



