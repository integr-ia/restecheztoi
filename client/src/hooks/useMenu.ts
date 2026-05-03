import { useEffect, useState } from "react";
import {
  fetchAllMenus,
  fetchMenuBySlug,
  sanityEnabled,
  type SanityMenu,
} from "@/lib/sanity";
import { DEFAULT_MENU_LIST, DEFAULT_MENUS } from "@/lib/defaultMenus";

interface UseMenuResult {
  menu: SanityMenu;
  isLoading: boolean;
  /** True si le contenu vient des données par défaut (pas de Sanity). */
  isFallback: boolean;
}

/**
 * Récupère un menu par slug avec fallback automatique sur les données
 * statiques en cas d'erreur ou si Sanity n'est pas configuré.
 */
export function useMenu(slug: SanityMenu["slug"]): UseMenuResult {
  const fallback = DEFAULT_MENUS[slug];
  const [menu, setMenu] = useState<SanityMenu>(fallback);
  const [isLoading, setIsLoading] = useState<boolean>(sanityEnabled);
  const [isFallback, setIsFallback] = useState<boolean>(!sanityEnabled);

  useEffect(() => {
    if (!sanityEnabled) {
      setMenu(fallback);
      setIsFallback(true);
      setIsLoading(false);
      return;
    }
    let cancelled = false;
    setIsLoading(true);
    fetchMenuBySlug(slug)
      .then((data) => {
        if (cancelled) return;
        if (data) {
          setMenu(data);
          setIsFallback(false);
        } else {
          setMenu(fallback);
          setIsFallback(true);
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [slug, fallback]);

  return { menu, isLoading, isFallback };
}

interface UseMenusResult {
  menus: SanityMenu[];
  isLoading: boolean;
  isFallback: boolean;
}

/**
 * Récupère tous les menus pour la page « Nos menus ».
 */
export function useMenus(): UseMenusResult {
  const [menus, setMenus] = useState<SanityMenu[]>(DEFAULT_MENU_LIST);
  const [isLoading, setIsLoading] = useState<boolean>(sanityEnabled);
  const [isFallback, setIsFallback] = useState<boolean>(!sanityEnabled);

  useEffect(() => {
    if (!sanityEnabled) {
      setMenus(DEFAULT_MENU_LIST);
      setIsFallback(true);
      setIsLoading(false);
      return;
    }
    let cancelled = false;
    setIsLoading(true);
    fetchAllMenus()
      .then((data) => {
        if (cancelled) return;
        if (data && data.length > 0) {
          setMenus(data);
          setIsFallback(false);
        } else {
          setMenus(DEFAULT_MENU_LIST);
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

  return { menus, isLoading, isFallback };
}
