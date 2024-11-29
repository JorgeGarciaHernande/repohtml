// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    // Agregar evento al formulario para manejar el envío
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar el envío por defecto

        // Obtener los valores del formulario
        const nombre = document.querySelector("#nombre").value.trim();
        const email = document.querySelector("#email").value.trim();
        const mensaje = document.querySelector("#mensaje").value.trim();

        // Validar los campos
        if (!nombre || !email || !mensaje) {
            alert("Por favor, llena todos los campos.");
            return;
        }

        // Mostrar un mensaje de éxito
        alert(`¡Gracias, ${nombre}! Hemos recibido tu mensaje.`);

        // Limpiar el formulario
        form.reset();
    });

    // Animar los enlaces de navegación
    const navLinks = document.querySelectorAll("header nav ul li a");
    navLinks.forEach((link) => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffcc80";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#fff";
        });
    });

    // Efecto hover en los hobbies
    const hobbyItems = document.querySelectorAll("ul li");
    hobbyItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease";
        });
        item.addEventListener("mouseout", () => {
            item.style.transform = "scale(1)";
        });
    });

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); 

            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const footerLinks = document.querySelectorAll("footer ul li a");
    footerLinks.forEach((footerLink) => {
        footerLink.addEventListener("mouseover", () => {
            footerLink.style.color = "#fff";
            footerLink.style.textDecoration = "underline";
        });
        footerLink.addEventListener("mouseout", () => {
            footerLink.style.color = "#ffcc80";
            footerLink.style.textDecoration = "none";
        });
    });
});
