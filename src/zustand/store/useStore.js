import { create } from "zustand";
import en from "../../locales/en.json";
import ru from "../../locales/ru.json";

const translations = {
  en,
  ru,
};

const useStore = create((set) => ({
  language: "ru",
  properties: [],
  translations: translations["ru"],
  isSidebarOpen: false,

  setLanguage: (lang) => set({ language: lang }),

  setProperties: (data) => set({ properties: data }),

  setTranslations: (data) => set({ translations: data }),

  toggleLanguage: () =>
    set((state) => {
      const newLanguage = state.language === "en" ? "ru" : "en";
      return {
        language: newLanguage,
        translations: translations[newLanguage],
      };
    }),

  fetchProperties: async () => {
    try {
      const response = await fetch("/api/properties");
      const data = await response.json();
      set({ properties: data });
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  },
  toggleSidebar: (isOpen) =>
    set((state) => ({
      isSidebarOpen: isOpen,
    })),
}));

export default useStore;
