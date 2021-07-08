
function add_button_in_header()
{
    header = document.getElementsByClassName("menu")[0]
    if (localStorage["account"] == null && header != null) {
        header.innerHTML += `
        <select name="Acount" id="Select">
            <option value=null selected disabled>Choose an account</option>
            <option value="Regular">Student</option>
            <option value="Aers">AER</option>
        </select>`
    } else if (localStorage["account"] == "Regular") {
        header.innerHTML += `
        <select name="Acount" id="Select">
            <option value=null>Choose an account</option>
            <option value="Regular" selected disabled>Student</option>
            <option value="Aers">AER</option>
        </select>`
    } else if (localStorage["account"] == "Aers") {
        header.innerHTML += `
        <select name="Acount" id="Select">
            <option value=null>Choose an account</option>
            <option value="Regular">Student</option>
            <option value="Aers" selected disabled>AER</option>
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
        let key = tab[i].substr(0, 4);
        if (key != "auth") {
            url += "/"
            url += tab[i]
        }
    }
    return (url);
    
}

function create_url_without_autolog()
{
    let link = window.location.toString();
    const tab = link.split("/");
    let url = "https://intra.epitech.eu";
    let key = tab[3].substring(0, 4);
    if (key != "auth")
        return;
    for (let i = 3; tab[i] != null; i++) {
        key = tab[i].substring(0, 4);
        if (key != "auth") {
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