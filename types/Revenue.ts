export type Offer = {
  validation: number;
  unitCost: number;
  item: string;
  limit: number;
  category: string;
}

export type Validation = {
  value: number;
  amount: number;
  total: number;
  offer: Offer,
  createdAt: string;
};

export type Revenue = {
  net: number;
  gross: number;
  spent: number;
  validations: Validation[];
  offer: Offer;
};
