"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlreadyRegisteredException = void 0;
const common_1 = require("@nestjs/common");
class AlreadyRegisteredException extends common_1.HttpException {
    constructor() {
        super('User is alredy registered', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.AlreadyRegisteredException = AlreadyRegisteredException;
//# sourceMappingURL=already-registered.exception.js.map