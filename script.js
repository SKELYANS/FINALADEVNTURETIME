a = document.getElementById("finn1");
a2 = document.getElementById("finn");
b = document.getElementById("jake1");
b2 = document.getElementById("jake");
c = document.getElementById("pb1");
c2 = document.getElementById("pb");
d = document.getElementById("bmo1");
d2 = document.getElementById("bmo");
e = document.getElementById("iceman1");
e2 = document.getElementById("iceman");
f = document.getElementById("marcy1");
f2 = document.getElementById("marcy");
g = document.getElementById("logo");
gs = document.getElementById("logoSmall");
bb = document.getElementById("buttonpage");
fb = document.getElementById("finnbox");
fb2 = document.getElementById("fbox");
jb = document.getElementById("jakeBox");
pbb = document.getElementById("pbbox");
bmob = document.getElementById("bmoBox");
ib = document.getElementById("iceBox");
vb = document.getElementById("vampBox");
jb1 = document.getElementById("jakeBox1");
pbb1 = document.getElementById("pbbox1");
bmob1 = document.getElementById("bmoBox1");
ib1 = document.getElementById("iceBox1");
vb1 = document.getElementById("vampBox1");
theme = document.getElementById("theme");
pbaudio = document.getElementById("pbaudio");
finnaudio = document.getElementById("finnaudio");
jakeaudio = document.getElementById("jakeaudio");
BMOaudio = document.getElementById("BMOaudio");
iceaudio = document.getElementById("iceaudio");
marcyaudio = document.getElementById("marcyaudio");
prismoaudio = document.getElementById("prismoaudio");
peppermintaudio = document.getElementById("peppermintaudio");
rainaudio = document.getElementById("rainaudio");
fernaudio = document.getElementById("fernaudio");
lspaudio = document.getElementById("lspaudio");
lichaudio = document.getElementById("lichaudio");
dance = document.getElementById("dance");

function addFinnPhoto() {
  stopSounds();
  resetBackground();
  g.src = "images/finntext.PNG";
  document.getElementById("finnaudio").play();
  fb.classList.remove("blue");
  fb.classList.add("selectedfin");
}
function addJakePhoto() {
  stopSounds();
  resetBackground();
  g.src = "images/jaketext.PNG";
  document.getElementById("jakeaudio").play();
  jb.classList.remove("yellow");
  jb.classList.add("selectedjake");
}
function addPBPhoto() {
  stopSounds();
  resetBackground();
  g.src = "images/pbtext.PNG";
  document.getElementById("pbaudio").play();
  pbb.classList.remove("pink");
  pbb.classList.add("selectedpb");
}
function addBMOPhoto() {
  stopSounds();
  resetBackground();
  g.src = "images/bmotext.PNG";
  document.getElementById("BMOaudio").play();
  bmob.classList.add("selectedbmo");
  bmob.classList.remove("green");
}
function addIcemanPhoto() {
  stopSounds();
  resetBackground();
  g.src = "images/icetext.PNG";
  document.getElementById("iceaudio").play();
  ib.classList.remove("iceBlue");
  ib.classList.add("selectedice");
}
function addMarcyPhoto() {
  stopSounds();
  resetBackground();
  g.src = "images/marcytext.PNG";
  document.getElementById("marcyaudio").play();
  vb.classList.remove("red");
  vb.classList.add("selectedmarcy");
}
function addFinnPhoto1() {
  stopSounds();
  resetBackground();
  gs.src = "images/finntext.PNG";
  document.getElementById("finnaudio").play();
  fb2.classList.remove("blue");
  fb2.classList.add("selectedfin");
}
function addJakePhoto1() {
  stopSounds();
  resetBackground();
  gs.src = "images/jaketext.PNG";
  document.getElementById("jakeaudio").play();
  jb1.classList.remove("yellow");
  jb1.classList.add("selectedjake");
}
function addPBPhoto1() {
  stopSounds();
  resetBackground();
  gs.src = "images/pbtext.PNG";
  document.getElementById("pbaudio").play();
  pbb1.classList.remove("pink");
  pbb1.classList.add("selectedpb");
}
function addBMOPhoto1() {
  stopSounds();
  resetBackground();
  gs.src = "images/bmotext.PNG";
  document.getElementById("BMOaudio").play();
  bmob1.classList.remove("green");
  bmob1.classList.add("selectedbmo");
}
function addIcemanPhoto1() {
  stopSounds();
  resetBackground();
  gs.src = "images/icetext.PNG";
  document.getElementById("iceaudio").play();
  ib1.classList.remove("iceBlue");
  ib1.classList.add("selectedice");
}
function addMarcyPhoto1() {
  stopSounds();
  resetBackground();
  gs.src = "images/marcytext.PNG";
  document.getElementById("marcyaudio").play();
  vb1.classList.remove("red");
  vb1.classList.add("selectedmarcy");
}
function addPrismoPhoto() {
  stopSounds();
  g.src = "images/prismotext.PNG";
  document.getElementById("prismoaudio").play();
  fb.classList.remove("prismo");
  fb.classList.add("selectedprismo");
  jb.classList.remove("selectedrain");
  jb.classList.add("rain");
  bmob.classList.remove("selectedfern");
  bmob.classList.add("fern");
  pbb.classList.remove("selectedpeppermint");
  pbb.classList.add("peppermint");
  ib.classList.remove("selectedlsp");
  ib.classList.add("lsp");
  vb.classList.remove("selectedlich");
  vb.classList.add("lich");
}
function addRainPhoto() {
  stopSounds();
  g.src = "images/raintext.PNG";
  document.getElementById("rainaudio").play();
  fb.classList.remove("selectedprismo");
  fb.classList.add("prismo");
  jb.classList.remove("rain");
  jb.classList.add("selectedrain");
  bmob.classList.remove("selectedfern");
  bmob.classList.add("fern");
  pbb.classList.remove("selectedpeppermint");
  pbb.classList.add("peppermint");
  ib.classList.remove("selectedlsp");
  ib.classList.add("lsp");
  vb.classList.remove("selectedlich");
  vb.classList.add("lich");
}
function addPeppermintPhoto() {
  stopSounds();
  g.src = "images/pepperminttext.PNG";
  document.getElementById("peppermintaudio").play();
  fb.classList.remove("selectedprismo");
  fb.classList.add("prismo");
  jb.classList.remove("selectedrain");
  jb.classList.add("rain");
  bmob.classList.remove("selectedfern");
  bmob.classList.add("fern");
  pbb.classList.remove("peppermint");
  pbb.classList.add("selectedpeppermint");
  ib.classList.remove("selectedlsp");
  ib.classList.add("lsp");
  vb.classList.remove("selectedlich");
  vb.classList.add("lich");
}
function addFernPhoto() {
  stopSounds();
  g.src = "images/ferntext.PNG";
  document.getElementById("fernaudio").play();
  fb.classList.remove("selectedprismo");
  fb.classList.add("prismo");
  jb.classList.remove("selectedrain");
  jb.classList.add("rain");
  bmob.classList.remove("fern");
  bmob.classList.add("selectedfern");
  pbb.classList.remove("selectedpeppermint");
  pbb.classList.add("peppermint");
  ib.classList.remove("selectedlsp");
  ib.classList.add("lsp");
  vb.classList.remove("selectedlich");
  vb.classList.add("lich");
}
function addLspPhoto() {
  stopSounds();
  g.src = "images/lsptext.PNG";
  document.getElementById("lspaudio").play();
  fb.classList.remove("selectedprismo");
  fb.classList.add("prismo");
  jb.classList.remove("selectedrain");
  jb.classList.add("rain");
  bmob.classList.remove("selectedfern");
  bmob.classList.add("fern");
  pbb.classList.remove("selectedpeppermint");
  pbb.classList.add("peppermint");
  ib.classList.remove("lsp");
  ib.classList.add("selectedlsp");
  vb.classList.remove("selectedlich");
  vb.classList.add("lich");
}
function addLichPhoto() {
  stopSounds();
  g.src = "images/lichtext.PNG";
  f.src = "images/snailich.png";
  document.getElementById("lichaudio").play();
  fb.classList.remove("selectedprismo");
  fb.classList.add("prismo");
  jb.classList.remove("selectedrain");
  jb.classList.add("rain");
  bmob.classList.remove("selectedfern");
  bmob.classList.add("fern");
  pbb.classList.remove("selectedpeppermint");
  pbb.classList.add("peppermint");
  ib.classList.remove("selectedlsp");
  ib.classList.add("lsp");
  vb.classList.remove("lich");
  vb.classList.add("selectedlich");
}
function addPrismoPhoto1() {
  stopSounds();
  gs.src = "images/prismotext.PNG";
  document.getElementById("prismoaudio").play();
  fb2.classList.remove("prismo");
  fb2.classList.add("selectedprismo");
  jb1.classList.remove("selectedrain");
  jb1.classList.add("rain");
  bmob1.classList.remove("selectedfern");
  bmob1.classList.add("fern");
  pbb1.classList.remove("selectedpeppermint");
  pbb1.classList.add("peppermint");
  ib1.classList.remove("selectedlsp");
  ib1.classList.add("lsp");
  vb1.classList.remove("selectedlich");
  vb1.classList.add("lich");
}
function addRainPhoto1() {
  stopSounds();
  gs.src = "images/raintext.PNG";
  document.getElementById("rainaudio").play();
  fb2.classList.remove("selectedprismo");
  fb2.classList.add("prismo");
  jb1.classList.remove("rain");
  jb1.classList.add("selectedrain");
  bmob1.classList.remove("selectedfern");
  bmob1.classList.add("fern");
  pbb1.classList.remove("selectedpeppermint");
  pbb1.classList.add("peppermint");
  ib1.classList.remove("selectedlsp");
  ib1.classList.add("lsp");
  vb1.classList.remove("selectedlich");
  vb1.classList.add("lich");
}
function addPeppermintPhoto1() {
  stopSounds();
  gs.src = "images/pepperminttext.PNG";
  document.getElementById("peppermintaudio").play();
  fb2.classList.remove("selectedprismo");
  fb2.classList.add("prismo");
  jb1.classList.remove("selectedrain");
  jb1.classList.add("rain");
  bmob1.classList.remove("selectedfern");
  bmob1.classList.add("fern");
  pbb1.classList.remove("peppermint");
  pbb1.classList.add("selectedpeppermint");
  ib1.classList.remove("selectedlsp");
  ib1.classList.add("lsp");
  vb1.classList.remove("selectedlich");
  vb1.classList.add("lich");
}
function addFernPhoto1() {
  stopSounds();
  gs.src = "images/ferntext.PNG";
  document.getElementById("fernaudio").play();
  fb2.classList.remove("selectedprismo");
  fb2.classList.add("prismo");
  jb1.classList.remove("selectedrain");
  jb1.classList.add("rain");
  bmob1.classList.remove("fern");
  bmob1.classList.add("selectedfern");
  pbb1.classList.remove("selectedpeppermint");
  pbb1.classList.add("peppermint");
  ib1.classList.remove("selectedlsp");
  ib1.classList.add("lsp");
  vb1.classList.remove("selectedlich");
  vb1.classList.add("lich");
}
function addLspPhoto1() {
  stopSounds();
  gs.src = "images/lsptext.PNG";
  document.getElementById("lspaudio").play();
  fb2.classList.remove("selectedprismo");
  fb2.classList.add("prismo");
  jb1.classList.remove("selectedrain");
  jb1.classList.add("rain");
  bmob1.classList.remove("selectedfern");
  bmob1.classList.add("fern");
  pbb1.classList.remove("selectedpeppermint");
  pbb1.classList.add("peppermint");
  ib1.classList.remove("selectedlsp");
  ib1.classList.add("lsp");
  ib1.classList.remove("lsp");
  ib1.classList.add("selectedlsp");
  vb1.classList.remove("selectedlich");
  vb1.classList.add("lich");
}
function addLichPhoto1() {
  stopSounds();
  gs.src = "images/lichtext.PNG";
  f2.src = "images/snailich.png";
  document.getElementById("lichaudio").play();
  fb2.classList.remove("selectedprismo");
  fb2.classList.add("prismo");
  jb1.classList.remove("selectedrain");
  jb1.classList.add("rain");
  bmob1.classList.remove("selectedfern");
  bmob1.classList.add("fern");
  pbb1.classList.remove("selectedpeppermint");
  pbb1.classList.add("peppermint");
  ib1.classList.remove("selectedlsp");
  ib1.classList.add("lsp");
  vb1.classList.remove("lich");
  vb1.classList.add("selectedlich");
}
function newpage() {
  pauseAudio();
  fb.classList.add("prismo");
  a.src = "images/prismo.png";
  a.setAttribute("onclick", "addPrismoPhoto()");
  //change onclick function

  jb.classList.add("rain");
  b.src = "images/rain.png";
  b.setAttribute("onclick", "addRainPhoto()");

  pbb.classList.add("peppermint");
  c.src = "images/peppermint.png";
  c.setAttribute("onclick", "addPeppermintPhoto()");

  bmob.classList.add("fern");
  d.src = "images/fern1.png";
  d.setAttribute("onclick", "addFernPhoto()");

  ib.classList.add("lsp");
  e.src = "images/lsp.png";
  e.setAttribute("onclick", "addLspPhoto()");

  vb.classList.add("lich");
  f.src = "images/lich.png";
  f.setAttribute("onclick", "addLichPhoto()");

  fb2.classList.add("prismo");
  a2.src = "images/prismo.png";
  a2.setAttribute("onclick", "addPrismoPhoto1()");

  pbb1.classList.add("peppermint");
  c2.src = "images/peppermint.png";
  c2.setAttribute("onclick", "addPeppermintPhoto1()");

  jb1.classList.add("rain");
  b2.src = "images/rain.png";
  b2.setAttribute("onclick", "addRainPhoto1()");

  bmob1.classList.add("fern");
  d2.src = "images/fern1.png";
  d2.setAttribute("onclick", "addFernPhoto1()");

  ib1.classList.add("lsp");
  e2.src = "images/lsp.png";
  e2.setAttribute("onclick", "addLspPhoto1()");

  vb1.classList.add("lich");
  f2.src = "images/lich.png";
  f2.setAttribute("onclick", "addLichPhoto1()");

  a2.classList.remove("rotate");
  a.classList.remove("rotate");
  b.classList.remove("rotate");
  b2.classList.remove("rotate");
  c.classList.remove("rotate");
  c2.classList.remove("rotate");
  d.classList.remove("rotate");
  d2.classList.remove("rotate");
  e.classList.remove("rotate");
  e2.classList.remove("rotate");
  f.classList.remove("rotate");
  f2.classList.remove("rotate");

  pbb.classList.remove("selectedpb");
  fb.classList.remove("selectedfin");
  bmob.classList.remove("selectedbmo");
  jb.classList.remove("selectedjake");
  ib.classList.remove("selectedice");
  vb.classList.remove("selectedmarcy");
  fb2.classList.remove("selectedfin");
  jb1.classList.remove("selectedjake");
  pbb1.classList.remove("selectedpb");
  bmob1.classList.remove("selectedbmo");
  ib1.classList.remove("selectedice");
  vb1.classList.remove("selectedmarcy");

  pbb.classList.remove("selectedpeppermint");
  fb.classList.remove("selectedprismo");
  bmob.classList.remove("selectedfern");
  jb.classList.remove("selectedrain");
  ib.classList.remove("selectedlsp");
  vb.classList.remove("selectedlich");
  fb2.classList.remove("selectedprismo");
  jb1.classList.remove("selectedrain");
  pbb1.classList.remove("selectedpeppermint");
  bmob1.classList.remove("selectedfern");
  ib1.classList.remove("selectedlsp");
  vb1.classList.remove("selectedlich");
}
function resetAll() {
  pauseAudio();
  g.src = "images/logoimages.png";
  gs.src = "images/logoimages.png";

  fb.classList.remove("prismo");
  fb.classList.remove("selected");
  fb.classList.add("blue");
  a.src = "images/FinnAdventureTime-removebg-preview.png";
  a.setAttribute("onclick", "addFinnPhoto()");

  jb.classList.remove("rain");
  jb.classList.add("yellow");
  b.src = "images/jakes.png";
  b.setAttribute("onclick", "addJakePhoto()");

  pbb.classList.remove("peppermint");
  pbb.classList.add("pink");
  c.src = "images/pbs.png";
  c.setAttribute("onclick", "addPBPhoto()");

  bmob.classList.remove("fern");
  bmob.classList.add("green");
  d.src = "images/Bmo.png";
  d.setAttribute("onclick", "addBMOPhoto()");

  ib.classList.remove("lsp");
  ib.classList.add("iceBlue");
  e.src = "images/iceman.png";
  e.setAttribute("onclick", "addIcemanPhoto()");

  vb.classList.remove("lich");
  vb.classList.add("red");
  f.src = "images/marcys1.png";
  f.setAttribute("onclick", "addMarcyPhoto()");

  fb2.classList.remove("prismo");
  fb2.classList.add("blue");
  a2.src = "images/FinnAdventureTime-removebg-preview.png";
  a2.setAttribute("onclick", "addFinnPhoto1()");

  jb1.classList.remove("rain");
  jb1.classList.add("yellow");
  b2.src = "images/jakes.png";
  b2.setAttribute("onclick", "addJakePhoto1()");

  pbb1.classList.remove("peppermint");
  pbb1.classList.add("pink");
  c2.src = "images/pbs.png";
  c2.setAttribute("onclick", "addPBPhoto1()");

  bmob1.classList.remove("fern");
  bmob1.classList.add("green");
  d2.src = "images/Bmo.png";
  d2.setAttribute("onclick", "addBMOPhoto1()");

  ib1.classList.remove("lsp");
  ib1.classList.add("iceBlue");
  e2.src = "images/iceman.png";
  e2.setAttribute("onclick", "addIcemanPhoto1()");

  vb1.classList.remove("lich");
  vb1.classList.add("red");
  f2.src = "images/marcys1.png";
  f2.setAttribute("onclick", "addMarcyPhoto1()");

  a2.classList.remove("rotate");
  a.classList.remove("rotate");
  b.classList.remove("rotate");
  b2.classList.remove("rotate");
  c.classList.remove("rotate");
  c2.classList.remove("rotate");
  d.classList.remove("rotate");
  d2.classList.remove("rotate");
  e.classList.remove("rotate");
  e2.classList.remove("rotate");
  f.classList.remove("rotate");
  f2.classList.remove("rotate");

  pbb.classList.remove("selectedpb");
  fb.classList.remove("selectedfin");
  bmob.classList.remove("selectedbmo");
  jb.classList.remove("selectedjake");
  ib.classList.remove("selectedice");
  vb.classList.remove("selectedmarcy");
  fb2.classList.remove("selectedfin");
  jb1.classList.remove("selectedjake");
  pbb1.classList.remove("selectedpb");
  bmob1.classList.remove("selectedbmo");
  ib1.classList.remove("selectedice");
  vb1.classList.remove("selectedmarcy");

  pbb.classList.remove("selectedpeppermint");
  fb.classList.remove("selectedprismo");
  bmob.classList.remove("selectedfern");
  jb.classList.remove("selectedrain");
  ib.classList.remove("selectedlsp");
  vb.classList.remove("selectedlich");
  fb2.classList.remove("selectedprismo");
  jb1.classList.remove("selectedrain");
  pbb1.classList.remove("selectedpeppermint");
  bmob1.classList.remove("selectedfern");
  ib1.classList.remove("selectedlsp");
  vb1.classList.remove("selectedlich");
}
function playTheme() {
  document.getElementById("theme").play();
}
function turnAll() {
  a2.classList.add("rotate");
  a.classList.add("rotate");
  b.classList.add("rotate");
  b2.classList.add("rotate");
  c.classList.add("rotate");
  c2.classList.add("rotate");
  d.classList.add("rotate");
  d2.classList.add("rotate");
  e.classList.add("rotate");
  e2.classList.add("rotate");
  f.classList.add("rotate");
  f2.classList.add("rotate");

  fb.classList.remove("blue");
  fb2.classList.remove("blue");
  jb.classList.remove("yellow");
  jb1.classList.remove("yellow");
  pbb.classList.remove("pink");
  pbb1.classList.remove("pink");
  bmob.classList.remove("green");
  bmob1.classList.remove("green");
  ib.classList.remove("iceBlue");
  ib1.classList.remove("iceBlue");
  vb.classList.remove("red");
  vb1.classList.remove("red");

  fb.classList.remove("prismo");
  fb2.classList.remove("prismo");
  jb.classList.remove("rain");
  jb1.classList.remove("rain");
  pbb.classList.remove("peppermint");
  pbb1.classList.remove("peppermint");
  bmob.classList.remove("fern");
  bmob1.classList.remove("fern");
  ib.classList.remove("lsp");
  ib1.classList.remove("lsp");
  vb.classList.remove("lich");
  vb1.classList.remove("lich");
  pbb.classList.remove("selectedpb");
  fb.classList.remove("selectedfin");
  bmob.classList.remove("selectedbmo");
  jb.classList.remove("selectedjake");
  ib.classList.remove("selectedice");
  vb.classList.remove("selectedmarcy");
  fb2.classList.remove("selectedfin");
  jb1.classList.remove("selectedjake");
  pbb1.classList.remove("selectedpb");
  bmob1.classList.remove("selectedbmo");
  ib1.classList.remove("selectedice");
  vb1.classList.remove("selectedmarcy");
  pbb.classList.remove("selectedpeppermint");
  fb.classList.remove("selectedprismo");
  bmob.classList.remove("selectedfern");
  jb.classList.remove("selectedrain");
  ib.classList.remove("selectedlsp");
  vb.classList.remove("selectedlich");
  fb2.classList.remove("selectedprismo");
  jb1.classList.remove("selectedrain");
  pbb1.classList.remove("selectedpeppermint");
  bmob1.classList.remove("selectedfern");
  ib1.classList.remove("selectedlsp");
  vb1.classList.remove("selectedlich");

  document.getElementById("dance").play();
}
function stopSounds() {
  document.getElementById("finnaudio").pause();
  document.getElementById("finnaudio").currentTime = 0;
  document.getElementById("jakeaudio").pause();
  document.getElementById("jakeaudio").currentTime = 0;
  document.getElementById("theme").pause();
  document.getElementById("theme").currentTime = 0;
  document.getElementById("pbaudio").pause();
  document.getElementById("pbaudio").currentTime = 0;
  document.getElementById("BMOaudio").pause();
  document.getElementById("BMOaudio").currentTime = 0;
  document.getElementById("iceaudio").pause();
  document.getElementById("iceaudio").currentTime = 0;
  document.getElementById("marcyaudio").pause();
  document.getElementById("marcyaudio").currentTime = 0;

  document.getElementById("prismoaudio").pause();
  document.getElementById("prismoaudio").currentTime = 0;
  document.getElementById("peppermintaudio").pause();
  document.getElementById("peppermintaudio").currentTime = 0;
  document.getElementById("rainaudio").pause();
  document.getElementById("rainaudio").currentTime = 0;
  document.getElementById("fernaudio").pause();
  document.getElementById("fernaudio").currentTime = 0;
  document.getElementById("lspaudio").pause();
  document.getElementById("lspaudio").currentTime = 0;
  document.getElementById("lichaudio").pause();
  document.getElementById("lichaudio").currentTime = 0;
  document.getElementById("dance").pause();
  document.getElementById("dance").currentTime = 0;
}
function pauseAudio() {
  document.getElementById("dance").pause();
}
function resetBackground() {
  fb2.classList.remove("selectedfin");
  fb2.classList.add("blue");
  jb1.classList.remove("selectedjake");
  jb1.classList.add("yellow");
  pbb1.classList.remove("selectedpb");
  pbb1.classList.add("pink");
  bmob1.classList.remove("selectedbmo");
  bmob1.classList.add("green");
  ib1.classList.remove("selectedice");
  ib1.classList.add("iceBlue");
  vb1.classList.remove("selectedmarcy");
  vb1.classList.add("red");

  fb.classList.remove("selectedfin");
  fb.classList.add("blue");
  jb.classList.remove("selectedjake");
  jb.classList.add("yellow");
  pbb.classList.remove("selectedpb");
  pbb.classList.add("pink");
  bmob.classList.remove("selectedbmo");
  bmob.classList.add("green");
  ib.classList.remove("selectedice");
  ib.classList.add("iceBlue");
  vb.classList.remove("selectedmarcy");
  vb.classList.add("red");
}
function resetBackgroundpage2() {
  fb2.classList.remove("selectedprismo");
  fb2.classList.add("prismo");
  jb1.classList.remove("selectedrain");
  jb1.classList.add("rain");
  bmob1.classList.remove("selectedfern");
  bmob1.classList.add("fern");
  pbb1.classList.remove("selectedpeppermint");
  pbb1.classList.add("peppermint");
  ib1.classList.remove("selectedlsp");
  ib1.classList.add("lsp");
  vb1.classList.add("lich");
  vb1.classList.remove("selectedlich");

  fb.classList.remove("selectedprismo");
  fb.classList.add("prismo");
  jb.classList.remove("selectedrain");
  jb.classList.add("rain");
  bmob.classList.remove("selectedfern");
  bmob.classList.add("fern");
  pbb.classList.add("peppermint");
  pbb.classList.remove("selectedpeppermint");
  ib.classList.remove("selectedlsp");
  ib.classList.add("lsp");
  vb.classList.remove("selectedlich");
  vb.classList.add("lich");
}
