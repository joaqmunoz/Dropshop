// Datos JSON simulados
const jsonData = [
    {
        "id": 1,
        "title": "Producto 1",
        "description": "Descripción del producto 1",
        "image": "https://via.placeholder.com/150"
    },
    {
        "id": 2,
        "title": "Producto 2",
        "description": "Descripción del producto 2",
        "image": "https://via.placeholder.com/150"
    },
    {
        "id": 3,
        "title": "Producto 3",
        "description": "Descripción del producto 3",
        "image": "https://via.placeholder.com/150"
    }
];

// Función para llenar el repetidor
function fillRepeater(data) {
    const container = document.getElementById('repeater-container');
    
    data.forEach(item => {
        // Crear un contenedor para el item
        const itemElement = document.createElement('div');
        itemElement.classList.add('repeater-item');
        
        // Crear y agregar elementos al contenedor del item
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        
        // Agregar el item al contenedor del repetidor
        container.appendChild(itemElement);
    });
}

// Llenar el repetidor con los datos JSON
fillRepeater(jsonData);
