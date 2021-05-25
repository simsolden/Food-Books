export class PlanningFormValidator {
  static validateDate(date: Date) {
    return date > new Date() && date < new Date(+new Date() + 7 * 24 * 60 * 60 * 1000);
  }
}
