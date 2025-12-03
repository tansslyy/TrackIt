export declare const RepeatTime: {
    readonly DAILY: "DAILY";
    readonly WEEKLY: "WEEKLY";
    readonly CUSTOM: "CUSTOM";
};
export type RepeatTime = (typeof RepeatTime)[keyof typeof RepeatTime];
export declare const Status: {
    readonly COMPLETED: "COMPLETED";
    readonly NOT_COMPLETED: "NOT_COMPLETED";
    readonly POSTPONED: "POSTPONED";
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const DayOfWeek: {
    readonly MONDAY: "MONDAY";
    readonly TUESDAY: "TUESDAY";
    readonly WEDNESDAY: "WEDNESDAY";
    readonly THURSDAY: "THURSDAY";
    readonly FRIDAY: "FRIDAY";
    readonly SATURDAY: "SATURDAY";
    readonly SUNDAY: "SUNDAY";
};
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];
