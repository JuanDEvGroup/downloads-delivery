// Obtenemos los elementos del DOM
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const listContainer = document.getElementById('list-container');
const list = document.getElementById('list');
const recommendationsContainer = document.getElementById('recommendations-container');
const recommendations = document.getElementById('recommendations');

// Función para agregar un elemento a la lista de reproducción
function addElement(element) {
    const listItem = document.createElement('li');
    listItem.textContent = element.title;
    listItem.dataset.id = element.id;
    listItem.dataset.genre = element.genre;
    listItem.dataset.duration = element.duration;
    list.appendChild(listItem);
}

// Función para eliminar un elemento de la lista de reproducción
function removeElement(element) {
    const listItem = document.querySelector(`li[data-id="${element.id}"]`);
    list.removeChild(listItem);
}

// Función para ordenar la lista de reproducción
function orderElements(criteria) {
    // Ordenamos la lista según el criterio seleccionado
    const sortedList = [...list.children].sort((a, b) => {
        if (criteria === 'title') {
            return a.textContent.localeCompare(b.textContent);
        } else if (criteria === 'genre') {
            return a.dataset.genre.localeCompare(b.dataset.genre);
        } else if (criteria === 'duration') {
            return a.dataset.duration - b.dataset.duration;
        }
    });
    list.innerHTML = '';
    sortedList.forEach((item) => list.appendChild(item));
}

// Función para buscar elementos
function searchElements(query) {
    // Buscamos elementos que coinciden con el término de búsqueda
    const results = [];
    const elements = [
        { id: 1, title: 'Elemento 1', genre: 'Acción', duration: 120 },
        { id: 2, title: 'Elemento 2', genre: 'Comedia', duration: 90 },
        { id: 3, title: 'Elemento 3', genre: 'Drama', duration: 150 },
        // ...
    ];
    elements.forEach((element) => {
        if (element.title.toLowerCase().includes(query.toLowerCase()) ||
            element.genre.toLowerCase().includes(query.toLowerCase()) ||
            element.description.toLowerCase().includes(query.toLowerCase())) {
            results.push(element);
        }
    });
    return results;
}

// Función para mostrar recomendaciones
function getRecommendations() {
    // Mostramos una lista de elementos recomendados
    const recommendationsList = [];
    const userHistory = [
        { id: 1, title: 'Elemento 1', genre: 'Acción', duration: 120 },
        { id: 2, title: 'Elemento 2', genre: 'Comedia', duration: 90 },
        // ...
    ];
    userHistory.forEach((element) => {
        const similar