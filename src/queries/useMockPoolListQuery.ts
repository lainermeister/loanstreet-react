import { useState } from "react";
import { Pool } from "../types/";
import { PoolStatus } from "../types/poolStatus";

const mockData: Pool[] = [
  {
    id: 1,
    name: "Pool 1",
    status: PoolStatus.AVAILABLE_FOR_SALE,
    principalAmount: "120.00",
    annualizedYield: "0.06",
    creditScore: "760",
    price: "1.025",
    weightedAverageLife: "4.09"
  },
  {
    id: 2,
    name: "Pool 2",
    status: PoolStatus.AVAILABLE_FOR_SALE,
    principalAmount: "20000.00",
    annualizedYield: "0.10",
    creditScore: "730",
    price: "1.01",
    weightedAverageLife: "3.09"
  },
  {
    id: 3,
    name: "Pool 3",
    status: PoolStatus.SOLD,
    closingDate: new Date("2021-10-20"),
    principalAmount: "20000.00",
    annualizedYield: "0.10",
    creditScore: "730",
    price: "1.01",
    weightedAverageLife: "3.09"
  }
];

type UseMockPoolListQuery = {
  isLoading: boolean;
  data?: Pool[];
};

export function useMockPoolListQuery(): UseMockPoolListQuery {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 2000);

  return {
    isLoading,
    data: isLoading ? undefined : mockData
  };
}
