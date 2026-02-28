
let interviewList = [];
let rejectedList = [];


let totalCount = document.querySelector("#totalCount");
let interviewCount = document.querySelector("#interviewCount");
let rejectedCount = document.querySelector("#rejectedCount");
let availableJobQuantity = document.querySelector("#availableJobQuantity");

const jobInfoCards = document.querySelector("#jobInfoCards");
const totalJobs = jobInfoCards.children.length;

function calculateJobCount () {
    totalCount.innerText = totalJobs;
    availableJobQuantity.innerText = totalJobs;
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}

 calculateJobCount ();


 function toggleStyle() {
    
 }