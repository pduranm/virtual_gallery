document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");

    const data = [
        {
            text: "Ferdinand-Victor-Eugène Delacroix fue un destacado pintor y litógrafo francés...",

            image: "https://blogger.googleusercontent.com/img/a/AVvXsEhSwPwu2O7sZl9fokQkN5dFSMeUSLLe09Frlw6xZ8BT8FwzSHm-RmEMbNdNSEzuANtxU6a9ZCmksFSpH45CQUzt8v1PGsvjsBkpjhJkxoR19X-IL2o4fMugagijIBlnwoDbDjVHgOXFw8iTWvealeaYdoN2gWdhogtZ0dBTUCSwSs2s7hYlfOGKwkw2jLc", title: "La libertad guiando al pueblo", year: "1830"
        },
        {
            text: "Delacroix nació en el seno de una familia de artistas, siendo hijo del político Charles Delacroix...",

            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Eug%C3%A8ne_Delacroix_-_Jeune_orpheline_au_cimeti%C3%A8re_%28vers_1824%29.JPG/492px-Eug%C3%A8ne_Delacroix_-_Jeune_orpheline_au_cimeti%C3%A8re_%28vers_1824%29.JPG", title: "Joven en el cementerio", year: "1824"
        },
        {
            text: "En 1815, siguiendo la recomendación de su tío, ingresó al taller del pintor neoclásico Pierre Narcisse Guérin...",

            image: "https://www.meisterdrucke.es/kunstwerke/1260px/Ferdinand%20Victor%20Eugene%20Delacroix%20-%20The%20Prisoner%20of%20Chillon%201834%20%20-%20%28MeisterDrucke-115451%29.jpgg", title: "Olinda y Sophronia", year: "1847"
        },
        {
            text: "Durante este tiempo, Delacroix desarrolló un interés por el estudio de grandes maestros como Rubens, Velázquez y Rembrandt...",

            image: "https://uploads5.wikiart.org/images/eugene-delacroix/bouquet-of-flowers-1843(1).jpg", title: "Bouquet de flores", year: "1843"
        },
        {
            text: "En 1822, Delacroix expuso por primera vez su obra 'La barca de Dante'...",

            image: "https://www.almendron.com/blog/wp-content/images/2020/12/retrospectiva-eugene-delacroix-1798-1863-300x458.jpg", title: "Ruinas de Missolonghi", year: "1826"
        },
        {
            text: "En 1825, viajó a Inglaterra para estudiar a los pintores ingleses, como John Constable...",

            image: "https://uploads7.wikiart.org/images/eugene-delacroix/seated-nude-mademoiselle-rose-1824(1).jpg!Large.jpg", title: "Madame Rose", year: "1820"
        },
        {
            text: "A los treinta años, Delacroix provocó controversia con su obra 'La muerte de Sardanápalo'...",

            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mort_de_Sardanapale_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_2346_-_apr%C3%A8s_restauration_octobre_2023.jpg/1280px-Mort_de_Sardanapale_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_2346_-_apr%C3%A8s_restauration_octobre_2023.jpg", title: "Muerte de Sardanápalo", year: "1827"
        }
    ];

    data.forEach((item, index) => {
        // Agregar párrafo de texto
        const paragraph = document.createElement("p");
        paragraph.className = "text-full";
        paragraph.innerHTML = item.text;
        content.appendChild(paragraph);

        // Agregar imagen con título
        const divImage = document.createElement("div");
        divImage.className = "image-full";
        divImage.innerHTML = `
            <a href="#">
                <img width="350" height="auto" src="${item.image}">
                <p style="text-align: center;">${item.title} <br><i>${item.year}</i></p>
            </a>
        `;
        content.appendChild(divImage);
    });
});
