
function setUserName() {
    let myName = prompt("������������֡�");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Do you know pepoyo? " + myName;
    }
}