document.addEventListener('DOMContentLoaded',() => {
    const form = document.getElementById('register');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const phone = document.getElementById('phone');

        const obj = {
            name : name.value,
            email : email.value,
            password : password.value,
            phone : phone.value
        }

        name.value = '';
        email.value = '';
        password.value = '';
        phone.value = '';

        axios.post('http://localhost:3000/user/signup',obj)
        .then(res => {
            console.log(res)
            alert(res.data.message);
            window.location.href = './login.html'
        })
        .catch(err => {
            // console.log(err.res.data.message)
            console.log(err)
        })
    })

})