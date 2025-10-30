import { PrismaService } from '../prisma.service';

export class BaseRepository<T> {
  constructor(
    private model: any,
    protected prisma: PrismaService,
  ) {}

  async findAll(): Promise<T[]> {
    return this.prisma[this.model].findMany();
  }

  async findById(id: string): Promise<T | null> {
    return this.prisma[this.model].findUnique({ where: { id } });
  }

  async create(data: any): Promise<T> {
    return this.prisma[this.model].create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma[this.model].update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma[this.model].delete({ where: { id } });
  }
}
