document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");

    const data = [
        {
            text: "Ferdinand-Victor-Eugène Delacroix fue un destacado <strong>pintor y litógrafo francés</strong>, nacido el 26 de 1798 en Charenton- Saint - Maurice y fallecido el 13 de agosto de 1863 en París.",
            image: "https://blogger.googleusercontent.com/img/a/AVvXsEhSwPwu2O7sZl9fokQkN5dFSMeUSLLe09Frlw6xZ8BT8FwzSHm-RmEMbNdNSEzuANtxU6a9ZCmksFSpH45CQUzt8v1PGsvjsBkpjhJkxoR19X-IL2o4fMugagijIBlnwoDbDjVHgOXFw8iTWvealeaYdoN2gWdhogtZ0dBTUCSwSs2s7hYlfOGKwkw2jLc", 
            title: "La libertad guiando al pueblo", 
            year: "1830",
            redirect: "obras/libertad_delacroix.html"
        },
        {
            text: "Delacroix nació en el seno de una familia de artistas, siendo hijo del político <strong>Charles Delacroix y Victoire Oeben</strong>, perteneciente a una familia de ebanistas y dibujantes. Después de la muerte de su padre en 1806, se trasladó con su familia a <strong>París</strong>, donde comenzó sus estudios clásicos en el Liceo Imperial.",

            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Eug%C3%A8ne_Delacroix_-_Jeune_orpheline_au_cimeti%C3%A8re_%28vers_1824%29.JPG/492px-Eug%C3%A8ne_Delacroix_-_Jeune_orpheline_au_cimeti%C3%A8re_%28vers_1824%29.JPG", title: "Joven en el cementerio", year: "1824"
        },
        {
            text: "En 1815, siguiendo la recomendación de su tío, ingresó al taller del pintor neoclásico <strong>Pierre Narcisse Guérin</strong>, donde tuvo como maestros a <strong>Théodore Géricault y al Barón Gros</strong>",

            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/WomenofAlgiers.JPG/1200px-WomenofAlgiers.JPG", 
            title: "Mujer en Argel", 
            year: "1834"
        },
        {
            text: "Durante este tiempo, Delacroix desarrolló un interés por el estudio de grandes maestros como <strong>Rubens</strong>, <strong>Velázquez</strong> y <strong>Rembrandt</strong>, así como por la <strong>litografía y la pintura de paisajes</strong>.",

            image: "https://uploads5.wikiart.org/images/eugene-delacroix/bouquet-of-flowers-1843(1).jpg", title: "Bouquet de flores", year: "1843"
        },
        {
            text: "En <strong>1822</strong>, Delacroix expuso por primera vez su obra <i>La barca de Dante</i> , seguida dos años más tarde por <i>La matanza de Quíos</i> , obras que reflejaban su ambivalencia entre el <strong>romanticismo y el clasicismo</strong>.",

            image: "https://www.almendron.com/blog/wp-content/images/2020/12/retrospectiva-eugene-delacroix-1798-1863-300x458.jpg", title: "Ruinas de Missolonghi", year: "1826"
        },
        {
            text: "En <strong>1825</strong>, viajó a Inglaterra para estudiar a los pintores ingleses, como <strong>John Constable</strong>, lo que influyó en su técnica y uso del color.",

            image: "https://uploads7.wikiart.org/images/eugene-delacroix/seated-nude-mademoiselle-rose-1824(1).jpg!Large.jpg", 
            title: "Madame Rose", 
            year: "1820"
        },
        {
            text: "A los treinta años, Delacroix provocó controversia con su obra <i>La muerte de Sardanápalo</i> en el <strong>Salón de París en 1827</strong>, destacando por su uso del color y su representación <i>dramática</i>. Este período también marcó su interés por la música y la literatura, relacionándose con figuras como <strong>Stendhal, Mérimée, Victor Hugo y Baudelaire</strong>.",

            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Mort_de_Sardanapale_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_2346_-_apr%C3%A8s_restauration_octobre_2023.jpg/1280px-Mort_de_Sardanapale_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_2346_-_apr%C3%A8s_restauration_octobre_2023.jpg", title: "Muerte de Sardanápalo", year: "1827"
        },
        {
            text: "En <strong>1832</strong>, realizó un viaje de seis meses a Marruecos y Argelia, donde quedó fascinado por la luz, el color y la cultura del norte de África. Este viaje influyó profundamente en su obra posterior, reflejada en cuadros como <i>Mujeres de Argel en sus habitaciones</i>.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eug%C3%A8ne_Ferdinand_Victor_Delacroix_021.jpg/1024px-Eug%C3%A8ne_Ferdinand_Victor_Delacroix_021.jpg", title:"Giaour y Hassan", year:"1826"
        }, 
        {
            text: "Su obra más conocida, <i>La Libertad guiando al pueblo</i>, le valió la Cruz de la Legión de Honor y se convirtió en un símbolo de la <strong>Revolución de 1830 en Francia</strong>.",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/La_justice_de_Trajan.jpg", 
            title: "La justicia de Trajano", 
            year: "1840"
        }, 
        {
            text: "A su regreso, Delacroix recibió encargos oficiales para decorar diversos edificios públicos, como el <strong>Salón del rey del palacio de Borbón</strong> y el <strong>Palacio de Luxemburgo</strong>.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Hamlet_und_Horatio_auf_dem_Friedhof_%28Eug%C3%A8ne_Ferdinand_Victor_Delacroix%29.jpg/960px-Hamlet_und_Horatio_auf_dem_Friedhof_%28Eug%C3%A8ne_Ferdinand_Victor_Delacroix%29.jpg", title:"Hamlet y Horacio en el cementerio", year:"1839"
        },
        {
            text: "En sus últimos años, Delacroix continuó pintando a pesar de su deterioro de salud, completando obras como <i>El cobro del impuesto árabe</i> y <i>Tobías y el Ángel</i> . Falleció el 13 de agosto de 1863, dejando un legado artístico revolucionario que influyó en generaciones posteriores de artistas.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/La_Barque_de_Dante_%28Delacroix_3820%29.jpg/1280px-La_Barque_de_Dante_%28Delacroix_3820%29.jpg", title:"La barca de Dante", year:"1822"
        },
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
            <a href="${item.redirect}">
                <img width="350" height="auto" src="${item.image}">
                <p style="text-align: center;">${item.title} <br><i>${item.year}</i></p>
            </a>
        `;
        content.appendChild(divImage);
    });
});
