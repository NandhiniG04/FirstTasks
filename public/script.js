document.getElementById('generate-btn').addEventListener('click', generateFunFact);

function generateFunFact() {
    const dob = document.getElementById('dob').value;
    const color = document.getElementById('color').value;

    if (!dob) {
        alert("Please enter your date of birth");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    fetch(`/funfact?age=${age}&color=${color}`)
        .then(res => {
            if(!res.ok) throw new Error('Network response was not ok');
            return res.json()
        })
        .then(data => {
            document.getElementById('funfact-box').textContent = data.fact;
        })
        .catch(err => {
            console.error("Fetch error:", err);
            document.getElementById('funfact-box').textContent = "Something went wrong!";
        });
}
