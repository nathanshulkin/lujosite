// Nathan Shulkin
// Lujo Lifestyle script
//
// All code was written and/or generated by Nathan Shulkin
// for use in the LUJO website and is therefore
// intellectual property of Nathan Shulkin; whom has given
// permission for LUJO to use code in accordance with
// agreed upon terms. Any attempt to use this code without
// permission from the author is prohibited.
//

const app = document.getElementById('root');

// create containers for main, hand bags, boots, story
const mainContainer = document.createElement('div');
mainContainer.setAttribute('class', 'container');

const handbagContainer = document.createElement('div');
handbagContainer.setAttribute('class', 'container');

const bootContainer = document.createElement('div');
bootContainer.setAttribute('class', 'container');

const storyContainer = document.createElement('div');
storyContainer.setAttribute('class', 'container');

const socialEntContainer = document.createElement('div');
socialEntContainer.setAttribute('class', 'container');

// hide the non main containers
handbagContainer.style.display = "none";
bootContainer.style.display = "none";
storyContainer.style.display = "none";


// main page
const createdBy = document.createElement('div');
createdBy.setAttribute('class', 'bottomCard');
const createdByText = document.createElement('p');
createdByText.style.textAlign="center";
createdByText.textContent="Website Built by Nathan Shulkin";

createdBy.appendChild(createdByText);

// drop down button click
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownClick() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropdown").animate({
                                                  opacity:'+=0.2',
                                                  height: '+=50px',
                                                  margin: '-=20px'
                                                });
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// for gitting JSON file

// \brief get JSON file
// \param(file_name) target JSON file name
// \ret JSON file
function get_json(file_name) {
	var requester = create_http_request();
	requester.open("GET", file_name, false);
	requester.send(null);
	var json_text = requester.responseText;
	var data = json_parser(json_text);
	return data;
}
// \brief create requester for getting files
// \todo support old browser (ex: IE6, IE5)
function create_http_request() {
	var requester = null;
	// for modern browser
	if(window.XMLHttpRequest) {
		requester = new XMLHttpRequest();
	}
	return requester;
}
// \brief return true when posible JSON object
// refer to "http://stackoverflow.com/questions/1787020/json-object-in-ie6-how"
function enable_json() {
	if(!this.JSON) {
		return false;
	}
	return true;
}
// \brief translate JSON into Javascript object
// \param(json_data) JSON
// \ret 
function json_parser(json_data) {
	var data = new String();
	
	if(enable_json()) {
		data = JSON.parse(json_data);
	}
	else {
		// security warning because use eval function
		data = eval("(" + json_data + ")");
	}
	
	return data;
}


function createMoon(words){

    var spagh = document.createElement('div');
    spagh.setAttribute('class', 'moon p')
    spagh.textContent=words;

    return spagh;
}

function createNix(words){

    var spagh = document.createElement('div');
    spagh.setAttribute('class', 'nix p')
    spagh.textContent=words;

    return spagh;
}


// button clicks
function logoClick()
{
  window.scrollTo(0, 0);
  mainContainer.style.display="flex";
  handbagContainer.style.display = "none";
  bootContainer.style.display = "none";
  storyContainer.style.display = "none";
  socialEntContainer.style.display = "none";
}

function instaClick()
{
  window.open('https://www.instagram.com/lujolifestylebrand');
}

function storyClick() {
  window.scrollTo(0, 0);
  mainContainer.style.display="none";
  handbagContainer.style.display = "none";
  bootContainer.style.display = "none";
  storyContainer.style.display = "flex";
  socialEntContainer.style.display = "none";
}

function handbagClick() {
  window.scrollTo(0, 0);
  mainContainer.style.display="none";
  handbagContainer.style.display = "flex";
  bootContainer.style.display = "none";
  storyContainer.style.display = "none";
  socialEntContainer.style.display = "none";
}

function bootsClick() {
  window.scrollTo(0, 0);
  mainContainer.style.display="none";
  handbagContainer.style.display = "none";
  bootContainer.style.display = "flex";
  storyContainer.style.display = "none";
  socialEntContainer.style.display = "none";
}

function socialEntClick() {
  window.scrollTo(0, 0);
  mainContainer.style.display="none";
  handbagContainer.style.display = "none";
  bootContainer.style.display = "none";
  storyContainer.style.display = "none";
  socialEntContainer.style.display = "flex";
}

function arrangeClick() {
  //parent.location='mailto:terry@lujolifestylebrand.com';
  window.open('mailto:terry@lujolifestylebrand.com', "_self");
}

// create menu
const ddown = document.createElement('div');
ddown.setAttribute('class', 'menuUp');

const rightMenu = document.createElement('div');
rightMenu.setAttribute('class', 'thinCard')

const logoCard = document.createElement('div');
logoCard.setAttribute('class', 'tinyLogoCard');
const menuLogo = document.createElement('img');
menuLogo.src = "photos/LUJO_NEW_white_logo_2020.png";
menuLogo.addEventListener("click", logoClick);

logoCard.appendChild(menuLogo);
rightMenu.appendChild(logoCard);

const leftMenu = document.createElement('div');
leftMenu.setAttribute('class', 'thinCenterCard');


const socialEntMenu = document.createElement('div');
socialEntMenu.setAttribute('class', 'tinyCard');
socialEntMenu.style.width="22%";
const entText = document.createElement('div');
entText.textContent = "Social Enterprise";

socialEntMenu.addEventListener("click", socialEntClick);

socialEntMenu.appendChild(entText);
leftMenu.appendChild(socialEntMenu);


const storyCard = document.createElement('div');
storyCard.setAttribute('class', 'tinyCard');
const storyTxt = document.createElement('div')
storyTxt.textContent="Our Story";

storyCard.addEventListener("click", storyClick);

storyCard.appendChild(storyTxt);
leftMenu.appendChild(storyCard);



// create clickable menu for webpage, add it to dropdown 
const menuDDown = document.createElement('div');
menuDDown.setAttribute('id', 'myDropdown');
menuDDown.setAttribute('class', 'dropdown-content');


const menuBoots = document.createElement('div');
menuBoots.setAttribute('class', 'menuCard');
menuBoots.textContent="Boots";
menuBoots.style.height="160%";

menuBoots.addEventListener("click", bootsClick);

const menuBag = document.createElement('div');
menuBag.setAttribute('class', 'menuCard');
menuBag.textContent="Hand Bags";
menuBag.style.height="160%";

menuBag.addEventListener("click", handbagClick);

//add menu
menuDDown.appendChild(menuBoots);
menuDDown.appendChild(menuBag);


// dropdown
const ourProdCard = document.createElement('div');
ourProdCard.setAttribute('class', 'dropbtn');
ourProdCard.textContent="Our Products";
ourProdCard.addEventListener("click", dropdownClick);


ourProdCard.appendChild(menuDDown);
leftMenu.appendChild(ourProdCard);


const contactUsCard = document.createElement('div');
contactUsCard.setAttribute('class', 'tinyCard');
const contactUsTxt = document.createElement('div');
contactUsTxt.textContent = "Contact Us";

contactUsCard.addEventListener("click", arrangeClick);

contactUsCard.appendChild(contactUsTxt);
leftMenu.appendChild(contactUsCard);

const followCard = document.createElement('div');
followCard.setAttribute('class', 'tinyCard');
const followTxt = document.createElement('div');
followTxt.textContent="Follow Us";
const instaImgCard = document.createElement('div');
instaImgCard.setAttribute('class', 'superTinyCard');
const instaImg = document.createElement('img');
instaImg.src = "photos/instagramLogo.png"
instaImgCard.appendChild(instaImg);

followCard.addEventListener("click", instaClick);
followCard.appendChild(instaImgCard);

leftMenu.appendChild(followCard);
rightMenu.appendChild(leftMenu);

ddown.appendChild(rightMenu);


// blank space
const p0 = document.createElement('p');
p0.textContent="\n\n\n\n\n";



//main container

// first image
const fiberCard = document.createElement('div');
fiberCard.setAttribute('class', 'entireCard');

const fiber = document.createElement('img');
fiber.src = 'photos/homeImage.png';

fiberCard.appendChild(fiber);

// main part
const bootsBagContainter = document.createElement('div');
bootsBagContainter.setAttribute('class', 'container');

// boots
const bootsCard = document.createElement('div');
bootsCard.setAttribute('class', 'card');

const bootsPic = document.createElement('img');
bootsPic.src = 'photos/bootsButtonFinal.png';

bootsCard.addEventListener("click", bootsClick)

bootsCard.appendChild(bootsPic);

// hand bags
const bagCard = document.createElement('div');
bagCard.setAttribute('class', 'card');

const bagPic = document.createElement('img');
bagPic.src = 'photos/handBagButtonFinal.png';

bagCard.addEventListener("click", handbagClick)


bagCard.appendChild(bagPic);


// our story
const ourStoryCard = document.createElement('div');
ourStoryCard.setAttribute('class', 'card');

const storyPic = document.createElement('img');
storyPic.src = 'photos/ourStoryButton.png';

ourStoryCard.addEventListener("click", storyClick)

ourStoryCard.appendChild(storyPic);

// social enterprise
const socialEntCard = document.createElement('div');
socialEntCard.setAttribute('class', 'card');

const entPic = document.createElement('img');
entPic.src = 'photos/socialEnt.png';

socialEntCard.addEventListener("click", socialEntClick);

socialEntCard.appendChild(entPic);

bootsBagContainter.appendChild(bootsCard);
bootsBagContainter.appendChild(bagCard);
bootsBagContainter.appendChild(ourStoryCard);
bootsBagContainter.appendChild(socialEntCard);


// add elements to main container
mainContainer.appendChild(fiberCard);
mainContainer.appendChild(p0);
mainContainer.appendChild(bootsBagContainter);
mainContainer.appendChild(createdBy);



// boot container
// boots
const headBootCont = document.createElement('div');
headBootCont.setAttribute('class', 'container');
headBootCont.style.backgroundColor="#000000";

const bibidyBootsCard = document.createElement('div');
bibidyBootsCard.setAttribute('class', 'thirdCard');

const bibidyBootsPic = document.createElement('img');
bibidyBootsPic.src = 'photos/blackBckBoots.jpg';

bibidyBootsCard.appendChild(bibidyBootsPic);

var bootsJson = get_json("https://raw.githubusercontent.com/nathanshulkin/lujosite/master/lujoText.json");

const bibidyBootsText = document.createElement('div');
bibidyBootsText.setAttribute('class', 'twoThirdCard');

const headBootTxt = document.createElement('p');
headBootTxt.textContent = bootsJson.boots[0];

const headBootTxt1 = document.createElement('p');
headBootTxt1.textContent = bootsJson.boots[1];

const headBootTxt2 = document.createElement('p');
headBootTxt2.textContent = bootsJson.boots[2];

const headBootTxt3 = document.createElement('p');
headBootTxt3.textContent = bootsJson.boots[3];


bibidyBootsText.appendChild(headBootTxt);
bibidyBootsText.appendChild(headBootTxt1);
bibidyBootsText.appendChild(headBootTxt2);
bibidyBootsText.appendChild(headBootTxt3);


headBootCont.appendChild(bibidyBootsCard);
headBootCont.appendChild(bibidyBootsText);

// container for boots
const bootPageBootsContainer = document.createElement('div');
bootPageBootsContainer.setAttribute('class', 'container');
bootPageBootsContainer.style.backgroundColor="#FCFCFC";


// first line of python boots
const rainPython = document.createElement('div');
rainPython.setAttribute('class', 'thirdCard');
const rainPythonImg = document.createElement('img');
rainPythonImg.src = 'photos/rainbowPython.JPG';
rainPython.appendChild(rainPythonImg);

const redPython = document.createElement('div');
redPython.setAttribute('class', 'thirdCard');
const redPythonImg = document.createElement('img');
redPythonImg.src = 'photos/blueBoots.jpg';
redPython.appendChild(redPythonImg);

const greenPython = document.createElement('div');
greenPython.setAttribute('class', 'thirdCard');
const greenPythonImg = document.createElement('img');
greenPythonImg.src = 'photos/pinkPython.JPG';
greenPython.appendChild(greenPythonImg);


bootPageBootsContainer.appendChild(rainPython);
bootPageBootsContainer.appendChild(redPython);
bootPageBootsContainer.appendChild(greenPython);



// second line of boots

const pinkPython = document.createElement('div');
pinkPython.setAttribute('class', 'fifthCard');
const pinkPythonImg = document.createElement('img');
pinkPythonImg.src = '';
pinkPython.appendChild(pinkPythonImg);

const pinkPython1 = document.createElement('div');
pinkPython1.setAttribute('class', 'thirdCard');
const pinkPython1Img = document.createElement('img');
pinkPython1Img.src = 'photos/kiana.jpg';
pinkPython1.appendChild(pinkPython1Img);

const pinkPython2 = document.createElement('div');
pinkPython2.setAttribute('class', 'thirdCard');
const pinkPython2Img = document.createElement('img');
pinkPython2Img.src = 'photos/laura.jpg';
pinkPython2.appendChild(pinkPython2Img);

const bluePython1 = document.createElement('div');
bluePython1.setAttribute('class', 'fifthCard');
const bluePython1Text = document.createElement('p');
bluePython1Text.style.color="#000000";
bluePython1Text.textContent="";
bluePython1.appendChild(bluePython1Text);


bootPageBootsContainer.appendChild(pinkPython);
bootPageBootsContainer.appendChild(pinkPython1);
bootPageBootsContainer.appendChild(pinkPython2);
bootPageBootsContainer.appendChild(bluePython1);




// third line of boots

const peacock = document.createElement('div');
peacock.setAttribute('class', 'fifthCard');
const peacockImg = document.createElement('img');
peacockImg.src = 'photos/sideFirst.jpg';
peacock.appendChild(peacockImg);

const peacock1 = document.createElement('div');
peacock1.setAttribute('class', 'fifthCard');
const peacock1Img = document.createElement('img');
peacock1Img.src = 'photos/sideSecond.jpg';
peacock1.appendChild(peacock1Img);

const peacock2 = document.createElement('div');
peacock2.setAttribute('class', 'fifthCard');
const peacock2Img = document.createElement('img');
peacock2Img.src = 'photos/peacock2.JPG';
peacock2.appendChild(peacock2Img);

const peacock3 = document.createElement('div');
peacock3.setAttribute('class', 'fifthCard');
const peacock3Img = document.createElement('img');
peacock3Img.src = 'photos/sideFourth.jpg';
peacock3.appendChild(peacock3Img);

const peacock4 = document.createElement('div');
peacock4.setAttribute('class', 'fifthCard');
const peacock4Img = document.createElement('img');
peacock4Img.src = 'photos/sideFifth.png';
peacock4.appendChild(peacock4Img);


bootPageBootsContainer.appendChild(peacock);
bootPageBootsContainer.appendChild(peacock1);
bootPageBootsContainer.appendChild(peacock2);
bootPageBootsContainer.appendChild(peacock3);
bootPageBootsContainer.appendChild(peacock4);

// fourth + fifth lines for text
const bootJsonCard = document.createElement('div');
bootJsonCard.setAttribute('class', 'entireCard');

const bootJsonText = document.createElement('p');
bootJsonText.style.color="black";
bootJsonText.style.margin="auto";
bootJsonText.style.textAlign="center";
bootJsonText.textContent=bootsJson.boots[4];

const bootJsonCard1 = document.createElement('div');
bootJsonCard1.setAttribute('class', 'entireCard');

const bootJsonText1 = document.createElement('p');
bootJsonText1.style.color="black";
bootJsonText1.style.margin="auto";
bootJsonText.style.textAlign="center";
bootJsonText1.textContent=bootsJson.boots[5];


bootJsonCard.appendChild(bootJsonText);
bootJsonCard1.appendChild(bootJsonText1);
bootPageBootsContainer.appendChild(bootJsonCard);
bootPageBootsContainer.appendChild(bootJsonCard1);

bootContainer.appendChild(headBootCont);
bootContainer.appendChild(bootPageBootsContainer);




// hand bag page
// hand bag container
// boots
const handBagCont = document.createElement('div');
handBagCont.setAttribute('class', 'container');
handBagCont.style.backgroundColor="#000000";

const bibidyBagsCard = document.createElement('div');
bibidyBagsCard.setAttribute('class', 'thirdCard');

const bibidyBagsPic = document.createElement('img');
bibidyBagsPic.src = 'photos/blueCircleBag.png';

bibidyBagsCard.appendChild(bibidyBagsPic);

const bibidyBagsText = document.createElement('div');
bibidyBagsText.setAttribute('class', 'twoThirdCard');

const headBagTxt = document.createElement('p');
headBagTxt.textContent = "Still in progress...";

bibidyBagsText.appendChild(headBagTxt);


handBagCont.appendChild(bibidyBagsCard);
handBagCont.appendChild(bibidyBagsText);

handbagContainer.appendChild(handBagCont);



// add containers to page
app.appendChild(ddown)
app.appendChild(mainContainer);
app.appendChild(bootContainer);
app.appendChild(handbagContainer);
