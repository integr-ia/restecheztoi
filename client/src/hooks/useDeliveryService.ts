import { useEffect, useState } from "react";
import {
  fetchDeliveryService,
  sanityEnabled,
  type SanityDeliveryService,
} from "@/lib/sanity";

const FALLBACK_DELIVERY_SERVICE: SanityDeliveryService = {
  _id: "deliveryService",
  title: "Bien manger, sans contrainte",
  tagline: "Des repas faits maison, livrés chaque midi du lundi au vendredi à Lausanne.",
  pricePerMeal: 19,
  howItWorks: [
    {
      icon: "🍳",
      title: "Des repas faits maison",
      description:
        "Chaque repas est cuisiné le matin même par le chef Malik avec des produits frais et de saison.",
    },
    {
      icon: "📅",
      title: "Menus publiés chaque semaine",
      description:
        "Consultez le menu de la semaine en cours et celui de la semaine prochaine pour planifier vos commandes.",
    },
    {
      icon: "🚗",
      title: "Livraison chez vous",
      description:
        "Commandez par email avant le vendredi soir. La livraison est effectuée à domicile, du lundi au vendredi.",
    },
    {
      icon: "🍽️",
      title: "Récupérez et dégustez",
      description:
        "Réchauffez en quelques minutes et savourez un repas équilibré, sans effort et sans compromis.",
    },
  ],
  contactEmail: "contact@restecheztoi.com",
  deliverySchedule: [
    {
      deliveryDay: "Lundi",
      orderDeadline: "vendredi",
      description: "Commandez avant le vendredi pour recevoir votre repas le lundi.",
    },
    {
      deliveryDay: "Mercredi",
      orderDeadline: "lundi",
      description: "Commandez avant le lundi pour recevoir votre repas le mercredi.",
    },
  ],
  specializedMenus: [
    {
      icon: "🏋️",
      label: "Sportif",
      description: "Menus riches en protéines, adaptés à votre entraînement",
    },
    {
      icon: "🥗",
      label: "Végétarien",
      description: "Menus équilibrés sans viande ni poisson",
    },
    {
      icon: "⚖️",
      label: "Perte de poids",
      description: "Repas contrôlés en calories, rassasiants et savoureux",
    },
  ],
};

interface UseDeliveryServiceResult {
  deliveryService: SanityDeliveryService;
  isLoading: boolean;
  /** True si le contenu vient des données par défaut (pas de Sanity). */
  isFallback: boolean;
}

/**
 * Récupère le contenu du service de livraison avec fallback automatique
 * sur les données statiques si Sanity n'est pas configuré.
 */
export function useDeliveryService(): UseDeliveryServiceResult {
  const [deliveryService, setDeliveryService] = useState<SanityDeliveryService>(
    FALLBACK_DELIVERY_SERVICE
  );
  const [isLoading, setIsLoading] = useState<boolean>(sanityEnabled);
