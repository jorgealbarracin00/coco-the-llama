export interface HomeHeader {
  cartCount: number;
}

export interface Hero {
  title: string;
  subtitle: string;
  description: string;
}

export interface HomeActionCard {
  icon: string;
  title: string;
  subtitle: string;
  active: boolean;
}

export interface TrustItem {
  icon: string;
  label: string;
}

export interface BottomNavigation {
  selectedIndex: number;
}

export interface Home {
  header: HomeHeader;
  hero: Hero;
  actionCards: HomeActionCard[];
  trustItems: TrustItem[];
  bottomNavigation: BottomNavigation;
}