
function add_button_in_header()
{
    header = document.getElementsByClassName("menu")[0]
    if (localStorage["account"] == null) {
        header.innerHTML += `
        <select name="Acount" id="Select">
            <option value=null selected disabled>Choose a account</option>
            <option value="Regular">Regular</option>
            <option value="Aers">Aers</option>
        </select>`
    } else if (localStorage["account"] == "Regular") {
        header.innerHTML += `
        <select name="Acount" id="Select">
            <option value=null>Choose a account</option>
            <option value="Regular" selected disabled>Regular</option>
            <option value="Aers">Aers</option>
        </select>`
    } else if (localStorage["account"] == "Aers") {
        header.innerHTML += `
        <select name="Acount" id="Select">
            <option value=null>Choose a account</option>
            <option value="Regular">Regular</option>
            <option value="Aers" selected disabled>Aers</option>
        </select>`
    }
}

function create_url(value)
{
    let link = window.location.toString();
    const tab = link.split("/");
    let url = localStorage[`${value}`];
    localStorage["account"] = `${value}`
    for (let i = 3; tab[i] != null; i++) {
        if (tab[i][0] != 'a' && tab[i][1] != 'u' && tab[i][2] != 't' && tab[i][3] != 'h') {
            url += "/"
            url += tab[i]
        }
    }   
    console.log(url)
    return (url);
    
}

function create_url_without_autolog()
{
    let link = window.location.toString();
    const tab = link.split("/");
    let url = "https://intra.epitech.eu";

    if (tab[3][0] != 'a' && tab[3][1] != 'u' && tab[3][2] != 't' && tab[3][3] != 'h')
        return;
    for (let i = 2; tab[i] != null; i++) {
        if (tab[i][0] != 'a' && tab[i][1] != 'u' && tab[i][2] != 't' && tab[i][3] != 'h') {
            url += "/"
            url += tab[i]
        }
    }   
    window.location.href = url;
}

create_url_without_autolog();
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