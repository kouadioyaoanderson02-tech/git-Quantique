document.getElementById(form).addEventListener("submit", function(e){
    e.preventDefault();


    fetch("http://localhost:8080/api/etudiants",{
        method: "POST" ,
        headers: {
            "content-type": "application/json",

        },
        body: JSON.stringify({
            nom: nom.value,
            prenom: prenom.value,
            age: age.value,
            classe: classe.value
        })
    })
})