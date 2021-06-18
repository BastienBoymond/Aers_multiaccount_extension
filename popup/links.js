document.getElementById("Regular button").addEventListener("click", myRegular);
    function myRegular() {
        if (localStorage["Regular"] == null) {
            var autolog = prompt("Enter your Regular autolog", "https://intra.epitech.eu")
            if (autolog != null)
                localStorage["Regular"] = autolog;
        } else {
            window.open(localStorage["Regular"]);
        }
    }

document.getElementById("Aers button").addEventListener("click", myAers);
    function myAers() {
        if (localStorage["Aers"] == null) {
            var autolog = prompt("Enter your Aers autolog", "https://intra.epitech.eu")
            if (autolog != null)
                localStorage["Aers"] = autolog;
        }else {
            window.open(localStorage["Aers"]);
        }
    }

document.getElementById("Delete Aers").addEventListener("click", Delete_aers);
    function Delete_aers() {
        if (localStorage["Aers"] != null)
            localStorage.removeItem("Aers");
        else
            alert("You don't have Aers autolog");
    }


document.getElementById("Delete Regular").addEventListener("click", Delete_Regular);
    function Delete_Regular() {
        if (localStorage["Regular"] != null)
            localStorage.removeItem("Regular");
        else
            alert("You don't have Regular autolog");
    }