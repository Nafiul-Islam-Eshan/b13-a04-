let currentTab = "all";
const allContainer = document.getElementById("jobInfoCards")
const interviewContainer = document.getElementById("interviewCards")
const rejectedContainer = document.getElementById("rejectedCards")
const noJobCard = document.getElementById("noJobCard")

const allCount = document.querySelector("#totalCount");
const interviewCount = document.querySelector("#interviewCount");
const rejectedCount = document.querySelector("#rejectedCount");
const availableJobCount = document.querySelector("#availableJobQuantity");

// ====================================== Tab btn functionality ===========================================
function tabSwitchingStyle (tab){
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;
    
    
    for (const t of tabs) {
        const selectedTab = document.getElementById("tab-btn-"+t);

        if (t === tab){
            selectedTab.classList.add("btn-primary")
        }
        else{
            selectedTab.classList.remove("btn-primary")
        }
    }

    if (tab === "all") {
        if (allContainer.children.length < 1) {
            allContainer.classList.add("hidden")
            interviewContainer.classList.add("hidden")
            rejectedContainer.classList.add("hidden")
            noJobCard.classList.remove("hidden")
        }
        else{
            allContainer.classList.remove("hidden")
            interviewContainer.classList.add("hidden")
            rejectedContainer.classList.add("hidden")
            noJobCard.classList.add("hidden")
        }
    }
    else if (tab === "interview") {

        if (interviewContainer.children.length < 1) {
            allContainer.classList.add("hidden")
            interviewContainer.classList.add("hidden")
            rejectedContainer.classList.add("hidden")
            noJobCard.classList.remove("hidden")
        }
        else{
            allContainer.classList.add("hidden")
            interviewContainer.classList.remove("hidden")
            rejectedContainer.classList.add("hidden")
            noJobCard.classList.add("hidden")
        }
    }
    else if (tab === "rejected") {
        if (rejectedContainer.children.length < 1) {
            allContainer.classList.add("hidden")
            interviewContainer.classList.add("hidden")
            rejectedContainer.classList.add("hidden")
            noJobCard.classList.remove("hidden")
        }
        else{
            allContainer.classList.add("hidden")
            interviewContainer.classList.add("hidden")
            rejectedContainer.classList.remove("hidden")
            noJobCard.classList.add("hidden")
        }
    }
    jobCountCalculate();
}

// ====================================== Job Count calculation =============================================
function jobCountCalculate(){

    const count = {
        all : allContainer.children.length,
        interview : interviewContainer.children.length,
        rejected : rejectedContainer.children.length,
    };

    allCount.innerText = count.all;
    interviewCount.innerText = count.interview;
    rejectedCount.innerText = count.rejected;
    
    if (currentTab ==="all") available = count.all;
    else if (currentTab === "interview") available = count.interview;
    else if (currentTab === "rejected") available = count.rejected;

    availableJobCount.innerText = available;

    if (count[currentTab] < 1){
        noJobCard.classList.remove("hidden");
    }
    else {
        noJobCard.classList.add("hidden")
    }
}
jobCountCalculate();


document.querySelector("#mainContainer").addEventListener("click", (event) => {
    const targetElement = event.target;            // capturing clicked element
    const cards = targetElement.closest(".Card");   // capturing clicked job card
    if (!cards) return; // ignores clicking outside of cards

    const jobStatus = cards.querySelector(".jobStatus");

    if (targetElement.classList.contains("interview")) {
      if (jobStatus) {
        jobStatus.innerText = "INTERVIEW";
        jobStatus.className = "jobStatus badge badge-success border-none px-3 py-2 h-auto";
      }
      interviewContainer.appendChild(cards);
      jobCountCalculate();
    }
    if (targetElement.classList.contains("rejected")){
        if (jobStatus) {
            jobStatus.innerText = "REJECTED";
            jobStatus.className = "jobStatus badge badge-error border-none px-3 py-2 h-auto";
        }

        rejectedContainer.appendChild(cards);
        jobCountCalculate();
    }
    if (targetElement.classList.contains("deleteBtns")){
        cards.remove();
        jobCountCalculate();
    }
});

