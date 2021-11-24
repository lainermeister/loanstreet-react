import { PoolStatus } from "./poolStatus";
export type Pool = {
  id: number;
  name: string;
  status: PoolStatus;
  closingDate?: Date;
  principalAmount?: string;
  annualizedYield?: string;
  creditScore?: string;
  price?: string;
  weightedAverageLife?: string;
};
