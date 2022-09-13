const featuresClick = document.querySelector(".fe-toggle");
const companyClick = document.querySelector(".co-toggle");
const featuresDropdown = document.querySelector(".fe-menu");
const companyDropdown = document.querySelector(".co-menu");
const toggleList =document.querySelector(".toggle-list");
const toggleBtn = document.querySelector(".toggle-btn");

function init() {
    
    featuresClick.addEventListener("click", () => {
        if(featuresClick.classList.contains("close")) {
            featuresClick.classList.remove("close");
            featuresClick.classList.add("open");
            featuresDropdown.style.display = "block";
        } else if (featuresClick.classList.contains("open")) {
            featuresClick.classList.remove("open");
            featuresClick.classList.add("close");
            featuresDropdown.style.display = "none";
        }
    });

    companyClick.addEventListener("click", () => {
        if(companyClick.classList.contains("close")) {
            companyClick.classList.remove("close");
            companyClick.classList.add("open");
            companyDropdown.style.display = "block";

        } else if (companyClick.classList.contains("open")) {
            companyClick.classList.remove("open");
            companyClick.classList.add("close");
            companyDropdown.style.display = "none";
        }
    });

    // Responsive
    toggleBtn.addEventListener("click", () => {
        if(toggleBtn.classList.contains("toggle-close")) {
            toggleBtn.classList.remove("toggle-close");
            toggleBtn.classList.add("toggle-open");
            toggleList.style.transform = "translateX(0)";
        } else if(toggleBtn.classList.contains("toggle-open")) {
            toggleBtn.classList.remove("toggle-open");
            toggleBtn.classList.add("toggle-close");
            toggleList.style.transform = "translateX(105%)";
        }
        
    })
}

