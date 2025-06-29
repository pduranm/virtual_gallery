document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");

    const info = [
        {
            text: "Pintada alrededor de 1478-1480."
        },
        {
            text: "Esta obra representa a la Virgen María con el Niño Jesús y es un ejemplo destacado del estilo del Renacimiento temprano."
        },
        {
            text: "La composición es triangular, lo que aporta estabilidad y armonía a la obra."
        },
        {
            text: "La figura de la Virgen está en el centro, creando un eje visual que guía la mirada del espectador hacia el Niño."
        },
        {
            text: "La representación de la Virgen con el Niño es un tema recurrente en el arte cristiano."
        },
        {
            text: "En esta obra, la mirada de la Virgen es tierna y protectora, mientras que el Niño Jesús, que juega con una flor, simboliza la inocencia y la humanidad de Cristo."
        },
        {
            text: "La flor que sostiene el Niño puede interpretarse como un símbolo de pureza y la vida eterna, además de representar la conexión entre lo terrenal y lo divino."
        },
        {
            text: "<strong>Gestos y Miradas</strong>: La interacción entre la Virgen y el Niño es íntima, lo que refuerza la idea de la maternidad y la relación entre ambos."
        },
        {
            text: "La mirada de la Virgen hacia el Niño transmite amor y devoción."
        }
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
            <a href="#">
                <img width="350" height="auto" src="${item.image}">
            </a>
        `;
        content.appendChild(divImage);

        info.forEach((item, index) => {
            // Agregar párrafo de texto
            const paragraph = document.createElement("p");
            paragraph.className = "text-full";
            paragraph.style = "margin-bottom: -20px;"
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
});