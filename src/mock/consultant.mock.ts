import { Consultant } from '../interfaces/Consultant.interface'

export const consultant1: Consultant = {
	avatar:
		"https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'",
	id: '1',
	firstName: 'john',
	lastName: 'doe',
}

export const consultant2: Consultant = {
	avatar:
		"https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'",
	id: '2',
	firstName: 'john',
	lastName: 'doe2',
}

export const consultant3: Consultant = {
	avatar:
		"https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'",
	id: '3',
	firstName: 'john',
	lastName: 'doe3',
}

const consultants: Consultant[] = [consultant1, consultant2, consultant3]

export default consultants
