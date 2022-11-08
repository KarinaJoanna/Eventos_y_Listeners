const changesC = (event) =>{
    const fondoP = document.getElementById('fondop'); 
    const popup = document.getElementById('popup');

    const containerall = document.querySelector('.objeto');


    fondoP.classList.remove('hide');
    fondoP.classList.add('popupf');
    popup.classList.add('popup');

    const textAreas = document.querySelectorAll('#popup textarea')

    const campo = containerall.querySelectorAll('td');
    const original =  containerall.querySelector('td img');
    const nueva = document.querySelector('#popup img');
    const campos = [];

    campo.forEach(info =>{
        if (info.textContent === ""){
            return;
        }
        campos.push(info.textContent);

        for(let info = 0; info< textAreas.length; info++){
            textAreas[info].value = campos[info];
        }
    
    }); 
    
    nueva.src = original.src;

    
    const close = document.querySelector('#popup button');
    close.addEventListener('click', (event) =>{
        fondoP.classList.add('hide');
        fondoP.classList.remove('popupf');

        const camposLibres = containerall.querySelectorAll("td");

        camposLibres[2].innerHTML= "<em>" + textAreas[0].value + "</em>";
        for(let i = 3; i<camposLibres.length-1; i++){
            camposLibres[i].textContent = textAreas[i-2].value;
        }

    })
}

const filtrarimg = (event) =>{
    event.preventDefault();

    const obj = document.querySelectorAll('.objeto');
    const consulta = document.querySelector('[id="selector"] option:checked').text; 
    
    obj.forEach(slc =>{
        slc.classList.remove('filtro');
    })

    if(consulta === "Género"){
        window.alert("Cambia la opcion");
        return;
        
    }

    obj.forEach(slc =>{
        if( slc.querySelector('.nombre').textContent !== consulta){
            slc.classList.add('filtro');
        }
    })

}


const createimg = (event) => {

    const miniatura = document.createElement('div');
    miniatura.classList.add('min');

    const imagen = document.createElement('img');
    imagen.src =  event.currentTarget.src;
    miniatura.appendChild(imagen);

    const X = event.pageX;
    const Y = event.pageY;

    miniatura.style.left = X + "px";
    miniatura.style.top = Y + "px";

    document.body.appendChild(miniatura);
    event.currentTarget.removeEventListener('mouseover', createimg);

}

const destroyimg = (event) => {

    document.querySelector('.min').remove();
    event.currentTarget.addEventListener('mouseover', createimg);

}

const buttonfil = document.getElementById("buttonfil");
buttonfil.addEventListener('click',filtrarimg);

const img = document.querySelectorAll(".imagenes");

img.forEach(imagenes =>{
    imagenes.addEventListener('mouseover', createimg);
    imagenes.addEventListener('mouseout', destroyimg);
});

const editar = document.querySelectorAll(".objeto td button")
editar.forEach(edit =>{
    edit.addEventListener('click', changesC);
});
    

