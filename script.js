let interviewList = [];
let rejectedList = [];

let totalCount = document.querySelector("#totalCount");
let interviewCount = document.querySelector("#interviewCount");
let rejectedCount = document.querySelector("#rejectedCount");
let availableJobQuantity = document.querySelector("#availableJobQuantity");

const jobInfoCards = document.querySelector("#jobInfoCards");
const totalJobs = jobInfoCards.children.length;
const interviewRejectedBtns = document.getElementsByClassName("jobResult");

function calculateJobCount() {
  totalCount.innerText = totalJobs;
  availableJobQuantity.innerText = totalJobs;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateJobCount();

function toggleStyle(id) {
  // Get all tab btns
  const allBtn = document.querySelector("#tab-btn-all");
  const interviewBtn = document.querySelector("#tab-btn-interview");
  const rejectedBtn = document.querySelector("#tab-btn-rejected");
  const selectedBtn = document.getElementById(id);

  // removing class from all
  allBtn.classList.remove("btn-primary");
  interviewBtn.classList.remove("btn-primary");
  rejectedBtn.classList.remove("btn-primary");

  // adding class to selected btn
  selectedBtn.classList.add("btn-primary");
}

for (const interviewRejectedBtn of interviewRejectedBtns) {
  interviewRejectedBtn.addEventListener("click", function (event) {
    // Geting the parent of clicked btn
    const parent = event.target.parentNode;

    // storing datas of parent
    const industryName = parent.querySelector(".industryName");
    const wantingFor = parent.querySelector(".wantingFor");
    const jobDetails = parent.querySelector(".jobDetails");
    const jobStatus = parent.querySelector(".jobStatus");
    const jobDescription = parent.querySelector(".jobDescription");

    // Creating object using parent element's infos
    const jobInfo = {
      industryName,
      wantingFor,
      jobDetails,
      jobStatus,
      jobDescription,
    };

    // find interviewList contains the object or not
    const isExist = interviewList.find(
      (element) => jobInfo.industryName === element.industryName,
    );

    // if not exist 
    if (!isExist) {
      // push the object to the interviewList array
      interviewList.push(jobInfo);

      if (event.target.innerText === "INTERVIEW") {
        // loop through the every single element(object) of the interviewList array
        for (const interview of interviewList) {
          const newDiv = document.createElement("div");
          newDiv.className =
            "p-6 bg-base-100 rounded-lg border-l-6 border-l-green-500";
          newDiv.innerHTML = `
              <div class="flex justify-between">
                    <div class="">
                       <h1 class="industryName font-extrabold text-lg text-[#002C5C]">${jobInfo.industryName.innerText}</h1>
                       <p class="wantingFor text-[#323B49] text-base">${jobInfo.wantingFor.innerText}</p>
                    </div>
                    <button id="deleteBtn" class="btn btn-circle">
                       <img src="./delete.png" alt="">
                    </button>
              </div>
  
              <p class="jobDetails my-5">${jobInfo.jobDetails.innerText}</p>
  
              <div class="jobStatus badge border-success bg-[#EEF4FF] text-[#002C5C] px-3 py-2 h-auto">Interview</div>
  
              <p class="jobDescription text-[#323B49] mt-2 mb-5">${jobInfo.jobDescription.innerText}</p>
              
              <button class="btn btn-outline btn-success jobResult">INTERVIEW</button>
              <button class="btn btn-outline btn-error jobResult">REJECTED</button>
           `;

          const parent = document.getElementById("interviewCards");

          parent.append(newDiv);
        }
      }
    }
  });
}
