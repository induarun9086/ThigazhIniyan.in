function onClickEle(id, name) {
  const s = document.getElementById("audio" + id);
  const res = s.play();
  
  if (res !== undefined) {
    res.then(function() {
      // Automatic playback started!
    }).catch(function(error) {
      console.log("For " + name + " no audio available");
    });
  }
}

function initApp() {
  const c = document.getElementById("content");
  const t = document.createElement("table");
  var eanum = 1;
  
  for(let i = 0; i < ptable.length; i++) {
    
    const tr = t.insertRow();
    
    for(let j = 0; j < ptable[i].length; j++) {
      const td = tr.insertCell();
      if(ptable[i][j].type != 0) {
        const eid = document.createElement("div");
        const ename = document.createElement("div");
        const eaud = document.createElement("audio");
        
        eanum += ((ptable[i][j].eanumoff !== undefined) ? (ptable[i][j].eanumoff) : (0));
        eaud.id = "audio" + eanum;
        eaud.src = "https://storage.googleapis.com/thigazh-167608.appspot.com/ptable/audio/eleaud" + eanum + ".mp3";
        
        eid.classList.add("eid");
        eid.appendChild(document.createTextNode(eanum++));
        
        ename.classList.add("ename");
        ename.appendChild(document.createTextNode(ptable[i][j].name));
      
        td.classList.add("activetd");
        td.setAttribute("onclick", "onClickEle(" + parseInt(eanum - 1) + ", '" + ptable[i][j].name + "');");
        td.appendChild(eid);
        td.appendChild(document.createTextNode(ptable[i][j].symbol));
        td.appendChild(eaud);
        td.appendChild(ename);
      } else {
        td.style.border = "0px";
        td.style.color = "black";
        td.appendChild(document.createTextNode("-"));
      }
    }      
  }
  
  c.appendChild(t);
}