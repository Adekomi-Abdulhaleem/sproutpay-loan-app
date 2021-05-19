var refNo1 = document.getElementById('ref-no-1')
var refNo2 = document.getElementById('ref-no-2')
var submitBtn = document.getElementById('submit-btn')
var errMsg = document.getElementById('err-msg')


submitBtn.addEventListener('click', () => {
    if (refNo1.value === refNo2.value) {
        refNo1.classList.add('err-input')
        refNo2.classList.add('err-input')
        
        errMsg.textContent = 'The two reference numbers has to be different'
        errMsg.style.display = 'unset'
    }
    else {
        refNo1.classList.remove('err-input')
        refNo2.classList.remove('err-input')
    }
})