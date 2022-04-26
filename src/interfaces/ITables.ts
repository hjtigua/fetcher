export interface ITables {
    id:         number;
    numero:     number;
    tamano:     number;
    created_at: string;
    updated_at: string;
    reservas:   IReserva[];
}

export interface IReserva {
    name:                 string;
    id_cedula:            number;
    personas_reservacion: number;
    fecha_hora_inicio:    string;
    fecha_hora_final:     string;
    estado:               string;
    alerta:               string;
}
