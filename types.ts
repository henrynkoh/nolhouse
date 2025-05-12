// Common types used across components

export interface CategoryItem {
    imageUrl: string;
    title: string;
  }
  
  export interface LiveItem {
    imageUrl: string;
    status: string;
    title: string;
    time: string;
  }
  
export interface AccommodationItem {
  id: string;
  imageUrl: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  discountRate?: number;
  originalPrice?: number;
  tags?: string[];
  amenities?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface FilterOptions {
  priceRange: [number, number];
  rating: number | null;
  amenities: string[];
  accommodationType: string[];
}

export interface SearchParams {
  location?: string;
  checkInDate?: string;
  checkOutDate?: string;
  guests?: number;
  filters?: FilterOptions;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  capacity: number;
  price: number;
  amenities: string[];
  imageUrl: string;
}

export interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

export interface BookingDetails {
  id: string;
  userId: string;
  accommodationId: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentInfo: PaymentInfo;
  createdAt: string;
}
  