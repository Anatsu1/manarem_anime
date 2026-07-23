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
        listar: () => apiRequest('GET', '/productos'),
        obtener: (codigo) => apiRequest('GET', `/productos/${codigo}`),
        crear: (formData) => apiRequest('POST', '/productos', formData),
        modificar: (codigo, formData) => apiRequest('PUT', `/productos/${codigo}`, formData),
        eliminar: (codigo) => apiRequest('DELETE', `/productos/${codigo}`),
    },
    auth: {
        registro: (data) => apiRequest('POST', '/registro', data),
        login: (data) => apiRequest('POST', '/login', data),
    },
    contacto: {
        enviar: (data) => apiRequest('POST', '/contacto', data),
    },
    opiniones: {
        listar: () => apiRequest('GET', '/opiniones'),
        crear: (data) => apiRequest('POST', '/opiniones', data),
    },
};
