document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");

    // const data = [
    //     {
    //         text: ""
    //     },
    // ];

    const info = [
        {
            text: "<h2>Descripción</h2>"
        },
        {
            text: "La Madonna Benois, pintada por Leonardo da Vinci alrededor de 1478-1480, es una obra fundamental en la carrera del artista y un hito en la historia de la pintura del Renacimiento."
        },
        {
            text: "<b>Innovación en la composición:</b> La obra rompe con la tradición de las Madonnas góticas y bizantinas, que solían representarlas de forma rígida y ceremonial. Aquí, Leonardo presenta una escena de intimidad y ternura. La Virgen y el Niño no están en un trono, sino en un ambiente doméstico, probablemente una habitación, lo que acerca la divinidad a la esfera humana. Esta humanización de los personajes sagrados será una característica distintiva del Alto Renacimiento."
        },
        {
            text: "<b>La relación entre la Madre y el Hijo:</b> La interacción entre María y el Niño Jesús es el corazón de la pintura. <br>El Niño sostiene una flor, que a menudo se ha interpretado como una flor de la cruz o una promesa de su futuro sacrificio. La Virgen sonríe con dulzura, aunque su mirada también transmite una melancolía velada, como si presintiera el destino de su hijo. Esta ambigüedad emocional es típica de Leonardo y añade una profunda carga psicológica a la obra."
        },
        {
            text:"<b>Técnica del claroscuro y el sfumato:</b> Aunque no tan desarrollado como en sus obras posteriores, en la Madonna Benois se pueden ver los primeros experimentos de Leonardo con el claroscuro (el uso de la luz y la sombra para crear volumen) y el sfumato (la técnica de difuminar los contornos para suavizar las transiciones entre colores y tonos). <br>Los rostros de María y el Niño están delicadamente modelados, y la luz que entra por la ventana ilumina la escena, creando una atmósfera de suave intimidad. El fondo oscuro, con una pequeña ventana que deja ver un paisaje difuminado, concentra toda la atención en los personajes principales."
        },
        {
            text: "<b>Simbolismo:</b> La flor que el Niño sostiene es un elemento simbólico central. Se cree que podría ser una crucífera, una planta con forma de cruz, que simboliza la Pasión y la Resurrección de Cristo. La sonrisa de la Virgen, que se aleja de la seriedad tradicional, podría ser un reflejo de su aceptación de la voluntad divina."
        },
        {
            text: "<b>Influencia y legado:</b> La Madonna Benois tuvo una gran influencia en artistas contemporáneos y posteriores. Su enfoque en la humanización, la interacción psicológica entre los personajes y el uso innovador de la luz y la sombra sentaron las bases para el nuevo estilo pictórico del Renacimiento.<br> Es una prueba del genio temprano de Leonardo, que ya en su juventud estaba experimentando con las ideas que lo convertirían en uno de los artistas más importantes de la historia."
        },
        {
            text: "<h2>Curiosidades</h2> "
        },
        {
            text:"Durante siglos, la obra estuvo perdida para el mundo del arte. Se sabe que fue mencionada por primera vez en 1792 en un inventario de una colección privada en Astracán, Rusia. Fue adquirida por la familia Benois en 1914, quienes la vendieron al Museo del Hermitage de San Petersburgo. Antes de eso, su paradero era un misterio, lo que hace que su redescubrimiento en el siglo XX fuera un evento muy importante para la historia del arte. "
        },
        {
            text: "La Madonna Benois es una de las primeras obras de Leonardo Da Vinci en las que el artista se centra en el tema de la Virgen con el Niño. Aunque el tema es muy tradicional, el tratamiento que le da es totalmente innovador, lo que muestra el genio del artista en sus años de juventud. Se considera una de las obras más tempranas de la etapa florentina de Leonardo, pintada poco después de su aprendizaje con <b>Verrocchio</b>."
        },
        {
            text:"La sonrisa de la Virgen en la Madonna Benois es una de las primeras y más sutiles que Leonardo pintó. Aunque no es tan enigmática como la de la Mona Lisa, esta sonrisa es un rasgo distintivo del estilo de Leonardo. Se aleja de la seriedad habitual en las representaciones religiosas y le da un toque de humanidad y dulzura al personaje, presagiando el famoso gesto de la Mona Lisa."
        },
        {
            text: "Durante un tiempo, la autoría de la obra fue objeto de debate. Aunque hoy en día está firmemente aceptada como una obra de Leonardo Da Vinci, a principios del siglo XX algunos críticos la atribuían a su maestro, Andrea del Verrocchio, o a algún otro artista del círculo de Leonardo. Fue el renombrado historiador del arte Bernard Berenson quien en 1899 la autentificó como una obra del genio florentino, basándose en la calidad, el estilo y la composición únicos de la pintura."
        },

    ];
    const image = [
        {
            image: ""
        },
        {
            image: ""
        },

    ];

    // data.forEach((item, index) => {
    //     // Agregar párrafo de texto

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
        paragraph.style = "margin-bottom: -20px; justify-content: center; text-align: justify;";
        paragraph.innerHTML = item.text;
        content.appendChild(paragraph);
    });

    image.forEach((item, index) => {
        const divImage = document.createElement("div");
        divImage.className = "image-full";
        divImage.innerHTML = `
        <a href="#">
            <img width="350" height="auto" src="${item.image}">
        </a>
        `;
    });
});
