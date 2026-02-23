type Address = {
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
};

export type ListingItem = {
  id: string;
  address: Address;
  monthlyRent: number;
  securityDeposit: number;
  requiredIncomeMultiplier: number;
  petsAllowed: boolean;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl: string;
};

export const LISTING_ITEMS: ListingItem[] = [
  {
    id: "in-001",
    address: {
      street: "1202 N Pennsylvania St",
      city: "Indianapolis",
      state: "IN",
      country: "USA",
      zip: "46202",
    },
    monthlyRent: 1450,
    securityDeposit: 1000,
    requiredIncomeMultiplier: 3,
    petsAllowed: true,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 750,
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "in-002",
    address: {
      street: "450 S Walnut St",
      city: "Bloomington",
      state: "IN",
      country: "USA",
      zip: "47401",
    },
    monthlyRent: 1800,
    securityDeposit: 1800,
    requiredIncomeMultiplier: 2.5,
    petsAllowed: false,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1100,
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "in-003",
    address: {
      street: "1021 Range Line Rd",
      city: "Carmel",
      state: "IN",
      country: "USA",
      zip: "46032",
    },
    monthlyRent: 2200,
    securityDeposit: 1500,
    requiredIncomeMultiplier: 3.5,
    petsAllowed: true,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1850,
    imageUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "in-004",
    address: {
      street: "815 W Berry St",
      city: "Fort Wayne",
      state: "IN",
      country: "USA",
      zip: "46802",
    },
    monthlyRent: 950,
    securityDeposit: 950,
    requiredIncomeMultiplier: 3,
    petsAllowed: true,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 680,
    imageUrl:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "in-005",
    address: {
      street: "521 Main St",
      city: "Lafayette",
      state: "IN",
      country: "USA",
      zip: "47901",
    },
    monthlyRent: 1200,
    securityDeposit: 800,
    requiredIncomeMultiplier: 3,
    petsAllowed: false,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 950,
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "in-006",
    address: {
      street: "210 S Michigan St",
      city: "South Bend",
      state: "IN",
      country: "USA",
      zip: "46601",
    },
    monthlyRent: 1100,
    securityDeposit: 1100,
    requiredIncomeMultiplier: 2.8,
    petsAllowed: true,
    bedrooms: 2,
    bathrooms: 1.5,
    squareFeet: 1050,
    imageUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "in-007",
    address: {
      street: "1500 Riverside Dr",
      city: "Evansville",
      state: "IN",
      country: "USA",
      zip: "47713",
    },
    monthlyRent: 1350,
    securityDeposit: 1000,
    requiredIncomeMultiplier: 3,
    petsAllowed: true,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1400,
    imageUrl:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "in-008",
    address: {
      street: "302 Virginia Ave",
      city: "Indianapolis",
      state: "IN",
      country: "USA",
      zip: "46204",
    },
    monthlyRent: 2600,
    securityDeposit: 2000,
    requiredIncomeMultiplier: 3,
    petsAllowed: true,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1250,
    imageUrl:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "in-009",
    address: {
      street: "742 Broad Ripple Ave",
      city: "Indianapolis",
      state: "IN",
      country: "USA",
      zip: "46220",
    },
    monthlyRent: 1650,
    securityDeposit: 1200,
    requiredIncomeMultiplier: 3,
    petsAllowed: true,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1100,
    imageUrl:
      "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "in-010",
    address: {
      street: "9800 Valparaiso Blvd",
      city: "Valparaiso",
      state: "IN",
      country: "USA",
      zip: "46383",
    },
    monthlyRent: 1550,
    securityDeposit: 1550,
    requiredIncomeMultiplier: 3,
    petsAllowed: false,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    imageUrl:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
];
