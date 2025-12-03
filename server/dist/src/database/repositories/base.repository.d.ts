export declare class BaseRepository<T> {
    protected delegate: any;
    constructor(delegate: any);
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    create(data: any): Promise<T>;
    update(id: string, data: any): Promise<T>;
    delete(id: string): Promise<T>;
}
