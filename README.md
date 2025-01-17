# MAFIASTOR
A clean store for you 

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>متجري الإلكتروني</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>متجري الإلكتروني</h1>
        <nav>
            <ul>
                <li><a href="#">الرئيسية</a></li>
                <li><a href="#">المنتجات</a></li>
                <li><a href="#">اتصل بنا</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="products">
            <h2>المنتجات المتاحة</h2>
            <div class="product">
                <h3>منتج 1</h3>
                <p>وصف المنتج 1</p>
                <p>السعر: 100 ريال</p>
                <button onclick="addToCart('منتج 1')">أضف إلى السلة</button>
            </div>
            <div class="product">
                <h3>منتج 2</h3>
                <p>وصف المنتج 2</p>
                <p>السعر: 150 ريال</p>
                <button onclick="addToCart('منتج 2')">أضف إلى السلة</button>
            </div>
        </section>
    </main>
    <footer>
        <p>حقوق الطبع والنشر &copy; 2025 متجري الإلكتروني</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
