
export enum VaultTab {
  PASSWORDS = 'passwords',
  CREDIT_CARDS = 'credit-cards',
  SECURE_NOTES = 'secure-notes'
}

export interface VaultItem {
  id: string;
  title: string;
  subtitle: string;
  type: VaultTab;
  updatedAt: string;
  icon: string;
}

export interface Activity {
  id: string;
  title: string;
  timestamp: string;
  device: string;
  active: boolean;
}
