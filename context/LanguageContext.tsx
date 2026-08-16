"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";
import { dictionary } from "../locales/dictionary";

type Language = "vi" | "en";
type Dictionary = typeof dictionary["vi"];

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "vi" ? "en" : "vi"));
  };

  const dict = dictionary[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
