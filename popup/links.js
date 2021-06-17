document.getElementById("Regular button").addEventListener("click", myRegular);
    function myRegular() {
        if (localStorage["Regular"] == null) {
            var autolog = prompt("Enter your Aers autolog", "https://intra.epitech.eu")
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