async function signup(e) {
    e.preventDefault();
    console.log(e.target.name);
    const form = new FormData(e.target);

    const formDetails = {
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password")

    }
    try {
        const res = await axios.post('http://localhost:3000/user/signup', formDetails)
        if(res){
                if(res.status === 201){
                    window.location.href = "../Login/login.html" 
                } else {
                    throw new Error('Failed to login')
                }
        }
    } catch (err) {
        document.body.innerHTML += `<p> Something Went Wrong</p>`;
        console.log(err)
    }
}