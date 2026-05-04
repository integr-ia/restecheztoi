import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

/**
 * Type minimal pour une image Sanity. On définit notre propre alias
 * plutôt que d'importer depuis "@sanity/image-url/lib/types/types"
 * (chemin interne fragile). Toute valeur acceptée par
 * `imageUrlBuilder().image()` est compatible.
 */
type SanityImageSource = {
  asset?: { _ref?: string; _id?: string };
  _ref?: string;
  _id?: string;
} | string | null | undefined;

/**
 * Client Sanity côté navigateur.
 *
 * Variables d'environnement attendues (à définir dans `.env`) :
 *   VITE_SANITY_PROJECT_ID   - ID du projet Sanity
 *   VITE_SANITY_DATASET      - dataset (par défaut "production")
 *
 * Si `VITE_SANITY_PROJECT_ID` n'est pas défini, on retourne `null` :
 * les pages affichent alors les données statiques de secours
 * (cf. `client/src/lib/defaultMenus.ts`).
 */

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.VITE_SANITY_DATASET as string | undefined) || "production";

export const sanityEnabled = Boolean(projectId);

export const sanity: SanityClient | null = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-10-01",
      useCdn: true,
    })
  : null;

const builder = sanity ? imageUrlBuilder(sanity) : null;

export function urlForImage(source: SanityImageSource): string | null {
  if (!source || !builder) return null;
  try {
    return builder.image(source as never).auto("format").fit("max").url();
  } catch {
    return null;
  }
}

/**
 * Helper pour construire une URL d'image avec une largeur précise
 * (utile pour les images responsives).
 */
export function urlForImageSized(
  source: SanityImageSource,
  width: number,
  height?: number
): string | null {
  if (!source || !builder) return null;
  try {
    let img = builder.image(source as never).auto("format").width(width);
    if (height) img = img.height(height);
    return img.url();
  } catch {
    return null;
  }
}

// === Types ===

export interface SanityMenuCourse {
  name: string;
  description: string;
}

export interface SanityMenuVariant {
  title: string;
  isVegetarian?: boolean;
  courses: SanityMenuCourse[];
}

export interface SanityMenu {
  _id: string;
  slug: "decouverte" | "classique" | "hautdegamme";
  displayOrder?: number;
  title: string;
  subtitle?: string;
  price: number;
  servicesLabel: string;
  bannerImage?: SanityImageSource;
  thumbnailImage?: SanityImageSource;
  variants: SanityMenuVariant[];
  footerNote?: string;
}

// === Requêtes GROQ ===

const MENU_PROJECTION = `{
  _id,
  slug,
  displayOrder,
  title,
  subtitle,
  price,
  servicesLabel,
  bannerImage,
  thumbnailImage,
  "variants": coalesce(variants, [])[]{
    title,
    isVegetarian,
    "courses": coalesce(courses, [])[]{
      name,
      description
    }
  },
  footerNote
}`;

/**
 * Récupère un menu par son slug. Retourne `null` si Sanity n'est
 * pas configuré ou si le menu n'existe pas.
 */
export async function fetchMenuBySlug(
  slug: SanityMenu["slug"]
): Promise<SanityMenu | null> {
  if (!sanity) return null;
  try {
    const result = await sanity.fetch<SanityMenu | null>(
      `*[_type == "menu" && slug == $slug][0]${MENU_PROJECTION}`,
      { slug }
    );
    return result ?? null;
  } catch (err) {
    console.warn("[Sanity] fetchMenuBySlug a échoué :", err);
    return null;
  }
}

/**
 * Récupère tous les menus, ordonnés par `displayOrder`.
 * Utilisé sur la page "Nos Menus".
 */
export async function fetchAllMenus(): Promise<SanityMenu[]> {
  if (!sanity) return [];
  try {
    const result = await sanity.fetch<SanityMenu[]>(
      `*[_type == "menu"] | order(displayOrder asc, title asc)${MENU_PROJECTION}`
    );
    return result ?? [];
  } catch (err) {
    console.warn("[Sanity] fetchAllMenus a échoué :", err);
    return [];
  }
}

// === Types : service de livraison ===

// === Types : service de livraison ===

export interface DeliveryServiceStep {
  icon: string;
  title: string;
  description: string;
}

export interface SanityDeliveryServiceSchedule {
  deliveryDay: string;
  orderDeadline: string;
  description?: string;
}

export interface SanityDeliveryServiceSpecializedMenu {
  icon: string;
  label: string;
  description: string;
}

export interface SanityDeliveryService {
  _id: string;
  title: string;
  tagline?: string;
  pricePerMeal: number;
  howItWorks: DeliveryServiceStep[];
  contactEmail?: string;
  deliverySchedule: SanityDeliveryServiceSchedule[];
  specializedMenus?: SanityDeliveryServiceSpecializedMenu[];
}

// === Types : menus hebdomadaires ===

export interface DailyMeal {
  day: string;
  dish: string;
  description?: string;
}

export interface SanityWeeklyMenus {
  _id: string;
  currentWeekLabel: string;
  currentWeek: DailyMeal[];
  nextWeekLabel: string;
  nextWeek: DailyMeal[];
}

// === Requêtes GROQ : service de livraison ===

const DELIVERY_SERVICE_PROJECTION = `{
  _id,
  title,
  tagline,
  pricePerMeal,
  contactEmail,
  "howItWorks": coalesce(howItWorks, [])[]{
    icon,
    title,
    description
  },
  "deliverySchedule": coalesce(deliverySchedule, [])[]{
    deliveryDay,
    orderDeadline,
    description
  },
  "specializedMenus": coalesce(specializedMenus, [])[]{
    icon,
    label,
    description
  }
}`;

export async function fetchDeliveryService(): Promise<SanityDeliveryService | null> {
  if (!sanity) return null;
  try {
    const result = await sanity.fetch<SanityDeliveryService | null>(
      `*[_type == "deliveryService"][0]${DELIVERY_SERVICE_PROJECTION}`
    );
    return result ?? null;
  } catch (err) {
    console.warn("[Sanity] fetchDeliveryService a échoué :", err);
    return null;
  }
}

// === Requêtes GROQ : menus hebdomadaires ===

const WEEKLY_MENUS_PROJECTION = `{
  _id,
  currentWeekLabel,
  "currentWeek": coalesce(currentWeek, [])[]{
    day,
    dish,
    description
  },
  nextWeekLabel,
  "nextWeek": coalesce(nextWeek, [])[]{
    day,
    dish,
    description
  }
}`;

export async function fetchWeeklyMenus(): Promise<SanityWeeklyMenus | null> {
  if (!sanity) return null;
  try {
    const result = await sanity.fetch<SanityWeeklyMenus | null>(
      `*[_type == "weeklyMenus"][0]${WEEKLY_MENUS_PROJECTION}`
    );
    return result ?? null;
  } catch (err) {
    console.warn("[Sanity] fetchWeeklyMenus a échoué :", err);
    return null;
  }
}
