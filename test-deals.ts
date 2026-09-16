import { prisma } from "./src/lib/prisma";

async function main() {
    const dealsInWorkspace = await prisma.deal.findMany({
        where: { workspaceId: "cmnnq7qzw001m4mkx4cmiwqud" }
    });
    console.log("Deals in workspace 'cmnnq7qzw001m4mkx4cmiwqud':", dealsInWorkspace.length);

    const dealsWithoutWorkspace = await prisma.deal.findMany({
        where: { workspaceId: null }
    });
    console.log("Deals with workspaceId NULL:", dealsWithoutWorkspace.length);

    const allDeals = await prisma.deal.findMany();
    console.log("Total deals:", allDeals.length);
    
    if (allDeals.length > 0) {
        console.log("Workspace IDs of first few deals:", allDeals.slice(0, 5).map(d => d.workspaceId));
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
