
async function requestGet(url){
    let data;
    try {
        const res = await fetch(url, {
            method: 'GET',
            credentials: 'include',
        });
        return (res.json());
    } catch (e) {
        return (res.json());
    }
};

async function knowAccount(account) {
    if (account == "null") {
        return (account);
    } else if (account == "Regular") {
        url = await get_stored_value(account);
        data = await requestGet(`https://intra.epitech.eu/admin/autolog?format=json`);
        if (data.autologin === url) {
            return (account)
        } else {
            return ('Aers')
        }
    } else if (account == "Aers") {
        url = await get_stored_value(account);
        data = await requestGet(`https://intra.epitech.eu/admin/autolog?format=json`);
        if (data.autologin === url) {
            return (account)
        } else {
            return ('Regular')
        }
    }
    return (account);
}

async function add_button_in_header()
{
    header = document.getElementsByClassName("menu")[0]
    let account = (await get_stored_value("account")) || "null";
    account = await knowAccount(account);
    console.log(account);
    if (account == "null" && header != "null") {
        header.innerHTML += `
        <select name="Acount" id="Select">
            <option value=null selected disabled>Choose an account</option>
            <option value="Regular">Student</option>
            <option value="Aers">AER</option>
        </select>`
    } else if (account == "Regular") {
        header.innerHTML += `
        <select name="Acount" id="Select">
            <option value=null>Choose an account</option>
            <option value="Regular" selected disabled>Student</option>
            <option value="Aers">AER</option>
        </select>`
    } else if (account == "Aers") {
        header.innerHTML += `
        <select name="Acount" id="Select">
        <option value=null>Choose an account</option>
        <option value="Regular">Student</option>
        <option value="Aers" selected disabled>AER</option>
        </select>`
    }
    document.getElementById("Select").onchange = async function change_account() {
        let value = this.value;
        let login = await get_stored_value(value);
        if (value == "null")
            return;
        if (login == null) {
            var autolog = prompt(`Enter your ${value} autolog`, "https://intra.epitech.eu")
            if (autolog != null)
                store_value(value, autolog)
        } else {
            let url = await create_url(value);
            window.location.href = url;
        }
        return;
    }
}

function get_stored_value(key) {
    return new Promise((resolve) => {
        chrome.storage.sync.get(key, function(autolog) {
            resolve(autolog[key]);
        });
    });
}

function store_value(value, autolog)
{
    chrome.storage.sync.set({
        [value]: autolog,
    })
}

async function create_url(value)
{
    let link = window.location.toString();
    const tab = link.split("/");
    let url = await get_stored_value(value);
    store_value("account", value)
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
