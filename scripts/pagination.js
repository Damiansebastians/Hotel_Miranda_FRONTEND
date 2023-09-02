//-------------PAGINATION------------

let currentPage = 1; // Variable para mantener un seguimiento de la página actual

function showPage(pageNumber) {
  // Oculta la página actual
  document.getElementById("page" + currentPage).style.display = "block";
  
  // Muestra la página seleccionada
  document.getElementById("page" + pageNumber).style.display = "none";

  // Actualiza la página actual
  currentPage = pageNumber;
}

// Inicialmente, muestra la página 1 y oculta las demás
showPage(1);

function nextPage() {
  // Avanza a la siguiente página si no estamos en la última página
  if (currentPage < 6) {
    showPage(currentPage + 1);
  }
}

function prevPage() {
  // Retrocede a la página anterior si no estamos en la primera página
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}
