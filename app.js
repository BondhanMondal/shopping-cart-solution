function updateCaseNumber(isIncreasing){
    const csaeInput = document.getElementById('case-number');
    let caseNumber = csaeInput.value;
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
    csaeInput.value = caseNumber;
    //update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}

//handle case plus event
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
});
//handle case minus event
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
});