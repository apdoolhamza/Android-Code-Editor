// importing editor output, html, css, and js files using its id
var outputeditor = document.getElementById('all-editor-output');
var htmlv = document.getElementById('html');
	var cssv = document.getElementById('css');
	var jsv = document.getElementById('js');

// importing run or compile button using its id
	var btn = document.getElementById('editor-run-btn');

// impoting element to display editor output using its id
	var outputframe = document.getElementById("editor-outpu-frame").contentWindow.document;

  // importing editor Edit container using its class
	var editlistcontainer = document.querySelector(".edit-list-container");

// importing Editor Files Container Buttons List using its id
    var filesContainerList = document.getElementById('filesContainerList');

    // importing editor menuBar
    var editormenu = document.getElementById("editor-ellipsis-menu");


// listen if the editor Run or compile Button clicked
btn.addEventListener("click",function(){
  // display editor output
outputeditor.style.display="block";

// compile and display all files codes
outputframe.writeln(htmlv.value + '<style>' + cssv.value + '</style>' + '<script>' + jsv.value + '</script>');
hideitems();

// importing documentTitle element to display the currant document Title
const documentTitle = document.querySelector('.documentTitle').textContent = outputframe.title;
},false);


//emmet for starting Html (html-5)
htmlv.addEventListener('keyup', () => {
  let emmet = htmlv.value.replace(RegExp('html-5', 'gmi'), `<!DOCTYPE html>
 <html lang="en-NG">
 <head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <title>Document</title>
 <link rel="stylesheet" href="font/fontawesome-free-6.1.1-web/css/all.css">
 </head>
 <body>
 
 </body>
 </html>`);
  htmlv.value = emmet;
  
  HtmlTextCouter();
  HtmlAutoSize();
})

// display editor menuBar function
function showEditoMenu(){
editormenu.style.display="block";
// hide these if it displayed
editlistcontainer.style.display="none";
filesContainerList.style.display="none";
editorRenameFileSec.style.display="none";
}

// display editor Edit container
function showeEditContainer(){
editlistcontainer.style.display="block";
}

//hide these elements if its active 
function hideitems(){
editormenu.style.display="none";
editlistcontainer.style.display="none";
hideEditorOutputMenu();
filesContainerList.style.display="none";
editorRenameFileSec.style.display="none";
editorRenameFileSecinput.value = "";
}

// display editor output menuBar function
function showOutputMenu(){
	document.getElementById("editor-output-menu").style.display="block";
}

// hide editor output menuBar function
function hideEditorOutputMenu(){
	document.getElementById("editor-output-menu").style.display="none";
}

// hide editor output function
function hideOutputFrame(){
	document.getElementById("all-editor-output").style.display="none";
outputframe.close();
hideEditorOutputMenu();

// zoom the screen back at its default width and unchecked the desktopMode Check-Box
zoomScreen(defaultWidth);
desktopMode.checked = false;
hideitems();
}

// Refresh Page fuction
function pageRefresh() {
  // save these files data to browser local Storage
  saveehtml();
saveecss();
saveejs();

// reload the editor
window.location.reload();
}

// desktopMode zoomScreen function
function zoomScreen(width) {
  var viewportTag = document.querySelector("meta[name=viewport]");
  if (!viewportTag) {
    viewportTag = document.createElement("meta");
    viewportTag.name = "viewport";
    document.head.appendChild(viewportTag);
  }
  viewportTag.content = "width=" + width;
}
// import and store the the default screen width
var defaultWidth = screen.width;
// import the desktopMode element using its Id
var desktopMode = document.querySelector('#desktopMode');
desktopMode.addEventListener('click', () => {
if (desktopMode.checked) {
  // zoom the screen to 1024px (default desktop screen width)
  zoomScreen(1024);
  hideitems();
} else {
  // zoom the screen back to the default
  zoomScreen(defaultWidth);
  hideitems();
}
})

// Create Text Range for currant cursor selection (like cut or paste specific codes in editor files)
const typeInTextarea = (newText, el = document.activeElement) => {
  const [start, end] = [el.selectionStart, el.selectionEnd];
  el.setRangeText(newText, start, end);
}

// importing all "edit" container childs
var selectAllhtml = document.getElementById('selectAll-html');
var selectAllcss = document.getElementById('selectAll-css');
var selectAlljs = document.getElementById('selectAll-js');
var Copyhtml = document.getElementById('Copy-html');
var Copycss = document.getElementById('Copy-css');
var Copyjs = document.getElementById('Copy-js');
var Cuthtml = document.getElementById('Cut-html');
var Cutcss = document.getElementById('Cut-css');
var Cutjs = document.getElementById('Cut-js');
var Pastehtml = document.getElementById('Paste-html');
var Pastecss = document.getElementById('Paste-css');
var Pastejs = document.getElementById('Paste-js');

// Create array for storing copied or cut data
var htmlLocalstorages = [];

// copy text function event listiner
Copyhtml.addEventListener('click', function(event) {
htmlv.focus();
var Item = document.getSelection(); 

// send the copied data to browser local storage
localStorage.setItem("htmlLocalstorages", Item);
hideitems();
});
Copycss.addEventListener('click', function(event) {
cssv.focus();
var Item = document.getSelection(); 

// send the copied data to browser local storage
localStorage.setItem("htmlLocalstorages", Item);
hideitems();
});
Copyjs.addEventListener('click', function(event) {
jsv.focus();
var Item = document.getSelection(); 

// send the copied data to browser local storage
localStorage.setItem("htmlLocalstorages", Item);
hideitems();
});

// paste text function event listiner
Pastehtml.addEventListener('click', function(event) {
htmlv.focus();
// paste the cuted or copied data anywhere in the currant editor file
    typeInTextarea(localStorage.getItem("htmlLocalstorages"));
hideitems();

// Resize html editor file automatic and count its codes line
HtmlAutoSize();
HtmlTextCouter();
});

Pastecss.addEventListener('click', function(event) {
cssv.focus();
// paste the cuted or copied data anywhere in the currant editor file
    typeInTextarea(localStorage.getItem("htmlLocalstorages"));
hideitems();

// Resize html editor file automatic and count its codes line
CssAutoSize();
CssTextCouter();
});

Pastejs.addEventListener('click', function(event) {
jsv.focus();
// paste the cuted or copied data anywhere in the currant editor file
    typeInTextarea(localStorage.getItem("htmlLocalstorages"));
hideitems();

// Resize html editor file automatic and count its codes line
JsAutoSize();
JsTextCouter();
});

// select all text function event listiner
selectAllhtml.addEventListener('click', function(event) {
htmlv.select();
htmlv.setSelectionRange(0, 99999);
hideitems();
});
selectAllcss.addEventListener('click', function(event) {
cssv.select();
htmlv.setSelectionRange(0, 99999);
hideitems();
});
selectAlljs.addEventListener('click', function(event) {
jsv.select();
htmlv.setSelectionRange(0, 99999);
hideitems();
});

//cut text function event listiner
Cuthtml.addEventListener('click', function(event) {
htmlv.focus();
var Item = document.getSelection(); 

// send the cuted data to browser local storage
localStorage.setItem("htmlLocalstorages", Item);
  typeInTextarea("");
hideitems();

// count html editor file codes line
HtmlTextCouter();
});

Cutcss.addEventListener('click', function(event) {
cssv.focus();
var Item = document.getSelection(); 

// send the cuted data to browser local storage
localStorage.setItem("htmlLocalstorages", Item);
  typeInTextarea("");
hideitems();

// count css editor file codes line
CssTextCouter();
});

Cutjs.addEventListener('click', function(event) {
jsv.focus();
var Item = document.getSelection(); 

// send the cuted data to browser local storage
localStorage.setItem("htmlLocalstorages", Item);
  typeInTextarea("");
hideitems();

// count js editor file codes line
JsTextCouter();
});

// importing Editor files name indicators
var showHtmlEditor = document.querySelector('.showHtmlEditor');
var showCssEditor = document.querySelector('.showCssEditor');
var showJsEditor = document.querySelector('.showJsEditor');

//importing codeIndicator icon to display Editor Files Container Buttons List
var codeIndicatoricon = document.querySelector('.codeIndicator-icon');

codeIndicatoricon.addEventListener('click',function (event) {
filesContainerList.style.display="block";
editorRenameFileSec.style.display="none";
editormenu.style.display="none";
}); 

// importing editor Create or Rename File As "Pop-up alert" and its input
var editorRenameFileSec = document.querySelector('.editorRenameFileSec');
var editorRenameFileSecinput = document.querySelector('.editorRenameFileSec input');
// importing showfilesContainer(New File) button
var showfilesContainer = document.getElementById('showfilesContainer');
showfilesContainer.addEventListener('click',function (event) {
editorRenameFileSec.style.display="flex";
editormenu.style.display="none";
filesContainerList.style.display="none";
editorRenameFileSecinput.value = "";
}); 

// importing all Create or Rename files buttons
var showCreateHtmlbtn = document.querySelector('#showCreateHtmlbtn');
var showCreateCssbtn = document.querySelector('#showCreateCssbtn');
var showCreateJsbtn  = document.querySelector('#showCreateJsbtn');

// importing canceling file creating button
var cancelSaveBtn = document.getElementById('cancelSaveBtn');
cancelSaveBtn.onclick = function (event) {
filesselect.options[filesselect.selectedIndex].text;
	if (htmlv.style.display === "block") {
filesselect.value = "htmlfile";
showCreateHtmlbtn.style.display="inline-block";
showCreateCssbtn.style.display="none";
showCreateJsbtn.style.display="none";
	};
	if (cssv.style.display === "block") {
filesselect.value = "cssfile";
showCreateCssbtn.style.display="inline-block";
showCreateJsbtn.style.display="none";
showCreateHtmlbtn.style.display="none";
	};
	if (jsv.style.display === "block") {
filesselect.value = "jsfile";
showCreateJsbtn.style.display="inline-block";
showCreateCssbtn.style.display="none";
showCreateHtmlbtn.style.display="none";
	};
editorRenameFileSec.style.display="none";
}

// importing editor Create or Rename File As "Pop-up alert" <select> element
var filesselect = document.getElementById("files-select");
filesselect.oninput = function(event) {
filesselect.options[filesselect.selectedIndex].text;
if (filesselect.value ==  "htmlfile"){
showCreateHtmlbtn.style.display="inline-block";
showCreateCssbtn.style.display="none";
showCreateJsbtn.style.display="none";
};
if (filesselect.value == "cssfile"){
showCreateCssbtn.style.display="inline-block";
showCreateJsbtn.style.display="none";
showCreateHtmlbtn.style.display="none";
};
if (filesselect.value == "jsfile"){
showCreateJsbtn.style.display="inline-block";
showCreateCssbtn.style.display="none";
showCreateHtmlbtn.style.display="none";
};
}

// Create or Rename Html file button fuction
function Createhtmlbtn(){
showHtmlEditor.innerText = editorRenameFileSecinput.value;
if (editorRenameFileSecinput.value === "") {
showHtmlEditor.innerText = editorRenameFileSecinput.value + "index.html";
};
 localStorage.removeItem('savehtmlLocalstorages');
htmlv.value = "";

showHtmlEditor.style.display="block";
showCssEditor.style.display="none";
showJsEditor.style.display="none";

htmlv.style.display="block";
cssv.style.display="none";
jsv.style.display="none";

hideitems();

savehtml.style.display ="block";
savejs.style.display = "none";
savecss.style.display ="none";

saveashtml.style.display = "block";
saveascss.style.display = "none";
saveasjs.style.display = "none";

selectAllhtml.style.display="block";
Copyhtml.style.display="block";
Cuthtml.style.display="block";
Pastehtml.style.display="block";

selectAllcss.style.display="none";
Copycss.style.display="none";
Cutcss.style.display="none";
Pastecss.style.display="none";

 selectAlljs.style.display="none";
Copyjs.style.display="none";
Cutjs.style.display="none";
Pastejs.style.display="none";

HtmlTextCouter();
}

// Create or Rename Css file button fuction
function CreateCssbtn(){
showCssEditor.innerText = editorRenameFileSecinput.value;
if (editorRenameFileSecinput.value === "") {
showCssEditor.innerText = editorRenameFileSecinput.value + "stylesheet.css";
};
 localStorage.removeItem('savecssLocalstorages');
cssv.value = "";

showCssEditor.style.display="block";
showHtmlEditor.style.display="none";
showJsEditor.style.display="none";

cssv.style.display="block";
htmlv.style.display="none";
jsv.style.display="none";

hideitems();

savecss.style.display ="block";
savehtml.style.display ="none";
savejs.style.display = "none";

saveascss.style.display = "block";
saveashtml.style.display = "none";
saveasjs.style.display = "none";

selectAllcss.style.display="block";
Copycss.style.display="block";
Cutcss.style.display="block";
Pastecss.style.display="block";

selectAllhtml.style.display="none";
Copyhtml.style.display="none";
Cuthtml.style.display="none";
Pastehtml.style.display="none";

 selectAlljs.style.display="none";
Copyjs.style.display="none";
Cutjs.style.display="none";
Pastejs.style.display="none";

CssTextCouter();
}

// Create or Rename Js file button fuction
function CreateJsbtn(){
showJsEditor.innerText = editorRenameFileSecinput.value;
if (editorRenameFileSecinput.value === "") {
showJsEditor.innerText = editorRenameFileSecinput.value + "script.js";
};
  localStorage.removeItem('savejsLocalstorages');
jsv.value = "";

showJsEditor.style.display="block";
showHtmlEditor.style.display="none";
showCssEditor.style.display="none";

jsv.style.display="block";
htmlv.style.display="none";
cssv.style.display="none";

hideitems();

savejs.style.display = "block";
savehtml.style.display ="none";
savecss.style.display ="none";

saveasjs.style.display = "block";
saveashtml.style.display = "none";
saveascss.style.display = "none";

 selectAlljs.style.display="block";
Copyjs.style.display="block";
Cutjs.style.display="block";
Pastejs.style.display="block";

selectAllcss.style.display="none";
Copycss.style.display="none";
Cutcss.style.display="none";
Pastecss.style.display="none";

selectAllhtml.style.display="none";
Copyhtml.style.display="none";
Cuthtml.style.display="none";
Pastehtml.style.display="none";

JsTextCouter();
}

// display html editor file function
function showHtmlEditorpage(){
showHtmlEditor.style.display="block";
showCssEditor.style.display="none";
showJsEditor.style.display="none";

htmlv.style.display="block";
cssv.style.display="none";
jsv.style.display="none";

showCreateHtmlbtn.style.display="inline-block";
showCreateCssbtn.style.display="none";
showCreateJsbtn.style.display="none";

filesselect.value = "htmlfile";
hideitems();

savehtml.style.display = "block";
savecss.style.display = "none";
savejs.style.display = "none";

saveashtml.style.display = "block";
saveascss.style.display = "none";
saveasjs.style.display = "none";

selectAllhtml.style.display="block";
Copyhtml.style.display="block";
Cuthtml.style.display="block";
Pastehtml.style.display="block";

selectAllcss.style.display="none";
Copycss.style.display="none";
Cutcss.style.display="none";
Pastecss.style.display="none";

 selectAlljs.style.display="none";
Copyjs.style.display="none";
Cutjs.style.display="none";
Pastejs.style.display="none";

HtmlTextCouter();
}

// display css editor file function
function showCssEditorpage(){
showCssEditor.style.display="block";
showHtmlEditor.style.display="none";
showJsEditor.style.display="none";

htmlv.style.display="none";
cssv.style.display="block";
jsv.style.display="none";

showCreateCssbtn.style.display="inline-block";
showCreateHtmlbtn.style.display="none";
showCreateJsbtn.style.display="none";

filesselect.value = "cssfile";
hideitems();

savecss.style.display = "block";
savejs.style.display = "none";
savehtml.style.display = "none";

saveascss.style.display = "block";
saveashtml.style.display = "none";
saveasjs.style.display = "none";

selectAllcss.style.display="block";
Copycss.style.display="block";
Cutcss.style.display="block";
Pastecss.style.display="block";

selectAllhtml.style.display="none";
Copyhtml.style.display="none";
Cuthtml.style.display="none";
Pastehtml.style.display="none";

 selectAlljs.style.display="none";
Copyjs.style.display="none";
Cutjs.style.display="none";
Pastejs.style.display="none";

CssTextCouter();
}

// display js editor file function
function showJsEditorpage(){
showJsEditor.style.display="block";
showCssEditor.style.display="none";
showHtmlEditor.style.display="none";

htmlv.style.display="none";
cssv.style.display="none";
jsv.style.display="block";

showCreateJsbtn.style.display="inline-block";
showCreateCssbtn.style.display="none";
showCreateHtmlbtn.style.display="none";

filesselect.value = "jsfile";
hideitems();

savejs.style.display = "block";
savehtml.style.display = "none";
savecss.style.display = "none";

saveasjs.style.display = "block";
saveashtml.style.display = "none";
saveascss.style.display = "none";

 selectAlljs.style.display="block";
Copyjs.style.display="block";
Cutjs.style.display="block";
Pastejs.style.display="block";

selectAllcss.style.display="none";
Copycss.style.display="none";
Cutcss.style.display="none";
Pastecss.style.display="none";

selectAllhtml.style.display="none";
Copyhtml.style.display="none";
Cuthtml.style.display="none";
Pastehtml.style.display="none";

JsTextCouter();
}

// importing Editor load file As "Pop-up alert" element
var whareloadpopup = document.querySelector('.whare-load-popup');
// importing upload new file button input
var fileToLoadaccept = document.querySelector('.fileToLoadaccept');
// importing Editor load file As "Pop-up alert" <select> Element
var loadfilesselect = document.getElementById("load-files-select");
// load data to currant, active file function
function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;

loadfilesselect.options[loadfilesselect.selectedIndex].text;
if (loadfilesselect.value === "loadhtmlfile"){
       htmlv.value = textFromFileLoaded;
       htmlv.style.display = "block";
cssv.style.display = "none";
jsv.style.display = "none";
showHtmlEditorpage();

HtmlAutoSize();
HtmlTextCouter();
};
if (loadfilesselect.value === "loadcssfile"){
       cssv.value = textFromFileLoaded;
        cssv.style.display = "block";
        htmlv.style.display = "none";
        jsv.style.display = "none";
showCssEditorpage();

CssAutoSize();
CssTextCouter();
};
if (loadfilesselect.value === "loadjsfile"){
       jsv.value = textFromFileLoaded;
       jsv.style.display = "block";
       htmlv.style.display = "none";
       cssv.style.display = "none";
showJsEditorpage();

JsAutoSize();
JsTextCouter();
};
  whareloadpopup.style.display="none";

    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

// display load file Pop-up alert
function showWareload() {
  var fileInput = document.getElementById('fileToLoad');
             
 var filePath = fileInput.value;

 // Allowing file type
var allowedExtensions = 
/(\.html|\.css|\.js)$/i;
             
            if (!allowedExtensions.exec(filePath)) {
                fileInput.value = '';
                return false;
            } else {

             whareloadpopup.style.display="grid";

            }
}
// hide load file Pop-up alert
function hidewhareloadpopup(){
  whareloadpopup.style.display="none";
}

// arrays to store Saved files data from localStorage
var savehtmlLocalstorages = [];
var savecssLocalstorages = [];
var savejsLocalstorages = [];
// save html editor file data to browser local Storage
function saveehtml(){
var Item = htmlv.value; 
localStorage.setItem("savehtmlLocalstorages", Item);
hideitems();
}
// save css editor file data to browser local Storage
function saveecss(){
var Items = cssv.value; 
localStorage.setItem("savecssLocalstorages", Items);
hideitems();
}
// save js editor file data to browser local Storage
function saveejs(){
var Item = jsv.value; 
localStorage.setItem("savejsLocalstorages", Item);
hideitems();
}
// retrieve all stored files data when browser loaded
 htmlv.value = localStorage.getItem("savehtmlLocalstorages");
 cssv.value = localStorage.getItem("savecssLocalstorages");
 jsv.value = localStorage.getItem("savejsLocalstorages");
  

// importing download any currant file to local device <li> buttons
var saveashtml = document.getElementById("saveashtml");
var saveascss = document.getElementById("saveascss");
var saveasjs = document.getElementById("saveasjs");

// download html file data to local device
function saveHtmlFileAs(){
         const link = document.createElement("a");
         const content = htmlv.value;
         const file = new Blob([content], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = showHtmlEditor.innerText;
         link.click();
         URL.revokeObjectURL(link.href);

    localStorage.removeItem('savehtmlLocalstorages');
     htmlv.value = "";

HtmlAutoSize();
HtmlTextCouter();
hideitems();
}

// download css file data to local device
function saveCssFileAs(){
      const link = document.createElement("a");
         const content = cssv.value;
         const file = new Blob([content], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = showCssEditor.innerText;
         link.click();
         URL.revokeObjectURL(link.href);

  localStorage.removeItem('savecssLocalstorages');
      cssv.value = "";

CssAutoSize();
CssTextCouter();
hideitems();
}

// download js file data to local device
function saveJsFileAs(){
  const link = document.createElement("a");
         const content = jsv.value;
         const file = new Blob([content], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = showJsEditor.innerText;
         link.click();
         URL.revokeObjectURL(link.href);

    localStorage.removeItem('savejsLocalstorages');
      jsv.value = "";

JsAutoSize();
JsTextCouter();
hideitems();
}

// All text counter Container
// importing editor text line counter container
var output = document.getElementById('codeCounter');
 output.innerHTML = 1;
 
//  counter for html editor file
htmlv.addEventListener('input',HtmlTextCouter);

//  counter for css editor file
cssv.addEventListener('input',CssTextCouter);

//  counter for js editor file
jsv.addEventListener('input',JsTextCouter);

 function autoResize() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
}

// Events to listen all files Input
htmlv.addEventListener('input',autoResize,false);
cssv.addEventListener('input',autoResize,false);
jsv.addEventListener('input',autoResize,false);

//  count all files when load or reload window
let lenCss = cssv.value.split("\n").length;
let lensJs = jsv.value.split("\n").length;
let lenEditor = htmlv.value.split("\n").length;
let TemptextCss = "";
let TemptextJs = "";
let TemptextEditor = "";
let numCss = 0;
let numJs = 0;
let numEditor = 0;

for (let count = 1; count < lenCss +1; count++) {
TemptextCss += count;
numCss++;
TemptextCss += "<br>";
}
for (let count = 1; count < lensJs +1; count++) {
 TemptextJs += count;
 numJs++;
 TemptextJs += "<br>";
 }
 for (let count = 1; count < lenEditor +1; count++) {
   TemptextEditor += count;
   numEditor++;
   TemptextEditor += "<br>";
   }

if(TemptextCss === ""){
output.innerHTML = 1;
}
if(TemptextJs === ""){
 output.innerHTML = 1;
 }
 if(TemptextEditor === ""){
   output.innerHTML = 1;
   }
 output.innerHTML = TemptextCss;
 output.innerHTML = TemptextJs;
 output.innerHTML = TemptextEditor;

  // auto Resize the files height if load or reload window
  htmlv.style.height = 'auto';
  htmlv.style.height = htmlv.scrollHeight + 'px';
  
  window.onclick = function() {
    cssv.style.height = 'auto';
    cssv.style.height = cssv.scrollHeight + 'px';
  
     jsv.style.height = 'auto';
     jsv.style.height = jsv.scrollHeight + 'px';
  }

  function JsTextCouter() {
    let len = jsv.value.split("\n").length;
let Temptext = "";
let num = 0;
for (let count = 1; count < len +1; count++) {
Temptext += count;
num++;
Temptext += "<br>";
}
if(Temptext === ""){
output.innerHTML = 1;
}
 output.innerHTML = Temptext;
}
function JsAutoSize() {
  jsv.style.height = 'auto';
  jsv.style.height = jsv.scrollHeight + 'px';
}

function CssTextCouter() {
  let len = cssv.value.split("\n").length;
let Temptext = "";
let num = 0;
for (let count = 1; count < len +1; count++) {
Temptext += count;
num++;
Temptext += "<br>";
}
if(Temptext === ""){
output.innerHTML = 1;
}
output.innerHTML = Temptext;
}
function CssAutoSize() {
  cssv.style.height = 'auto';
  cssv.style.height = cssv.scrollHeight + 'px';
}

function HtmlTextCouter() {
  let len = htmlv.value.split("\n").length;
let Temptext = "";
let num = 0;
for (let count = 1; count < len +1; count++) {
Temptext += count;
num++;
Temptext += "<br>";
}
if(Temptext === ""){
output.innerHTML = 1;
}
output.innerHTML = Temptext;
}
function HtmlAutoSize() {
  htmlv.style.height = 'auto';
  htmlv.style.height = htmlv.scrollHeight + 'px';
}
