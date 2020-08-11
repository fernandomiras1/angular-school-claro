export class Contact {
  constructor(
      public id: number,
      public name: string,
      public picture?: string,
      public phones?: ContactPhoneI[],
      public email?: string,
      public direction?: string
  ) { }
}

// Diferencia entre una Clase y una Interface

// Interface: La interface define la estructura que debe tener un objeto.

// Clases: no solo definen la estructura, sino que pueden definir el contenido de las funciones.
// Y se pueden instanciar con un constructor.


export interface ContactPhoneI {
  type: PhoneType;
  number: number;
}

export enum PhoneType {
  mobile = 'mobile',
  home = 'home',
  work = 'work'
}
