"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotRegisteredException = void 0;
const common_1 = require("@nestjs/common");
class NotRegisteredException extends common_1.HttpException {
    constructor() {
        super('User is not registered', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.NotRegisteredException = NotRegisteredException;
//# sourceMappingURL=not-registered.exception.js.map