// ============================
// MENGAMBIL NOMOR MEJA DARI URL
// ============================

const urlParams = new URLSearchParams(window.location.search);

const table = urlParams.get("meja");

const tableNumber = document.getElementById("tableNumber");

if (table) {
    tableNumber.textContent = table;
}


// ============================
// FILTER MENU
// ============================

const categoryButtons = document.querySelectorAll(".category");
const menuCards = document.querySelectorAll(".menu-card");

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Hapus class active dari semua tombol
        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Tambahkan active ke tombol yang dipilih
        button.classList.add("active");

        // Ambil kategori yang dipilih
        const selectedCategory = button.dataset.category;

        // Cek semua menu
        menuCards.forEach(function(card) {

            const cardCategory = card.dataset.category;

            // Kalau pilih Semua
            if (selectedCategory === "all") {

                card.style.display = "block";

            }

            // Kalau kategori menu cocok
            else if (selectedCategory === cardCategory) {

                card.style.display = "block";

            }

            // Kalau tidak cocok
            else {

                card.style.display = "none";

            }

        });

    });

});


// ============================
// KLIK MENU
// ============================

menuCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const menuName = card.querySelector("h3").textContent;

        alert(
            "Kamu memilih " + menuName
        );

    });

});