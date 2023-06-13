let MSDhonioldinfo={
    imgurl:"https://th.bing.com/th/id/R.b4b850fcbacf9ff7675e97f67970afa4?rik=3cZHTBuMnz%2bZtQ&riu=http%3a%2f%2fdrop.ndtv.com%2falbums%2fuploadedpics%2fsmall1%2fdhoni3_636108399363344511.jpg&ehk=R3JC12GBwZONDY07Cl0XaEli%2b0UUL9RMykIrSZzRyyA%3d&risl=&pid=ImgRaw&r=0",
    name: "MSD",
    description:"Ticket collector"
} 


let displayobject={
    name:"",
    imageurl:"",
    description:""
};
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data=>{
        //displayobject.name=data.results[0].name.first + " " + data.results[0].name.last
        displayobject.name = "abcd"
       // displayobject.imageurl=data.results[0].picture.large
       // displayobject.description=data.results[0].gender
        document.getElementById("MSD-img").src=displayobject.imgurl;
        document.getElementById("MSD-name").innerHTML=displayobject.name;
        document.getElementById("MSD-desc").innerHTML=displayobject.description; 
    })

}