let isLoggedIn = true;
let userRole = "editor";
// app.vwo.com -> view , Editor or admin ->
// viewer -> Limited Access
// editor can edit and view
// admin can do all the things

if (isLoggedIn){
    if(userRole === "admin"){
          console.log("admin can do all the things");
    }else  if(userRole === "editor"){
         console.log("welcome editor - edit access granted");
  }else  if(userRole === "viewer"){
         console.log("welcome viewer - read only access");
  }else {
         console.log("no idea which role  you are!");
}
}
else{
    console.log("You are not logged in!");
}