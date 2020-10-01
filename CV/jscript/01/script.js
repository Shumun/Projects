var favorite = prompt("What is your favorit Web? FACEBOOK/INSTAGRAM/YOUTUBE");

// window.location.replace("http://www." + favorite + ".com");

if(favorite == 'facebook' || favorite == 'Instagram' || favorite == 'youtube')
{
 window.location.replace("http://www." + favorite + ".com");
}

else{
    prompt("Bad Reque");
}