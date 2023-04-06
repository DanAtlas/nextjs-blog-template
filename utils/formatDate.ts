/**
 * Util to get standard date format (yyyy-mm-dd)
 */
export function formatDate(date: string) {
  return new Date(date).toISOString().split('T')[0];
}
