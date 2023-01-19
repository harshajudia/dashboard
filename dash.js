import { dashboard_data } from "./var.js";
 
const container=document.querySelector(".container");


function addCard(){
    for(let item of dashboard_data){
        const card=`<div class="card">
        <div class="content" style="width:30px;">
            <img src="${item.img}">
            <div class="info">
                <h3>${item.name}</h3>
                <p>${item.subject}<span>&nbsp&nbsp | &nbsp&nbsp</span>Grade ${item.grade.main}<span>+${item.grade.secondary}</span></p>

                ${item.details ? `<p><b style="color: #222222;">${item.details.units}</b>&nbspUnits&nbsp<b style="color:#222222;">${item.details.lessons}</b>&nbspLessons&nbsp<b style="color:#222222;">${item.details.topics}</b>&nbspTopics</p>` : ""}
                
                <select name="sorting" id="sorting">
                    ${item.classes.map( item => `<option value="name">${item}</option>`).join("")}
                    
                </select>
                ${item.studentInfo ? `<p>${item.studentInfo.students} Students ${item.studentInfo.date ? `<span>&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp</span>${item.studentInfo.date}` : ""}</p>` : ``}
                
            </div>
            <div class="favourite">
                <img src="icons/${item.isFavourite ? "" : "not "}favourite.svg">
            </div>
        </div>
        <div class="cardbtns">
            ${item.options.map(item => `<img src="${item.img}" alt= "${item.name}" class="${item.isAvailable ? "" : "icon_disable"}" >`)}
        </div>
    </div>`

    container.innerHTML+=card;
    }    
 }
 addCard();
 
