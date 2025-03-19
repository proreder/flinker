document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
  e.preventDefault();
  const timestamp = Date.now();
  const chatTxt = document.getElementById("message");
  const message = chatTxt.value;
  chatTxt.value = "";
  db.ref("messages/" + timestamp).set({
    usr: username,
    msg: message,
  });
}
const fetchChat = db. ref ( "mensajes/" ); 
fetchChat. on ( "niño_agregado" , function ( instantánea ) { 
  const mensajes = instantánea. val (); 
  const msg = "<li>" + mensajes. usr + " : " + mensajes. msg + "</li>" ; 
  document . getElementById ( "messaje" ). innerHTML += msg; 
});