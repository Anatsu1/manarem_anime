// Datos simulados — Etapa 1 sin backend. Cambiar MOCK_MODE en api.js para usar backend real.
const MOCK_DB = {
    productos: [
        { codigo: 1, descripcion: 'Figura Chainsaw Man — Denji', cantidad: 12, precio: 45999.99, imagen_url: 'Chainsaw.jpg', proveedor: 1 },
        { codigo: 2, descripcion: 'Manga One Piece tomo 1', cantidad: 30, precio: 8500.00, imagen_url: 'OneP.jpg', proveedor: 2 },
        { codigo: 3, descripcion: 'Póster Demon Slayer', cantidad: 25, precio: 3200.50, imagen_url: 'DemonS.jpg', proveedor: 1 },
        { codigo: 4, descripcion: 'Figura Jujutsu Kaisen — Gojo', cantidad: 8, precio: 52000.00, imagen_url: 'JujutK.jpg', proveedor: 3 },
        { codigo: 5, descripcion: 'Manga My Hero Academia tomo 5', cantidad: 18, precio: 7900.00, imagen_url: 'BokunDeku.jpg', proveedor: 2 },
        { codigo: 6, descripcion: 'Cartas Pokémon TCG booster', cantidad: 40, precio: 5600.00, imagen_url: 'Pokemon.jpg', proveedor: 4 },
    ],
    opiniones: [
        { id: 1, nombre: 'Maria Lopez', avatar: 'persona1-f.jpg', texto: 'Me encanta la variedad de productos, especialmente las figuras de anime. Muy recomendable.', fecha: '2025-03-15' },
        { id: 2, nombre: 'Ana Garcia', avatar: 'persona2-f.jpg', texto: 'Los precios son accesibles y el envío llegó antes de lo esperado. Volveré a comprar.', fecha: '2025-04-02' },
        { id: 3, nombre: 'Carlos Perez', avatar: 'persona3-m.jpg', texto: 'Buena atención al cliente. Me ayudaron a encontrar un manga agotado en otros lados.', fecha: '2025-05-20' },
        { id: 4, nombre: 'Lucia Martinez', avatar: 'persona4-f.jpg', texto: 'La página es fácil de navegar y los productos son de calidad. Súper satisfecha.', fecha: '2025-06-10' },
    ],
};
