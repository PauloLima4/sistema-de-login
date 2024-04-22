const button = document.getElementById('enter-button')

button.addEventListener('click', function(){
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if (email.value == 'admin@admin.com', password.value == 1234){
        alert('Login successful')
    } else {
        alert('Login failed')
    }
})