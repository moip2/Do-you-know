
function setUserName() {
    let myName = prompt("ÇëÊäÈëÄãµÄÃû×Ö¡£");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Do you know pepoyo? " + myName;
    }
}