function startExperience() {
    let name = document.getElementById("username").value;

    if(name.trim() === "") {
        alert("اكتب اسمك الأول ✨");
        return;
    }

    localStorage.setItem("ramadanName", name);
    window.location.href = "main.html";
}

if(window.location.pathname.includes("main.html")) {

    let name = localStorage.getItem("ramadanName");
    let greeting = document.getElementById("greeting");
    let crescent = document.getElementById("crescent");

    // بعد ما رسم الدائرة يخلص
    setTimeout(() => {
        crescent.classList.add("show-crescent");
    }, 3000);

    // بعد ما الهلال يظهر
    setTimeout(() => {
        greeting.innerHTML = "رمضان كريم يا " + name + " 🌙";
    }, 4500);
}


let lantern = document.getElementById("lanternSVG");
let parts = ["rope", "lanternBody", "lanternBottom"];

// رسم الفانوس بعد الهلال
setTimeout(() => {

    let lantern = document.getElementById("lanternSVG");
let parts = ["rope","lanternBody","lanternBottom"];

    parts.forEach((id, index) => {

        
        let element = document.getElementById(id);
        element.style.animation = "drawLantern 1s ease forwards";
        element.style.animationDelay = (index * 0.5) + "s";

          setTimeout(() => {
        el.style.animation = "";
    }, 1000 + index * 500);
    });

       
    lantern.classList.add("drop-lantern");

    // بعد ما ينزل يبدأ يهتز
    setTimeout(() => {
        lantern.classList.add("swing");
    }, 2000);

}, 5000);

// نفترض ان كل الانيميشن خلص تقريباً بعد 10 ثواني
// النص اللي هيتكتب

// بعد انتهاء الانيميشن (مثلاً 10 ثواني)const text = "أهديك هذه الرسالة بمناسبة حلول شهر رمضان المبارك. أتمنى لك أيام مليانة فرحة، سلام، ونجاح. كل سنة وإنت طيب 💛";

setTimeout(() => {

    document.querySelector(".moon-container").style.display = "none";

    const ramadanPage = document.getElementById("ramadanPage");
    ramadanPage.style.display = "block";

    const textElement = document.getElementById("ramadanText");
    const btn = document.getElementById("startBtnContainer");

    // 👇 يظهر فوراً مع بداية الرسالة
    btn.classList.add("show");

    let i = 0;

    const typing = setInterval(() => {
        textElement.textContent += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }

    }, 70);

}, 10000); 



