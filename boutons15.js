
function valider() {
  //console.log("valider 15");

  if (parent.og.gIgnoreClick && !parent.isDemo) {return;}
  var pc = parent.corpus;
  var pcd = pc.corData;
  var myFrames = window.frames;
  var id = "c" + (pc.iData - (gPhase - 1)*pc.nPhase1 + 1);
  var program = parent.ba.program;
  var activity = parent.ba.activity;
  //console.log("valider gNbMotsOk " + gNbMotsOk + " " + gNbErrors + " " + gNbMotsKo );
  ////console.log("valider nmots " + pcd[pc.iData].length.toString());
  //if (gNbMotsOk ==  pcd[parent.ranData(pc.iData)].length - 1 && gNbMotsKo == 0) {
  
  if (gNbMotsOk == pcd[parent.ranData(pc.iData)].length - 1) {
    if (gNbErrors == 0 && gNbRejoues < 2 && gNbMotsKo == 0) {
      parent.ba.document.getElementById(id).style.backgroundColor = "#00ff00";
      gNbPhrasesOk += 1;
    } else {
      gNbRate += 1;
      gNbPhrasesOk = 0;
      //if (gPhase == 1) {
      //  parent.ba.document.getElementById(id).style.backgroundColor = "#00ff00";
      //} else {
       parent.ba.document.getElementById(id).style.backgroundColor = "#ff0000";
      //}
    }
    
    gNbErrors = 0;
    gNbRejoues = 0;
    gNbMotsKo = 0;
    gIgnoreClick = true;
    setTimeout(auSuivant,200);  // à cause de safari...
  
  }
}

function rejouer() {
  //console.log("rejouer 25");
  var pc = parent.corpus;
  pc.jData = 0;
  //console.log("gNbMotsOk " + parent.og.gNbMotsOk.toString());
  gNbMotsOk = 0;
  gNbMotsKo = 0;
  gNbRejoues += 1;
  restoreStartState();
  if (gPhase == 2) {
    frames[7].registerClick2 ("#cc60ff");
    frames[8].registerClick2 ("#cc60ff");
    frames[9].registerClick2 ("#cc60ff");
    frames[10].registerClick2 ("#cc60ff");
  }
  diffusePhrase();
  

  //document.getElementById('Brecommencer').style.visibility='hidden';
}
