// Full Screen functionality
function launchFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function dumpFullscreen() {
  console.log('document.fullscreenElement is: ', document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
  console.log('document.fullscreenEnabled is: ', document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled);
}

// Events
document.addEventListener('fullscreenchange', function(e) {
  console.log('fullscreenchange event! ', e);
});
document.addEventListener('mozfullscreenchange', function(e) {
  console.log('mozfullscreenchange event! ', e);
});
document.addEventListener('webkitfullscreenchange', function(e) {
  console.log('webkitfullscreenchange event! ', e);
});
document.addEventListener('msfullscreenchange', function(e) {
  console.log('msfullscreenchange event! ', e);
});
// End Full Screen Functionality

// Events List Parser
function displayEvents() {

	var eventContainer = document.getElementById('events').innerHTML;
	var numberOfEvents = document.querySelectorAll('.event').length;
	var eventDates = document.getElementsByClassName('eventDate');
	var eventNames = document.getElementsByClassName('eventName')
	var eventList = [];

	for (i = 0; i <= numberOfEvents - 1; i++) {
		eventList.push(eventDates[i].innerHTML);
		eventList.push(eventNames[i].innerHTML);
		//alert(eventList)
	}

	var eventListNode = document.createElement('div');
	document.body.appendChild(eventListNode)
	eventListNode.setAttribute('id', 'tv-events')

	var newEventList = [];

	for (j = 0; j <= numberOfEvents - 1; j++) {

		var tvEvent = document.createElement('div');
		tvEvent.setAttribute('class', 'anEvent')
		tvEvent.innerHTML = '<span class="date-displayed">' + eventList[j+j] + '</span>' + '<br>' + '<span class="event-displayed">' + eventList[j+j+1] + '</span>';
		//eventListNode.appendChild(tvEvent);
		newEventList.push(tvEvent)
		//alert(newEventList[j].innerHTML)
	}

	function eventLoop() {
	    var num = 0  
	    setInterval(function () {
	        num = (num + 1) % numberOfEvents;
	        if (eventListNode.childNodes.length === 0)
	        {
	        	eventListNode.appendChild(newEventList[num]);
	        	newEventList[num].setAttribute('class', 'anEvent shown')
	        }
	        else {
	        	eventListNode.removeChild(eventListNode.childNodes[0]);
	        	eventListNode.appendChild(newEventList[num])
	        	newEventList[num].setAttribute('class', 'anEvent shown')
	        }       
	    }, 4000);
	}
	eventLoop();
		
	// Clears old HTML
	var oldBody = document.getElementById('events');
	oldBody.parentNode.removeChild(oldBody);

	// removes the Launch button
	var launchButton = document.getElementById('launchButton');
	launchButton.parentNode.removeChild(launchButton);
}





