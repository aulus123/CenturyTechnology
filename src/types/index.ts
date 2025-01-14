export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  services: string[];
}