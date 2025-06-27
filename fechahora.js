// Archivo JavaScript para mostrar fecha y hora en todas las páginas
// Proyecto: Mi Tienda Online

// Función para mostrar fecha y hora actual
function mostrarFechaHora() {
    const ahora = new Date();
    
    // Arrays para días de la semana y meses en español
    const diasSemana = [
        "Domingo", "Lunes", "Martes", "Miércoles", 
        "Jueves", "Viernes", "Sábado"
    ];
    
    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    // Obtener componentes de fecha y hora
    const diaSemana = diasSemana[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    
    // Formatear hora con ceros a la izquierda si es necesario
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    
    // Crear el texto de fecha y hora
    const fechaTexto = `${diaSemana}, ${dia} de ${mes} de ${año}`;
    const horaTexto = `${horas}:${minutos}:${segundos}`;
    
    // Buscar el contenedor en la página actual
    const contenedor = document.getElementById('fecha-hora-contenedor');
    
    if (contenedor) {
        contenedor.innerHTML = `
            <div class="fecha-hora-display">
                <div class="fecha">${fechaTexto}</div>
                <div class="hora">${horaTexto}</div>
            </div>
        `;
    }
}

// Función para inicializar el reloj
function inicializarReloj() {
    // Mostrar la fecha y hora inmediatamente
    mostrarFechaHora();
    
    // Actualizar cada segundo
    setInterval(mostrarFechaHora, 1000);
}

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    inicializarReloj();
});

// También ejecutar si la página ya está cargada
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarReloj);
} else {
    inicializarReloj();
}
