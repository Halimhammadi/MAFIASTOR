
function addToCart(productName) {
    const messages = [
        "تم إضافة " + productName + " إلى سلتك. هل أنت مستعد للمغامرات القادمة؟",
        "احذر! " + productName + " قد يغير مجرى حياتك!",
        "لقد قمت بإضافة " + productName + " إلى سلتك. لكن ماذا ستحصل عليه؟"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}
