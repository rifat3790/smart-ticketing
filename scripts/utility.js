function removeElementClass(elementId, className){
    document.getElementById(elementId).classList.remove(className);
}

function addElementClass(elementId, className){
    document.getElementById(elementId).classList.add(className);
}

function getElementByIdIntegerValue(elementId){
    return parseInt(document.getElementById(elementId).textContent);
}

function getElementByIdText(elementId){
    return document.getElementById(elementId);
}

function getElementByIdValue(elementId){
    return document.getElementById(elementId).value;
}

function setElementByIdIntegerValue(elementId, value){
    document.getElementById(elementId).textContent = value;
}