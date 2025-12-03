"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdenticalPasswordException = void 0;
const common_1 = require("@nestjs/common");
class IdenticalPasswordException extends common_1.HttpException {
    constructor() {
        super('New and old password must be different', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.IdenticalPasswordException = IdenticalPasswordException;
//# sourceMappingURL=identical-password.exception.js.map