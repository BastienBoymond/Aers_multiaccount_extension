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

function delete_value(value)
{
    chrome.storage.sync.remove(value);
}

document.getElementById("Regular button").addEventListener("click", myRegular);
    async function myRegular() {
        if (await get_stored_value("Regular") == null) {
            var autolog = prompt("Enter your Student autolog", "https://intra.epitech.eu")
            if (autolog != null)
                store_value("Regular", autolog);
        } else {
            store_value("account", "Regular");
            window.open(await get_stored_value("Regular"));
        }
    }

document.getElementById("Aers button").addEventListener("click", myAers);
    async function myAers() {
        if (await get_stored_value("Aers") == null) {
            var autolog = prompt("Enter your Aer autolog", "https://intra.epitech.eu")
            if (autolog != null)
                store_value("Aers", autolog);
        } else {
            store_value("account", "Aers");
            window.open(await get_stored_value("Aers"));
        }
    }

document.getElementById("Delete Aers").addEventListener("click", Delete_aers);
    async function Delete_aers() {
        if (await get_stored_value("Aers") != null) {
            store_value("account", "null");
            delete_value("Aers");
        } else {
            alert("You don't have Aers autolog");
        }
    }


document.getElementById("Delete Regular").addEventListener("click", Delete_Regular);
    async function Delete_Regular() {
        if (await get_stored_value("Regular") != null) {
            store_value("account", "null");
            delete_value("Regular");
        } else {
            alert("You don't have Regular autolog");
        }
    }

document.getElementById("github").addEventListener("click", github);
    async function github() {
        window.open("https://github.com/BastienBoymond/Aers_multiaccount_extension");
    }