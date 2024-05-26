import { Institution } from './institution';

export interface HistoryDonation {
  id: number;
  donorId: number;
  receiverId: number;
  createdAt: string;
  weight: number;
  status: string;
  foodNames: string[];
  receiver: Institution;
}

export interface HistoryDonationResponse {
  data: { donations: HistoryDonation[] };
}
