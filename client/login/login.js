async function login(e) {
    e.preventDefault();
    console.log(e.target.name);
    const form = new FormData(e.target);

    const formDetails = {
        email: form.get("email"),
        password: form.get("password")

    }
    console.log(formDetails)
    try {
        const res = await axios.post('http://localhost:3000/user/login', formDetails)

        if(res){
            if(res.status === 200){
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userDetails', JSON.stringify(res.data.user))
                window.location.href = "../index.html" 
            } else {
                throw new Error('Failed to login')
            }
        }
    } catch (err) {
        document.body.innerHTML += `<p style="color:red;"> Something went wrong </p>`;
        console.log(err)
    }



}