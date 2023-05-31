let products=[
        {
            id:1 ,
            title:"Glaxy S15",
            size:"12000",
            imageUrl:"pict/phone1.jpg"
            
        },
        {
            id:2 ,
            title:"redmi note10",
            size:"8000",
            imageUrl:"pict/phone2.jpg"
            
        },
        {
            id:3 ,
            title:"Poco N4",
            size:"6000",
            imageUrl:"pict/phone3.jpg"
            
        },
        {
            id:4 ,
            title:"Iphon S7",
            size:"28000",
            imageUrl:"pict/phone4.jpg"
            
        },{
            id:5 ,
            title:"Soni Vaio E15",
            size:"18000 ",
            imageUrl:"pict/lab1.jpg"
            
        },
        {
            id:6 ,
            title:"Lenovo Ipad3 Gaming",
            size:"25000 ",
            imageUrl:"pict/lab2.jpg"
            
        },
        {
            id:7 ,
            title:"Dell G15 5511",
            size:"31000",
            imageUrl:"pict/lab3.jpg"
            
        },
        {
            id:8 ,
            title:"Lenovo Yoga",
            size:"28000",
            imageUrl:"pict/lab4.jpg"
            
        },{
            id:9 ,
            title:"كونسلر فيت مى",
            size:"350 ",
            imageUrl:"pict/makeup1.jpg"
            
        },
        {
            id:10 ,
            title:"احمر الشفاة سائل",
            size:"550",
            imageUrl:"pict/makeup2.jpg"
            
        },
        {
            id:11,
            title:"ماسكرا كولسو",
            size:"390",
            imageUrl:"pict/makeup3.jpg"
            
        },
        {
            id:12 ,
            title:"بودرا",
            size:"1200",
            imageUrl:"pict/makeup4.jpg"
            
        },{
            id:13 ,
            title:"LancerShark2022",
            size:"350000",
            imageUrl:"pict/car1.jpg"
            
        },
        {
            id:14 ,
            title:"Kia Sportage 2022",
            size:"640000 ",
            imageUrl:"pict/car2.jpg"
            
        },
        {
            id:15 ,
            title:"Hyundai Tucson2022",
            size:"990000",
            imageUrl:"pict/car3.jpg"
            
        },
        {
            id:16 ,
            title:"Nissan Juke2022",
            size:"480000",
            imageUrl:"pict/car4.jpg"
            
        }

];
let productId=localStorage.getItem("productId")
let producrDetails=products.find((item)=>item.id==productId)
let detailDom=document.querySelector(".item-details")

detailDom.innerHTML =`

                <img src="${producrDetails.imageUrl}" alt="phone-image"/>
                <h2 style="color: whitesmoke;" >${producrDetails.title}</h2>
                <span style="color: whitesmoke;" >${producrDetails.size}</span>
                <p style="color: whitesmoke;" > This mobile is good but u should know every product's advantage is equal to price 
                </p>

`