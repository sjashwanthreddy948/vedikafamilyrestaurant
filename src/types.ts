export type DietaryType = 'veg' | 'non-veg' | 'egg';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  dietary: DietaryType;
  description?: string;
  isPopular?: boolean;
  portionNote?: string;
  image?: string;
}

export type MenuCategory =
  | 'CHICKEN BIRYANI'
  | 'NON-VEG BIRYANI'
  | 'VEG BIRYANI'
  | 'NON-VEG STARTERS'
  | 'VEG STARTERS'
  | 'SOUTH INDIAN STARTER'
  | 'TANDOORI NON-VEG'
  | 'TANDOORI VEG'
  | 'NON-VEG CURRIES'
  | 'VEG CURRIES'
  | 'FRIED RICE'
  | 'HEALTHY RICE'
  | 'NOODLES'
  | 'ROTI'
  | 'SOUPS';

export interface RestaurantInfo {
  name: string;
  tagline: string;
  subHeadline: string;
  address: {
    line1: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  phoneDisplay: string;
  openingHours: {
    display: string;
    openHour: number;
    openMinute: number;
    closeHour: number;
    closeMinute: number;
    note: string;
  };
  cuisine: string[];
  averageCostForTwo: string;
  diningRating: {
    score: number;
    count: number;
    source: string;
  };
  fssaiLicense: string;
  zomatoOrderUrl: string;
  mapsDirectionsUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ambience' | 'lawn' | 'food';
  image: string;
  description: string;
  isAuthenticLocationPhoto?: boolean;
}
