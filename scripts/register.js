var password = document.getElementById('password')
var confirmPassword = document.getElementById('confirm-password')
var submitBtn = document.getElementById('submit-btn')
var errMsg = document.getElementById('err-msg')


submitBtn.addEventListener('click', () => {
    if (password.value !== confirmPassword.value) {
        password.classList.add('err-input')
        confirmPassword.classList.add('err-input')
        
        errMsg.textContent = 'Password does not match'
        errMsg.style.display = 'unset'
    }
    else {
        password.classList.remove('err-input')
        confirmPassword.classList.remove('err-input')
    }
})