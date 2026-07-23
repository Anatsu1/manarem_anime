const API_BASE = 'http://localhost:5000';
const MOCK_MODE = true;

function mockRequest(method, path, data) {
    return new Promise(resolve => {
        setTimeout(() => {
            const parts = path.split('/').filter(Boolean);

            if (method === 'GET' && path === '/productos') {
                resolve(MOCK_DB.productos);
                return;
            }

            if (method === 'GET' && parts[0] === 'productos' && parts[1]) {
                const codigo = parseInt(parts[1]);
                const prod = MOCK_DB.productos.find(p => p.codigo === codigo);
                resolve(prod || { error: 'Producto no encontrado' });
                return;
            }

            if (method === 'POST' && path === '/productos') {
                const maxCod = MOCK_DB.productos.reduce((m, p) => Math.max(m, p.codigo), 0);
                const img = data.get('imagen');
                const nuevo = {
                    codigo: maxCod + 1,
                    descripcion: data.get('descripcion'),
                    cantidad: parseInt(data.get('cantidad')),
                    precio: parseFloat(data.get('precio')),
                    imagen_url: (img instanceof File && img.name) ? img.name : 'gabinete.jpg',
                    proveedor: parseInt(data.get('proveedor')),
                };
                MOCK_DB.productos.push(nuevo);
                resolve({ mensaje: 'Producto agregado correctamente.', codigo: nuevo.codigo });
                return;
            }

            if (method === 'PUT' && parts[0] === 'productos' && parts[1]) {
                const codigo = parseInt(parts[1]);
                const prod = MOCK_DB.productos.find(p => p.codigo === codigo);
                if (!prod) {
                    resolve({ error: 'Producto no encontrado' });
                    return;
                }
                if (data.get('descripcion') !== null) prod.descripcion = data.get('descripcion');
                if (data.get('cantidad') !== null) prod.cantidad = parseInt(data.get('cantidad'));
                if (data.get('precio') !== null) prod.precio = parseFloat(data.get('precio'));
                if (data.get('proveedor') !== null) prod.proveedor = parseInt(data.get('proveedor'));
                const img = data.get('imagen');
                if (img instanceof File && img.name) prod.imagen_url = img.name;
                resolve({ mensaje: 'Producto modificado' });
                return;
            }

            if (method === 'DELETE' && parts[0] === 'productos' && parts[1]) {
                const codigo = parseInt(parts[1]);
                const idx = MOCK_DB.productos.findIndex(p => p.codigo === codigo);
                if (idx === -1) {
                    resolve({ error: 'Producto no encontrado' });
                    return;
                }
                MOCK_DB.productos.splice(idx, 1);
                resolve({ mensaje: 'Producto eliminado' });
                return;
            }

            if (method === 'POST' && path === '/login') {
                const usuario = data.usuario || data.email || 'Otaku';
                const email = data.email || '';
                resolve({ mensaje: 'Inicio de sesión exitoso', usuario: { usuario, email } });
                return;
            }

            if (method === 'POST' && path === '/registro') {
                resolve({ mensaje: 'Registro exitoso' });
                return;
            }

            if (method === 'POST' && path === '/contacto') {
                resolve({ mensaje: 'Mensaje enviado' });
                return;
            }

            if (method === 'GET' && path === '/opiniones') {
                resolve(MOCK_DB.opiniones);
                return;
            }

            if (method === 'POST' && path === '/opiniones') {
                const maxId = MOCK_DB.opiniones.reduce((m, o) => Math.max(m, o.id), 0);
                const val = data instanceof FormData ? v => data.get(v) : v => data[v];
                const hoy = new Date();
                const fecha = hoy.getFullYear() + '-' + String(hoy.getMonth() + 1).padStart(2, '0') + '-' + String(hoy.getDate()).padStart(2, '0');
                MOCK_DB.opiniones.push({
                    id: maxId + 1,
                    nombre: val('nombre') || 'Anónimo',
                    avatar: 'persona1-f.jpg',
                    texto: val('texto') || val('opinion') || '',
                    fecha,
                });
                resolve({ mensaje: 'Opinión enviada' });
                return;
            }

            resolve({ error: 'Ruta no implementada en mock' });
        }, 300);
    });
}

async function apiRequest(method, path, data) {
    if (MOCK_MODE) return mockRequest(method, path, data);

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
