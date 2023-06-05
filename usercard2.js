let mhdoldinfo={
    imgurl:"https://th.bing.com/th/id/OIP.N5gJ94vPwP29yVrJxqyK_gHaJ3?pid=ImgDet&rs=1",
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