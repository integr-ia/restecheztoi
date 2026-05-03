import { useEffect, useState } from "react";
import {
  fetchWeeklyMenus,
  sanityEnabled,
  type SanityWeeklyMenus,
} from "@/lib/sanity";

const FALLBACK_WEEKLY_MENUS: SanityWeeklyMenus = {
  _id: "weeklyMenus",
  currentWeekLabel: "27 avril – 1er mai 2026",
  currentWeek: [
    {
      day: "Lundi",
      dish: "Suprême de poulet basquaise, riz pilaf",
    },
    {
      day: "Mardi",
      dish: "Aubergines farcies, mousseline de pommes de terre sauce brune",
    },
    {
      day: "Mercredi",
      dish: "Risotto aux asperges",
    },
    {
      day: "Jeudi",
      dish: "Lasagne",
    },
    {
      day: "Vendredi",
      dish: "Mousse de poisson et son beurre blanc, légumes glacés et écume de pommes de terre",
    },
  ],
  nextWeekLabel: "4 – 8 mai 2026",
  nextWeek: [
    {
      day: "Lundi",
      dish: "Riz sauté façon asiatique",
    },
    {
      day: "Mardi",
      dish: "Émincé de bœuf, gratin de pommes de terre et duo de légumes",
    },
    {
      day: "Mercredi",
      dish: "Salade fraîche végétarienne, blanc de bar",
    },
    {
      day: "Jeudi",
      dish: "Blanquette de veau, pommes de terre",
    },
    {
      day: "Vendredi",
      dish: "Saucisse vaudoise",
    },
  ],
};

interface UseWeeklyMenusResult {
  weeklyMenus: SanityWeeklyMenus;
  isLoading: boolean;
  /** True si le contenu vient des données par défaut (pas de Sanity). */
  isFallback: boolean;
}

/**
 * Récupère les menus hebdomadaires de livraison avec fallback automatique
 * sur les données statiques si Sanity n'est pas configuré.
 */
export function useWeeklyMenus(): UseWeeklyMenusResult {
  const [weeklyMenus, setWeeklyMenus] = useState<SanityWeeklyMenus>(
    FALLBACK_WEEKLY_MENUS
  );
  const [isLoading, setIsLoading] = useState<boolean>(sanityEnabled);
  const [isFallback, setIsFallback] = useState<boolean>(!sanityEnabled);

  useEffect(() => {
    if (!sanityEnabled) {
      setWeeklyMenus(FALLBACK_WEEKLY_MENUS);
      setIsFallback(true);
      setIsLoading(false);
      return;
    }
    let cancelled = false;
    setIsLoading(true);
    fetchWeeklyMenus()
      .then((data) => {
        if (cancelled) return;
        if (data) {
          setWeeklyMenus(data);
          setIsFallback(false);
        } else {
          setWeeklyMenus(FALLBACK_WEEKLY_MENUS);
          setIsFallback(true);
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { weeklyMenus, isLoading, isFallback };
}
