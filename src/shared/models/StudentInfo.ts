interface Guardian {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  tax_id: string;
}

interface School {
  id: string;
  name: string;
  logo: string | null;
  country: string;
  city: string | null;
  address: string;
  zip_code: string | null;
}

interface StudentInfo {
  id: string;
  first_name: string;
  last_name: string;
  guardian: Guardian;
  cohort: string;
  school: School;
  monthly_grant_type: any | null;
  monthly_grant_value: any | null;
  inscription_grant_value: any | null;
  inscription_grant_type: any | null;
}

export type { StudentInfo };
