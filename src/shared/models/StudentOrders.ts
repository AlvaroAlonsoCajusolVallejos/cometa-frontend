interface Payin {
  id: string;
  status: string;
  created: string;
}

interface StudentOrders {
  id: string;
  concept: string;
  name: string;
  price: string;
  price_currency: string;
  due: string;
  status: string;
  interest: string | null;
  pending: boolean;
  payin: Payin | null;
}

interface QuotesForPaid {
  id: string;
  value: boolean
}
export type { Payin, StudentOrders, QuotesForPaid };
