export interface ListaasignaturaInterface{
      
        id: string;
        nombre: string;
        profesores: {
            id: string;
            nombre: string;
        },
        cursos: {
            id: string;
            grado: string;
            salon: string;
            colegio: {
                id: string;
                nombre: string;
            }
        },
        estudiantes: [
            {
                id: string;
                nombre: string;
            },
            {
                id: string;
                nombre: string;
            },
            {
                id: string;
                nombre: string;
            }
        ]
}