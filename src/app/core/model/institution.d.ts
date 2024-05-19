export interface InstitutionResponse {
  data: InstitutionCard[];
}

export interface InstitutionCard {
  id: string;
  name: string;
  profileImage: string;
  categories: Categories[];
}

export interface Categories {
  name: string;
  category: string;
}

export interface Institution {
  id: number;
  email: string;
  name: string;
  isActive: boolean;
  cep: string;
  numberAddress: number;
  city: string;
  state: string;
  neighborhood: string;
  address: string;
  phoneNumber: string;
  addressAlias: string;
  complement: string;
  createdAt: Date;
  profileImage: null;
  donationImage: null;
  About: About;
  AboutProjects: AboutProject[];
}

export interface About {
  id: number;
  text: string;
  receiverId: number;
}

export interface AboutProject {
  id: number;
  text: string;
  image: string;
  title: string;
  receiverId: number;
}
