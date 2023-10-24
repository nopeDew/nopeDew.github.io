addEventListener("animationend", (event) => {
  if (event.animationName == "moveright") {
    document.body.style.backgroundImage = "url('https://giffiles.alphacoders.com/113/113020.gif')";
    document.body.getElementsByClassName("object1")[0].style.backgroundImage = "url('https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1')";
    document.body.getElementsByClassName("object2")[0].style.backgroundImage = "url('https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1')";
  }
});
