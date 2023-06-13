let MSDhonioldinfo={
    imgurl:"https://th.bing.com/th/id/R.b4b850fcbacf9ff7675e97f67970afa4?rik=3cZHTBuMnz%2bZtQ&riu=http%3a%2f%2fdrop.ndtv.com%2falbums%2fuploadedpics%2fsmall1%2fdhoni3_636108399363344511.jpg&ehk=R3JC12GBwZONDY07Cl0XaEli%2b0UUL9RMykIrSZzRyyA%3d&risl=&pid=ImgRaw&r=0",
    name: "MSD",
    description:"Ticket collector"
} 

let MSDyounginfo={
    imgurl:"https://3.bp.blogspot.com/-6qxNEvIte4g/V-vyZaGjhKI/AAAAAAAALSM/vhkYKRK2-zMqsWEm_Cfbxv_bHJ9WNS3XACLcB/w1200-h630-p-k-no-nu/msd%2Bms%2Bdhoni%2Bmovie%2Bin%2Btelugu%2Badvance%2Bprebook%2Btickets%2Btheaters%2Blist%2Bshow%2Btimings.jpg",
    name: "Mahendra Singh Dhoni",
    description:"Captian of Indian Team"
}

let isMSDold=true;
let displayobject;
let flipdata = function(){
    if (isMSDold==true){
        displayobject=MSDyounginfo;
        isMSDold=false;
    }
    else{
        displayobject=MSDhonioldinfo;
        isMSDold=true;
    }
    document.getElementById("MSD-img").src=displayobject.imgurl;
    document.getElementById("MSD-name").innerHTML=displayobject.name;
    document.getElementById("MSD-desc").innerHTML=displayobject.description;
}