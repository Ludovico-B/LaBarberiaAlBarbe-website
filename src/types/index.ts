export interface Service {
  id: string;
  name: string;
  price?: string;
  description?: string;
}

export interface ServiceCategory {
  title: string;
  services: Service[];
}

export interface ContactInfo {
  address: string;
  city: string;
  phone: string;
  instagram: string;
  mapsLink: string;
}

export interface OpeningHours {
  days: string;
  hours: string;
}
