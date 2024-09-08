document.addEventListener("DOMContentLoaded", function() {
    const ajustesBtn = document.getElementById("ajustes-btn");
    const miniWindow = document.getElementById("mini-window");
    const fileInput = document.getElementById("file-input");
    const mainImage = document.getElementById("main-image");
    const saveBtn = document.getElementById("save-btn");
    const btnCollection = document.querySelector(".btn-collection");
    const mainInterface = document.getElementById("main-interface");
    const secondInterface = document.getElementById("second-interface");
    const topBarSecond = document.getElementById("top-bar-second");

    ajustesBtn.addEventListener("click", function(event) {
        event.stopPropagation();

        if (miniWindow.classList.contains("active")) {
            miniWindow.classList.add("out");
            setTimeout(() => {
                miniWindow.classList.remove("active");
                miniWindow.classList.remove("out");
            }, 500);
        } else {
            miniWindow.classList.add("active");
        }
    });

    document.addEventListener("click", function(event) {
        if (!miniWindow.contains(event.target) && !ajustesBtn.contains(event.target)) {
            if (miniWindow.classList.contains("active")) {
                miniWindow.classList.add("out");
                setTimeout(() => {
                    miniWindow.classList.remove("active");
                    miniWindow.classList.remove("out");
                }, 500);
            }
        }
    });

    fileInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        if (file && file.type === "image/png") {
            const reader = new FileReader();
            reader.onload = function(e) {
                mainImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            alert("Solo se permiten imágenes en formato PNG.");
        }
    });

    saveBtn.addEventListener("click", function() {
        miniWindow.classList.add("hidden");
    });

    btnCollection.addEventListener("click", function() {
        mainInterface.classList.add("zoom-out");
        setTimeout(() => {
            mainInterface.classList.add("hidden");
            secondInterface.classList.remove("hidden");
            topBarSecond.classList.add("visible"); // Mostrar la nueva barra
        }, 500);
    });
});
