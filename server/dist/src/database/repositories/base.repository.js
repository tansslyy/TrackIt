"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    delegate;
    constructor(delegate) {
        this.delegate = delegate;
    }
    findAll() {
        return this.delegate.findMany();
    }
    findById(id) {
        return this.delegate.findUnique({ where: { id } });
    }
    create(data) {
        return this.delegate.create({ data });
    }
    update(id, data) {
        return this.delegate.update({ where: { id }, data });
    }
    delete(id) {
        return this.delegate.delete({ where: { id } });
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map