"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const users = await prisma.user.findMany();
    console.log('✅ Users:', users);
}
main()
    .catch((e) => console.error('❌ Error:', e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=test-prisma.js.map