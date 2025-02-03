
export interface PersonalData {
    home_address: string;
    postal_code: string;
    phone_number: string;
}

export interface CommercialData {
    company_address: string;
    postal_code: string;
    vat: number;
    website: string;
}

export type ContactData = PersonalData | CommercialData;

export interface Contacts {
    contact_type: "PERSONAL" | "COMMERCIAL";
    name: string;
    created_at: string;
    data: ContactData;
}


export const contactsData: Contacts[] = [
		{
			"contact_type": "PERSONAL",
			"name": "Jack Dorse",
			"created_at": "2024-12-23T10:22:00.123Z",
			"data": {
				"home_address": "Reek Street",
				"postal_code": "123",
				"phone_number": "+444321123412"
			}
		}, 
		{
			"contact_type": "COMMERCIAL",
			"name": "Olidua Inc.",
			"created_at": "2024-12-09T09:54:00.000Z",
			"data": {
				"company_address": "Reek Street",
				"postal_code": "123",
				"vat": 123456,
				"website": "https://www.olidua.com"
			}
		}
	]

export function fetchContacts(): Promise<Contacts[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(contactsData)
            } catch(error) {
                reject(new Error("Failed to fetch contacts!!"))
            }
        }, 500); //simulating network delay simply
    });
}