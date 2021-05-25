export const DIFFICULTY = ['', 'easy', 'medium', 'difficult'];
export const COST = ['', 'low', 'medium', 'high'];
export const TYPE = ['', 'Appetizer', 'Entry', 'Meal', 'Dessert', 'Drink', 'Other'];
export const MEASUREMENT = ['', 'other', 'kg', 'g', 'l', 'cl', 'ml', 'c.c.', 'c.s.', 'sachet'];

export const DIFFICULTY_LABELS = ['Facile', 'Moyen', 'Difficile'];
export const MEASUREMENT_LABELS = ['(autre)', 'kg', 'gr', 'L', 'cl', 'ml', 'c.c.', 'c.s.', 'sachet(s)'];
export const COST_LABELS = ['$', '$ $', '$ $ $'];
export const TYPE_LABELS = ['Apéritif', 'Entrée', 'Plat', 'Dessert', 'Boisson', 'Autre'];

export const enumsMap = new Map([
  ['difficulty', DIFFICULTY],
  ['cost', COST],
  ['type', TYPE],
  ['measurement', MEASUREMENT],
]);
