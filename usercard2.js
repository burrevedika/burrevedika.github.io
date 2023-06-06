let mhdoldinfo={
    imgurl:"https://img.mensxp.com/media/content/2020/Jul/Bollywood-Movies-Actors-Shot-With-Severe-Injuries600_5f0ed23b6f0e8_250x375.jpeg",
    name:"Mahendra singh Dhoni",
    Description:"Ticket collector"
}
let mhdyounginfo{
    imgurl:"https://media.gqindia.com/wp-content/uploads/2018/05/26-866x956.jpg",
    name:"Dhoni",
    description:"Cricketer"

}

let ismhdoldinf=true;
let displayobject;
let flipdata=function(){
    if (ismhdoldinf==true){
        displayobject=mhdyounginfo;
        ismhdoldinf=false;
    }
    else{
        displayobject=mhdoldinfo;
        ismhdoldinf=true;
    }
    document.getElementById("dhoni-img").src=displayobject.imgurl;
    document.getElementById("dhoniimg").innerHTML=displayobject.name;
    document.getElementById("desc").innerHTML=displayobject.Description;
    
    

}