// src/stores/appStore.ts
import { defineStore } from 'pinia'

interface AppState {
  theme: 'light' | 'dark';
  userPreferences: {
    fontSize: number;
    locale: 'zh' | 'en';
  };
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    theme: 'light',
    userPreferences: {
      fontSize: 16,
      locale: 'zh'
    }
  })
});