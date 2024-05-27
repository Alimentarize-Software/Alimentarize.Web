export interface InstitutionResponse {
  data: Institution[];
}

export interface InstitutionCard {
  id: string;
  name: string;
  profileImage: string;
  categories: Categories[];
}

export interface Categories {
  name: string;
  categoryAlias: string;
  color: string;
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
  images: string[];
  address: string;
  phoneNumber: string;
  addressAlias: string;
  complement: string;
  createdAt: Date;
  profileImage: null;
  donationImage: null;
  about: About;
  aboutProjects: AboutProject[];
  categories: Categories[];
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
