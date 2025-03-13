// src/stores/interface.ts
export interface AppState {
  theme: 'light' | 'dark'
  userPreferences: {
    fontSize: number
    locale: 'zh' | 'en'
  }
}

