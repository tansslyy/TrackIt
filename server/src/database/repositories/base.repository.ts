export class BaseRepository<T> {
  constructor(protected delegate: any) {}

  findAll(): Promise<T[]> {
    return this.delegate.findMany();
  }

  findById(id: string): Promise<T | null> {
    return this.delegate.findUnique({ where: { id } });
  }

  create(data: any): Promise<T> {
    return this.delegate.create({ data });
  }

  update(id: string, data: any): Promise<T> {
    return this.delegate.update({ where: { id }, data });
  }

  delete(id: string): Promise<T> {
    return this.delegate.delete({ where: { id } });
  }
}
