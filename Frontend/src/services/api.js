const ApiURL = '159.223.109.87:8000/procesar_informacion';

export const EnviarDatos = async (data, headers) => {
    try {
        const response = await fetch(ApiURL, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        console.log('Estatus', response.status);

        if (!response.ok) {
            throw new Error(`Error al enviar datos: ${response.statusText}`);
        }

        const responseData = await response.json();

        if (!responseData) {
            throw new Error('Respuesta vacía del servidor');
        }

        return responseData;
    } catch (error) {
        console.error('No se pudo enviar data a la API:', error);
        throw error;
    }
};
