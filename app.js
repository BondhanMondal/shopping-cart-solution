//handle case plus event
document.getElementById('case-plus').addEventListener('click', function(){
    const csaeInput = document.getElementById('case-number');
    const caseNumber = csaeInput.value;
    csaeInput.value = parseInt(caseNumber) + 1;
})