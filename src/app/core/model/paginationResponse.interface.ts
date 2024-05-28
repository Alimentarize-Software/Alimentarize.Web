import { Donor } from './institution';

export interface Receiver {
  id: number;
  email: string;
  name: string;
}

export interface ReceiverCategory {
  receiverId: number;
  categoryId: number;
  category: {
    id: number;
    name: string;
    categoryAlias: string;
    color: string;
    createdAt: string;
  };
}

export interface DonationItem {
  id: number;
  donorId: number;
  receiverId: number;
  createdAt: string;
  weight: number;
  status: string;
  donor: Donor;
  foodType: string;
  receiver: Receiver;
  receiverCategories: ReceiverCategory[];
}

export interface DonationsItem {
  donations: DonationItem[];
  totalPages: number;
  page: number;
  limit: number;
}

export interface PaginationResponse {
  data: DonationsItem;
}
