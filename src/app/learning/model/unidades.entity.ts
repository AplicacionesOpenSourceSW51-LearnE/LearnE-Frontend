export class Unidad {
  id: string;
  name: string;
  url: string;

  constructor(unidades: { id?: string, name?: string, url?: string } = {}) {
    this.id = unidades.id || '';
    this.name = unidades.name || '';
    this.url = unidades.url || '';
  }
}
