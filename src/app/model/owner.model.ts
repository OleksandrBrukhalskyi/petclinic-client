export class Owner {
	id: any;
	surname: string;
	firstname: string;
	patronymic: string;
	homeAddress: string;
	phoneNumber: string;
	

	constructor(surname: string,
		firstname: string,
		patronymic: string,
		homeAddress: string,
		phoneNumber: string
		) {
			this.surname = surname;
			this.firstname = firstname;
			this.patronymic = patronymic;
			this.homeAddress = homeAddress;
			this.phoneNumber = phoneNumber;
			

	}
	
}