import {PrismaClient} from "@prisma/client";
import { msi_pc } from "../utils/pc";

const prisma = new PrismaClient();

export const populate = async () =>{
	for (const pc of msi_pc) {
		try {
			const results = await prisma.MsiPc.create({
				data: {
					name: pc.name,
					link: pc.link,
					price: pc.price,
					description: pc.description,
				}
			});
			console.log('Records added');
		} catch (e) {
			console.log('Error insert records: ', e);
		}
	}

}