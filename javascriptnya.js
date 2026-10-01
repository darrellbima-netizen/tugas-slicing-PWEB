//Settingan punyae menu

const categoryButtons = document.querySelectorAll(".category");
const menuCards = document.querySelectorAll(".menu-card");

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedCategory = button.dataset.category;

        menuCards.forEach(function(card) {

            const cardCategory = card.dataset.category;

            if (selectedCategory === "all") {
                card.style.display = "block";
            }

            else if (selectedCategory === cardCategory) {
                card.style.display = "block";
            }

            else {
                card.style.display = "none";
            }

        });

    });

});


// ini reaksi pas mencet menu aja (sebenernya mau tak bikin kek semisal mencet menu itu lgsg kek "masukkan jumlah yg dipesan" dan lain lain pokoke kek semisal di resto beneran wkwk)
menuCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const menuName = card.querySelector("h3").textContent;

        alert(
            "Kamu memilih " + menuName
        );

    });

});