const API_BASE = 'http://localhost:5000';

async function apiRequest(method, path, data) {
    const url = `${API_BASE}${path}`;
    const options = { method };

    if (data instanceof FormData) {
        options.body = data;
    } else if (data) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    return response.json();
}

const api = {
    productos: {
        listar: () => apiRequest('GET', '/api/productos'),
        obtener: (codigo) => apiRequest('GET', `/api/productos/${codigo}`),
        crear: (formData) => apiRequest('POST', '/api/productos', formData),
        modificar: (codigo, formData) => apiRequest('PUT', `/api/productos/${codigo}`, formData),
        eliminar: (codigo) => apiRequest('DELETE', `/api/productos/${codigo}`),
    },
    auth: {
        registro: (data) => apiRequest('POST', '/api/registro', data),
        login: (data) => apiRequest('POST', '/api/login', data),
    },
    contacto: {
        enviar: (data) => apiRequest('POST', '/api/contacto', data),
    },
    opiniones: {
        listar: () => apiRequest('GET', '/api/opiniones'),
        crear: (data) => apiRequest('POST', '/api/opiniones', data),
    },
};
