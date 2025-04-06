document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");

    const data = [

        {
            text: "Esta es una obra maestra de <strong>Eugène Delacroix</strong>, un referente del romanticismo francés. El cuadro, lleno de pasión y simbolismo, fue inspirado por las Tres Jornadas Gloriosas de julio de 1830 en Francia, un levantamiento popular que derrocó al rey <strong>Carlos X</strong> y marcó el inicio del reinado de <strong>Luis Felipe I</strong>.",
            image: "https://blogger.googleusercontent.com/img/a/AVvXsEhSwPwu2O7sZl9fokQkN5dFSMeUSLLe09Frlw6xZ8BT8FwzSHm-RmEMbNdNSEzuANtxU6a9ZCmksFSpH45CQUzt8v1PGsvjsBkpjhJkxoR19X-IL2o4fMugagijIBlnwoDbDjVHgOXFw8iTWvealeaYdoN2gWdhogtZ0dBTUCSwSs2s7hYlfOGKwkw2jLc",

        },

    ];

    const info = [
        {
            text:"<strong>Delacroix</strong> no participó directamente en las barricadas de París, pero se sintió profundamente conmovido por los ideales de libertad y la efervescencia <strong>revolucionaria</strong>. Al pintar esta obra, buscó inmortalizar el espíritu del pueblo francés y capturar el <strong>heroísmo colectivo</strong>."
        },
        {
            text:"Delacroix escribió en una carta a su hermano: <i>'Si no he luchado por mi país, al menos pintaré por él.'</i> <br> Para Delacroix, este cuadro no era solo una representación histórica, sino también una declaración personal de sus <strong>ideales románticos</strong>: <i>libertad, humanidad y lucha</i>."
        },
        
    ];

    const image = [
        {
            image:""
        },
        {
            image:""
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