// لما الصفحة تفتح
window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".video-card-3d");

    cards.forEach(card => {

        const video = card.querySelector("video");

        /* =========================
           تشغيل الفيديو عند الوقوف
        ========================== */
        card.addEventListener("mouseenter", () => {
            video.play();
        });

        card.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0; // يرجع البداية
        });

        /* =========================
           حركة 3D حسب الماوس
        ========================== */
        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = -(y - centerY) / 10;
            const rotateY = (x - centerX) / 10;

            card.style.transform = `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.05)
            `;
        });

        /* =========================
           رجوع الوضع الطبيعي
        ========================== */
        card.addEventListener("mouseleave", () => {
            card.style.transform = "rotateX(0) rotateY(0) scale(1)";
        });

    });

    /* =========================
       ظهور الكروت تدريجي
    ========================== */

    const revealCards = document.querySelectorAll(".video-card-3d");

    revealCards.forEach((card, index) => {

        setTimeout(() => {
            card.classList.add("show");
        }, index * 200); // كل كارت يظهر بعد اللي قبله
    });

});