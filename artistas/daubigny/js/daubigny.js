document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");

    const data = [
        {
            text: "Ha sido considerado como un impresionista adelantado, y un nexo entre la Escuela de Barbizon y ese movimiento, se interesó en sus paisajes por elementos como el agua, el aire y el cielo, que supo reflejar magistralmente en su obra.",
            image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Ondergaande_zon_bij_Villerville_-_hwm0091_-_Van_Gogh_Museum.jpg",
            title: "Atardecer en Villerville",
            year: "1874"
        },
        {
            text: "El artista Charles-François Daubigny nació en una familia de pintores y recibió enseñanzas artísticas de su padre, <strong>Edmond François </strong>, y de su tío, el miniaturista <strong>Pierre</strong>. Inicialmente, Daubigny pintaba en un estilo tradicional, pero su enfoque cambió en 1843 cuando se estableció en Barbizon para trabajar en la naturaleza. Su encuentro con Camille Corot en 1852 y su adaptación de un bote como estudio flotante, le permitieron pintar a lo largo del Sena y el Oise, influenciado posteriormente por <strong>Gustave Courbet</strong>.",
            image: "https://www.meisterdrucke.es/kunstwerke/1260px/Charles_Francois_Daubigny_-_Moonrise_1877_-_%28MeisterDrucke-579736%29.jpg",
            title: "Salida de la luna",
            year: "1877"
        },
        {
            text: "En <strong>1866</strong>, Daubigny visitó <strong>Inglaterra</strong> y luego regresó durante la Guerra Franco-prusiana en <strong>1870</strong>, donde conoció a <strong>Claude Monet</strong> y juntos viajaron a los Países Bajos. De vuelta en Auvers, se encontró con <strong>Paul Cézanne</strong>, quien se cree que fue influenciado por él. Daubigny produjo sus mejores obras entre 1864 y 1874, especialmente <strong>paisajes con árboles, ríos y patos</strong>, añadiendo estos últimos como señal de calidad artística.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Charles-Fran%C3%A7ois_Daubigny_-_Bateaux_sur_la_c%C3%B4te_%C3%A0_%C3%89taples_%281871%29.jpg/800px-Charles-Fran%C3%A7ois_Daubigny_-_Bateaux_sur_la_c%C3%B4te_%C3%A0_%C3%89taples_%281871%29.jpg",
            title: "Barcos en la costa de Étaples",
            year: "1871",
        },
        

    ];

    const info = [

        {
            text:"Aunque sus pinturas fluviales son las más conocidas, sus obras más destacadas incluyen <i>Paisaje primaveral</i>, <i>Borde de la Cure, Morvan</i> , <i>Villerville sobre el mar</i> (1864), <i>Luz de luna</i> (1865), <i>Andrsy sur Oise</i> (1868), <i>Estanque en Morvan</i>, y <i>Retorno desde la esclusa</i>. Produjo también grabados al aguafuerte, muchos de los cuales se publicaron en revistas de la época."
        },
        {
            text:"La pincelada suelta de Daubigny y su participación ocasional en los Salones oficiales con resultados desiguales afectaron su reputación. A pesar de esto, fue invitado a formar parte del jurado de algunos de estos eventos, aunque en ocasiones renunció en solidaridad con los impresionistas, cuyas obras eran excluidas masivamente."
        },
        {
            text:"Entre sus seguidores y alumnos se incluyen: su hijo Karl Daubigny, Oudinot, Delpy, Albert Charpin y Damoye. Su legado artístico sigue siendo apreciado, con ejemplos de su trabajo exhibidos en el <strong>Louvre</strong> y el <strong>Museo Thyssen-Bornemisza</strong> en España, entre otros lugares. </p>"
        },

    ];

    const image_dt = [
        {
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/La_tarde_-_Charles-Fran%C3%A7ois_Daubigny.jpg/800px-La_tarde_-_Charles-Fran%C3%A7ois_Daubigny.jpg"
        },
    ];



    data.forEach((item, index) => {
        // Agregar párrafo de texto
        const paragraph = document.createElement("p");
        paragraph.className = "text-full";
        paragraph.innerHTML = item.text;
        content.appendChild(paragraph);
        
        // Agregar imagen con título y año
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

    // data_text_image.forEach((item, index) => {
    //     // Agregar párrafo de texto
    //     const paragraph = document.createElement("p");
    //     paragraph.className = "text-full";
    //     paragraph.innerHTML = item.text;
    //     content.appendChild(paragraph);
        
    //     // Agregar imagen con título y año
    //     const divImage = document.createElement("div");
    //     divImage.className = "image-full";
    //     divImage.innerHTML = `
    //         <a href="#">
    //             <img width="350" height="auto" src="${item.image}">
    //         </a>
    //     `;
    //     content.appendChild(divImage);
    
    info.forEach((item, index) => {
        // Agregar párrafo de texto
        const paragraph = document.createElement("p");
        paragraph.className = "text-full";
        paragraph.style = "margin-bottom: -10px;"
        paragraph.innerHTML = item.text;
        content.appendChild(paragraph);
        });

    image_dt.forEach((item, index) => {
        const divImage = document.createElement("div");
        divImage.className = "image-full";
        divImage.innerHTML = `
            <a href="#">
                <img width="350" height="auto" src="${item.image}">
            </a>
            `;
        content.appendChild(divImage);
        });
    });

