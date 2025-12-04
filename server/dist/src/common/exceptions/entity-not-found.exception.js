"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class EntityNotFoundException extends common_1.HttpException {
    constructor(entity) {
        super(`${entity} with such id is not found`, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.EntityNotFoundException = EntityNotFoundException;
//# sourceMappingURL=entity-not-found.exception.js.map