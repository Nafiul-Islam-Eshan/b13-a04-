
let interviewList = [];
let rejectedList = [];


let totalCount = document.querySelector("#totalCount");
let interviewCount = document.querySelector("#interviewCount");
let rejectedCount = document.querySelector("#rejectedCount");
let availableJobQuantity = document.querySelector("#availableJobQuantity");

const jobInfoCards = document.querySelector("#jobInfoCards");
const totalJobs = jobInfoCards.children.length;
const interviewRejectedBtns =document.getElementsByClassName("jobResult")

function calculateJobCount () {
    totalCount.innerText = totalJobs;
    availableJobQuantity.innerText = totalJobs;
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}

 calculateJobCount ();


 function toggleStyle(id) {
    // Get all tab btns
    const allBtn = document.querySelector("#tab-btn-all");
    const interviewBtn = document.querySelector("#tab-btn-interview");
    const rejectedBtn = document.querySelector("#tab-btn-rejected");
    const selectedBtn = document.getElementById(id)
    
    // removing class from all
    allBtn.classList.remove("btn-primary")
    interviewBtn.classList.remove("btn-primary")
    rejectedBtn.classList.remove("btn-primary")

    // adding class to selected btn
    selectedBtn.classList.add("btn-primary")

 }



 for (const interviewRejectedBtn of interviewRejectedBtns) {
    interviewRejectedBtn.addEventListener("click", function(event){
    console.log(event.target.parentNode);
    });
 }