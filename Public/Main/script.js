//
const windowheight = window.innerHeight;
//
const AccountBtn = document.getElementById("AccountBtn");
const AccountLBtnL = document.getElementById("AccountLBtnL");
//
const navMenuListBtn = document.getElementById("navMenuListBtn");
const DropDownMenu = document.getElementById("DropDownMenuList");
//
const BarsToggleOnIcon = document.getElementById("BarsToggleOnIcon");
const BarsToggleOffIcon = document.getElementById("BarsToggleOffIcon");
//
const ImgLogo = document.getElementById("ImgLogo");
const AccountLBtnDiv = document.getElementById("AccountLBtnDiv");
const navMenuListDropDownBtnPackDiv = document.getElementById("navMenuListDropDownBtnPackDiv");
const navMenuListSettingsDiv = document.getElementById("navMenuListSettingsDiv");
const DropDownMenuAction = document.getElementById("DropDownMenu");
//
const PersonalCareDiv = document.getElementById("PersonalCareDiv");
const fashionsDiv = document.getElementById("fashionsDiv");
const ToysDiv = document.getElementById("ToysDiv");
//
const fashionBtn = document.getElementById("fashionBtn");
const PersonalCareBtn = document.getElementById("PersonalCareBtn");
const ToysBtn = document.getElementById("ToysBtn");
//
const ArrowDownIcon = document.getElementById("ArrowDownIcon");
const ArrowLeftIcon = document.getElementById("ArrowLeftIcon");
const ArrowLeftPLIcon = document.getElementById("ArrowLeftPLIcon");
const ArrowDownPRIcon = document.getElementById("ArrowDownPRIcon");
const ArrowDownTLIcon = document.getElementById("ArrowDownTLIcon");
const ArrowDownTRIcon = document.getElementById("ArrowDownTRIcon");
//
function OpenAccountPage(){
    window.location.href = "/Main/Public/Accounts/index.html"
}
function ToggleDropDownMenuOn(){
    DropDownMenu.classList.remove("DropDownMenuAniOff");
    DropDownMenu.classList.add("DropDownMenuAniOn");
    DropDownMenu.style.visibility = "visible";
    ImgLogo.style.display = "none";
    BarsToggleOffIcon.style.display = "unset";
    BarsToggleOnIcon.style.display = "none";
    setTimeout(()=>{
        DropDownMenuAction.style.display = "block";
        AccountLBtnDiv.style.display = "block";
        navMenuListDropDownBtnPackDiv.style.display = "block";
        navMenuListSettingsDiv.style.display = "block"
    }, 250);
};
function ToggleDropDownMenuOff(){
    DropDownMenu.classList.remove("DropDownMenuAniOn");
    DropDownMenu.classList.add("DropDownMenuAniOff");
    DropDownMenu.style.visibility = "hidden";
    ImgLogo.style.display = "unset";
    BarsToggleOffIcon.style.display = "none";
    BarsToggleOnIcon.style.display = "unset";
    DropDownMenuAction.style.display = "none";
    AccountLBtnDiv.style.display = "none";
    navMenuListDropDownBtnPackDiv.style.display = "none";
    navMenuListSettingsDiv.style.display = "none";
}
//
function TogglefashionDiv(){
    if(fashionsDiv.style.display ==="none" || fashionsDiv.style.display ===""){
        fashionsDiv.style.display = "block";
        ArrowLeftIcon.style.display = "none";
        ArrowDownIcon.style.display ="unset";

    }else{
        fashionsDiv.style.display = "none";
        ArrowLeftIcon.style.display = "unset";
        ArrowDownIcon.style.display ="none";
    };
};
function togglePersonalCare(){
    if(PersonalCareDiv.style.display ==="none" || PersonalCareDiv.style.display ===""){
        PersonalCareDiv.style.display = "block";
        ArrowLeftPLIcon.style.display = "none";
        ArrowDownPRIcon.style.display ="unset";
    }else{
        PersonalCareDiv.style.display = "none";
        ArrowLeftPLIcon.style.display = "unset";
        ArrowDownPRIcon.style.display ="none";
    };
};
function ToggleToysDiv(){
    if (ToysDiv.style.display === "none" || ToysDiv.style.display === "") {
        ToysDiv.style.display = "block";
        ArrowDownTLIcon.style.display = "none";
        ArrowDownTRIcon.style.display = "unset";
    }else{
        ToysDiv.style.display = "none";
        ArrowDownTRIcon.style.display = "none";
        ArrowDownTLIcon.style.display = "unset";
    };
};

//
PersonalCareBtn.addEventListener("click", togglePersonalCare);
ToysBtn.addEventListener("click", ToggleToysDiv);
fashionBtn.addEventListener("click", TogglefashionDiv);
BarsToggleOnIcon.addEventListener("click", ToggleDropDownMenuOn);
BarsToggleOffIcon.addEventListener("click", ToggleDropDownMenuOff);
AccountBtn.addEventListener("click", OpenAccountPage);
AccountLBtnL.addEventListener("click", OpenAccountPage);