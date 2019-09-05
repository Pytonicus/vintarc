export interface Sistema {
    modelo: string,
    marca: string,
    lanzamiento: string,
    cese: string,
    generacion: string,
    ventas: number,
    titulosOficiales: number,
    soporte: string,
    procesador: string,
    graficos: string,
    sonido: string,
    ram: string,
    imagen: string,

}

export interface Videojuego {
    titulo: string,
    genero: string,
    desarrollador: string,
    lanzamiento: string,
    jugadores: string,
    idiomas: string,
    sipnosis: string,
    portada: string,
    captura: string,
    video: string,
}