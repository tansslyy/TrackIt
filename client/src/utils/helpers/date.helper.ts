export const DateHelper = {
  formatForApi(date: Date): string {
    return date.toISOString().split("T")[0];
  },

  getToday(): string {
    return this.formatForApi(new Date());
  },
};
