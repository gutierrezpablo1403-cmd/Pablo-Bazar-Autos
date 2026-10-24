 let correoUsuario = "";

// Manejo del formulario de inicio de sesión
document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
    let correoIngresado = document.getElementById("correo").value;
    
    // Validación de terminación .com
    if (!correoIngresado.endsWith(".com")) {
        Swal.fire({
            title: 'Correo inválido',
            text: 'Por favor, asegúrate de que tu correo termine en ".com"',
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'Reintentar'
        });
        return; // Detiene la ejecución para que no inicie sesión
    }

    // Si pasa la validación, guardamos el correo e iniciamos sesión
    correoUsuario = correoIngresado;
    
    // Alerta moderna usando SweetAlert2
    Swal.fire({
        title: '¡Bienvenido!',
        text: 'Sesión iniciada con: ' + correoUsuario,
        icon: 'success',
        confirmButtonColor: '#2563eb',
        confirmButtonText: 'Continuar'
    });
});
// Función de compra
function comprarAuto(modelo, precio) {
    if (correoUsuario === "") {
        Swal.fire({
            title: 'Atención',
            text: 'Debes iniciar sesión antes de comprar un vehículo.',
            icon: 'warning',
            confirmButtonColor: '#2563eb',
            confirmButtonText: 'Ir a Inicio'
        }).then(() => {
            // Reemplazo del error "mostrarSeccion" por anclaje nativo
            window.location.href = '#inicio';
            document.getElementById('correo').focus();
        });
        return;
    }

    Swal.fire({
        title: '¿Confirmar compra?',
        html: `Vehículo: <b>${modelo}</b><br>Precio: <b>$${precio.toLocaleString()} MXN</b>`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#2563eb',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, comprar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: '¡Compra registrada!',
                html: `Vehículo: ${modelo}<br>Precio: $${precio.toLocaleString()} MXN<br><br>Gracias por tu compra, un asesor se pondrá en contacto contigo al correo:<br><b>${correoUsuario}</b>`,
                icon: 'success',
                confirmButtonColor: '#2563eb'
            });
        }
    });
}