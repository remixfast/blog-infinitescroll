import { useMatches } from "@remix-run/react";
import { useMemo } from "react";

/**
 * This hook quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData(
  id: string
): Record<string, unknown> | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(
    () => matchingRoutes.find((route: any) => route.id === id),
    [matchingRoutes, id]
  );
  return route?.data;
}
