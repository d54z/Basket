
let count1 = 0
let count2 = 0

function increamntHome1(){
    count1 +=1
    document.getElementById("FirstScore").innerText = count1
}
function increamntHome2(){
    count1 +=2
    document.getElementById("FirstScore").textContent = count1
}
function increamntHome3(){
    count1 +=3
    document.getElementById("FirstScore").textContent = count1
}
function increamntGuest1(){
    count2 +=1
    document.getElementById("SecondScore").textContent = count2
}
function increamntGuest2(){
    count2 +=2
    document.getElementById("SecondScore").textContent = count2
}
function increamntGuest3(){
    count2 +=3
    document.getElementById("SecondScore").textContent = count2
}
function Reset(){
    count1 = 0
    count2 = 0
    document.getElementById("FirstScore").innerText = count1
    document.getElementById("SecondScore").textContent = count2
}