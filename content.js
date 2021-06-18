
function add_button_in_header()
{
    header = document.getElementsByClassName("header-wrapper")[1]
    header.innerHTML += `
    <select name="Acount" id="Select">
        <option value=null>Choose a account</option>
        <option value="Regular">Regular</option>
        <option value="Aers">Aers</option>
    </select>`
}

function create_url(value)
{
    let link = window.location.toString();
    const tab = link.split("/");
    let url = localStorage[`${value}`];
    for (let i = 3; tab[i] != null; i++) {
        if (tab[i][0] != 'a' && tab[i][1] != 'u' && tab[i][2] != 't' && tab[i][3] != 'h') {
            url += "/"
            url += tab[i]
        }
    }   
    console.log(url)
    return (url);
    
}


add_button_in_header();

document.getElementById("Select").onchange = function change_account() {
    let value = this.value;
    if (value == "null")
        return;
    if (localStorage[`${value}`] == null) {
        var autolog = prompt(`Enter your ${value} autolog`, "https://intra.epitech.eu")
        if (autolog != null)
            localStorage[`${value}`] = autolog;
    } else {
        let url = create_url(value);
        window.location.href = url;
    }
    return;
}