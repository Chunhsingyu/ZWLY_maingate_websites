// src/stores/appStore.ts
import { defineStore } from 'pinia';
export const useAppStore = defineStore('app', {
    state: () => ({
        theme: 'light',
        userPreferences: {
            fontSize: 16,
            locale: 'zh'
        }
    })
});
