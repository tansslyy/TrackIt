import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type UserHabitModel = runtime.Types.Result.DefaultSelection<Prisma.$UserHabitPayload>;
export type AggregateUserHabit = {
    _count: UserHabitCountAggregateOutputType | null;
    _avg: UserHabitAvgAggregateOutputType | null;
    _sum: UserHabitSumAggregateOutputType | null;
    _min: UserHabitMinAggregateOutputType | null;
    _max: UserHabitMaxAggregateOutputType | null;
};
export type UserHabitAvgAggregateOutputType = {
    interval: number | null;
};
export type UserHabitSumAggregateOutputType = {
    interval: number | null;
};
export type UserHabitMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    habitId: string | null;
    repeatType: $Enums.RepeatTime | null;
    interval: number | null;
    startDate: Date | null;
    endDate: Date | null;
};
export type UserHabitMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    habitId: string | null;
    repeatType: $Enums.RepeatTime | null;
    interval: number | null;
    startDate: Date | null;
    endDate: Date | null;
};
export type UserHabitCountAggregateOutputType = {
    id: number;
    userId: number;
    habitId: number;
    repeatType: number;
    interval: number;
    startDate: number;
    endDate: number;
    _all: number;
};
export type UserHabitAvgAggregateInputType = {
    interval?: true;
};
export type UserHabitSumAggregateInputType = {
    interval?: true;
};
export type UserHabitMinAggregateInputType = {
    id?: true;
    userId?: true;
    habitId?: true;
    repeatType?: true;
    interval?: true;
    startDate?: true;
    endDate?: true;
};
export type UserHabitMaxAggregateInputType = {
    id?: true;
    userId?: true;
    habitId?: true;
    repeatType?: true;
    interval?: true;
    startDate?: true;
    endDate?: true;
};
export type UserHabitCountAggregateInputType = {
    id?: true;
    userId?: true;
    habitId?: true;
    repeatType?: true;
    interval?: true;
    startDate?: true;
    endDate?: true;
    _all?: true;
};
export type UserHabitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserHabitWhereInput;
    orderBy?: Prisma.UserHabitOrderByWithRelationInput | Prisma.UserHabitOrderByWithRelationInput[];
    cursor?: Prisma.UserHabitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserHabitCountAggregateInputType;
    _avg?: UserHabitAvgAggregateInputType;
    _sum?: UserHabitSumAggregateInputType;
    _min?: UserHabitMinAggregateInputType;
    _max?: UserHabitMaxAggregateInputType;
};
export type GetUserHabitAggregateType<T extends UserHabitAggregateArgs> = {
    [P in keyof T & keyof AggregateUserHabit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUserHabit[P]> : Prisma.GetScalarType<T[P], AggregateUserHabit[P]>;
};
export type UserHabitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserHabitWhereInput;
    orderBy?: Prisma.UserHabitOrderByWithAggregationInput | Prisma.UserHabitOrderByWithAggregationInput[];
    by: Prisma.UserHabitScalarFieldEnum[] | Prisma.UserHabitScalarFieldEnum;
    having?: Prisma.UserHabitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserHabitCountAggregateInputType | true;
    _avg?: UserHabitAvgAggregateInputType;
    _sum?: UserHabitSumAggregateInputType;
    _min?: UserHabitMinAggregateInputType;
    _max?: UserHabitMaxAggregateInputType;
};
export type UserHabitGroupByOutputType = {
    id: string;
    userId: string;
    habitId: string;
    repeatType: $Enums.RepeatTime;
    interval: number | null;
    startDate: Date | null;
    endDate: Date | null;
    _count: UserHabitCountAggregateOutputType | null;
    _avg: UserHabitAvgAggregateOutputType | null;
    _sum: UserHabitSumAggregateOutputType | null;
    _min: UserHabitMinAggregateOutputType | null;
    _max: UserHabitMaxAggregateOutputType | null;
};
type GetUserHabitGroupByPayload<T extends UserHabitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserHabitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserHabitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserHabitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserHabitGroupByOutputType[P]>;
}>>;
export type UserHabitWhereInput = {
    AND?: Prisma.UserHabitWhereInput | Prisma.UserHabitWhereInput[];
    OR?: Prisma.UserHabitWhereInput[];
    NOT?: Prisma.UserHabitWhereInput | Prisma.UserHabitWhereInput[];
    id?: Prisma.StringFilter<"UserHabit"> | string;
    userId?: Prisma.StringFilter<"UserHabit"> | string;
    habitId?: Prisma.StringFilter<"UserHabit"> | string;
    repeatType?: Prisma.EnumRepeatTimeFilter<"UserHabit"> | $Enums.RepeatTime;
    interval?: Prisma.IntNullableFilter<"UserHabit"> | number | null;
    startDate?: Prisma.DateTimeNullableFilter<"UserHabit"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"UserHabit"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    habit?: Prisma.XOR<Prisma.HabitScalarRelationFilter, Prisma.HabitWhereInput>;
    logs?: Prisma.HabitLogListRelationFilter;
    days?: Prisma.HabitDayListRelationFilter;
};
export type UserHabitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    interval?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    habit?: Prisma.HabitOrderByWithRelationInput;
    logs?: Prisma.HabitLogOrderByRelationAggregateInput;
    days?: Prisma.HabitDayOrderByRelationAggregateInput;
};
export type UserHabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.UserHabitWhereInput | Prisma.UserHabitWhereInput[];
    OR?: Prisma.UserHabitWhereInput[];
    NOT?: Prisma.UserHabitWhereInput | Prisma.UserHabitWhereInput[];
    userId?: Prisma.StringFilter<"UserHabit"> | string;
    habitId?: Prisma.StringFilter<"UserHabit"> | string;
    repeatType?: Prisma.EnumRepeatTimeFilter<"UserHabit"> | $Enums.RepeatTime;
    interval?: Prisma.IntNullableFilter<"UserHabit"> | number | null;
    startDate?: Prisma.DateTimeNullableFilter<"UserHabit"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"UserHabit"> | Date | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    habit?: Prisma.XOR<Prisma.HabitScalarRelationFilter, Prisma.HabitWhereInput>;
    logs?: Prisma.HabitLogListRelationFilter;
    days?: Prisma.HabitDayListRelationFilter;
}, "id">;
export type UserHabitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    interval?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserHabitCountOrderByAggregateInput;
    _avg?: Prisma.UserHabitAvgOrderByAggregateInput;
    _max?: Prisma.UserHabitMaxOrderByAggregateInput;
    _min?: Prisma.UserHabitMinOrderByAggregateInput;
    _sum?: Prisma.UserHabitSumOrderByAggregateInput;
};
export type UserHabitScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserHabitScalarWhereWithAggregatesInput | Prisma.UserHabitScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserHabitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserHabitScalarWhereWithAggregatesInput | Prisma.UserHabitScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UserHabit"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"UserHabit"> | string;
    habitId?: Prisma.StringWithAggregatesFilter<"UserHabit"> | string;
    repeatType?: Prisma.EnumRepeatTimeWithAggregatesFilter<"UserHabit"> | $Enums.RepeatTime;
    interval?: Prisma.IntNullableWithAggregatesFilter<"UserHabit"> | number | null;
    startDate?: Prisma.DateTimeNullableWithAggregatesFilter<"UserHabit"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"UserHabit"> | Date | string | null;
};
export type UserHabitCreateInput = {
    id?: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutHabitsInput;
    habit: Prisma.HabitCreateNestedOneWithoutUserHabitsInput;
    logs?: Prisma.HabitLogCreateNestedManyWithoutUserHabitInput;
    days?: Prisma.HabitDayCreateNestedManyWithoutUserHabitInput;
};
export type UserHabitUncheckedCreateInput = {
    id?: string;
    userId: string;
    habitId: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    logs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserHabitInput;
    days?: Prisma.HabitDayUncheckedCreateNestedManyWithoutUserHabitInput;
};
export type UserHabitUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitsNestedInput;
    habit?: Prisma.HabitUpdateOneRequiredWithoutUserHabitsNestedInput;
    logs?: Prisma.HabitLogUpdateManyWithoutUserHabitNestedInput;
    days?: Prisma.HabitDayUpdateManyWithoutUserHabitNestedInput;
};
export type UserHabitUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    logs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserHabitNestedInput;
    days?: Prisma.HabitDayUncheckedUpdateManyWithoutUserHabitNestedInput;
};
export type UserHabitCreateManyInput = {
    id?: string;
    userId: string;
    habitId: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
};
export type UserHabitUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserHabitUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserHabitListRelationFilter = {
    every?: Prisma.UserHabitWhereInput;
    some?: Prisma.UserHabitWhereInput;
    none?: Prisma.UserHabitWhereInput;
};
export type UserHabitOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserHabitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
};
export type UserHabitAvgOrderByAggregateInput = {
    interval?: Prisma.SortOrder;
};
export type UserHabitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
};
export type UserHabitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    habitId?: Prisma.SortOrder;
    repeatType?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
};
export type UserHabitSumOrderByAggregateInput = {
    interval?: Prisma.SortOrder;
};
export type UserHabitScalarRelationFilter = {
    is?: Prisma.UserHabitWhereInput;
    isNot?: Prisma.UserHabitWhereInput;
};
export type UserHabitCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutUserInput, Prisma.UserHabitUncheckedCreateWithoutUserInput> | Prisma.UserHabitCreateWithoutUserInput[] | Prisma.UserHabitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutUserInput | Prisma.UserHabitCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserHabitCreateManyUserInputEnvelope;
    connect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
};
export type UserHabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutUserInput, Prisma.UserHabitUncheckedCreateWithoutUserInput> | Prisma.UserHabitCreateWithoutUserInput[] | Prisma.UserHabitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutUserInput | Prisma.UserHabitCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.UserHabitCreateManyUserInputEnvelope;
    connect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
};
export type UserHabitUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutUserInput, Prisma.UserHabitUncheckedCreateWithoutUserInput> | Prisma.UserHabitCreateWithoutUserInput[] | Prisma.UserHabitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutUserInput | Prisma.UserHabitCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserHabitUpsertWithWhereUniqueWithoutUserInput | Prisma.UserHabitUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserHabitCreateManyUserInputEnvelope;
    set?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    disconnect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    delete?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    connect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    update?: Prisma.UserHabitUpdateWithWhereUniqueWithoutUserInput | Prisma.UserHabitUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserHabitUpdateManyWithWhereWithoutUserInput | Prisma.UserHabitUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserHabitScalarWhereInput | Prisma.UserHabitScalarWhereInput[];
};
export type UserHabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutUserInput, Prisma.UserHabitUncheckedCreateWithoutUserInput> | Prisma.UserHabitCreateWithoutUserInput[] | Prisma.UserHabitUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutUserInput | Prisma.UserHabitCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.UserHabitUpsertWithWhereUniqueWithoutUserInput | Prisma.UserHabitUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.UserHabitCreateManyUserInputEnvelope;
    set?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    disconnect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    delete?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    connect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    update?: Prisma.UserHabitUpdateWithWhereUniqueWithoutUserInput | Prisma.UserHabitUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.UserHabitUpdateManyWithWhereWithoutUserInput | Prisma.UserHabitUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.UserHabitScalarWhereInput | Prisma.UserHabitScalarWhereInput[];
};
export type UserHabitCreateNestedManyWithoutHabitInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutHabitInput, Prisma.UserHabitUncheckedCreateWithoutHabitInput> | Prisma.UserHabitCreateWithoutHabitInput[] | Prisma.UserHabitUncheckedCreateWithoutHabitInput[];
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutHabitInput | Prisma.UserHabitCreateOrConnectWithoutHabitInput[];
    createMany?: Prisma.UserHabitCreateManyHabitInputEnvelope;
    connect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
};
export type UserHabitUncheckedCreateNestedManyWithoutHabitInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutHabitInput, Prisma.UserHabitUncheckedCreateWithoutHabitInput> | Prisma.UserHabitCreateWithoutHabitInput[] | Prisma.UserHabitUncheckedCreateWithoutHabitInput[];
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutHabitInput | Prisma.UserHabitCreateOrConnectWithoutHabitInput[];
    createMany?: Prisma.UserHabitCreateManyHabitInputEnvelope;
    connect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
};
export type UserHabitUpdateManyWithoutHabitNestedInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutHabitInput, Prisma.UserHabitUncheckedCreateWithoutHabitInput> | Prisma.UserHabitCreateWithoutHabitInput[] | Prisma.UserHabitUncheckedCreateWithoutHabitInput[];
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutHabitInput | Prisma.UserHabitCreateOrConnectWithoutHabitInput[];
    upsert?: Prisma.UserHabitUpsertWithWhereUniqueWithoutHabitInput | Prisma.UserHabitUpsertWithWhereUniqueWithoutHabitInput[];
    createMany?: Prisma.UserHabitCreateManyHabitInputEnvelope;
    set?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    disconnect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    delete?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    connect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    update?: Prisma.UserHabitUpdateWithWhereUniqueWithoutHabitInput | Prisma.UserHabitUpdateWithWhereUniqueWithoutHabitInput[];
    updateMany?: Prisma.UserHabitUpdateManyWithWhereWithoutHabitInput | Prisma.UserHabitUpdateManyWithWhereWithoutHabitInput[];
    deleteMany?: Prisma.UserHabitScalarWhereInput | Prisma.UserHabitScalarWhereInput[];
};
export type UserHabitUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutHabitInput, Prisma.UserHabitUncheckedCreateWithoutHabitInput> | Prisma.UserHabitCreateWithoutHabitInput[] | Prisma.UserHabitUncheckedCreateWithoutHabitInput[];
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutHabitInput | Prisma.UserHabitCreateOrConnectWithoutHabitInput[];
    upsert?: Prisma.UserHabitUpsertWithWhereUniqueWithoutHabitInput | Prisma.UserHabitUpsertWithWhereUniqueWithoutHabitInput[];
    createMany?: Prisma.UserHabitCreateManyHabitInputEnvelope;
    set?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    disconnect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    delete?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    connect?: Prisma.UserHabitWhereUniqueInput | Prisma.UserHabitWhereUniqueInput[];
    update?: Prisma.UserHabitUpdateWithWhereUniqueWithoutHabitInput | Prisma.UserHabitUpdateWithWhereUniqueWithoutHabitInput[];
    updateMany?: Prisma.UserHabitUpdateManyWithWhereWithoutHabitInput | Prisma.UserHabitUpdateManyWithWhereWithoutHabitInput[];
    deleteMany?: Prisma.UserHabitScalarWhereInput | Prisma.UserHabitScalarWhereInput[];
};
export type EnumRepeatTimeFieldUpdateOperationsInput = {
    set?: $Enums.RepeatTime;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserHabitCreateNestedOneWithoutLogsInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutLogsInput, Prisma.UserHabitUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutLogsInput;
    connect?: Prisma.UserHabitWhereUniqueInput;
};
export type UserHabitUpdateOneRequiredWithoutLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutLogsInput, Prisma.UserHabitUncheckedCreateWithoutLogsInput>;
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutLogsInput;
    upsert?: Prisma.UserHabitUpsertWithoutLogsInput;
    connect?: Prisma.UserHabitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserHabitUpdateToOneWithWhereWithoutLogsInput, Prisma.UserHabitUpdateWithoutLogsInput>, Prisma.UserHabitUncheckedUpdateWithoutLogsInput>;
};
export type UserHabitCreateNestedOneWithoutDaysInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutDaysInput, Prisma.UserHabitUncheckedCreateWithoutDaysInput>;
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutDaysInput;
    connect?: Prisma.UserHabitWhereUniqueInput;
};
export type UserHabitUpdateOneRequiredWithoutDaysNestedInput = {
    create?: Prisma.XOR<Prisma.UserHabitCreateWithoutDaysInput, Prisma.UserHabitUncheckedCreateWithoutDaysInput>;
    connectOrCreate?: Prisma.UserHabitCreateOrConnectWithoutDaysInput;
    upsert?: Prisma.UserHabitUpsertWithoutDaysInput;
    connect?: Prisma.UserHabitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserHabitUpdateToOneWithWhereWithoutDaysInput, Prisma.UserHabitUpdateWithoutDaysInput>, Prisma.UserHabitUncheckedUpdateWithoutDaysInput>;
};
export type UserHabitCreateWithoutUserInput = {
    id?: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    habit: Prisma.HabitCreateNestedOneWithoutUserHabitsInput;
    logs?: Prisma.HabitLogCreateNestedManyWithoutUserHabitInput;
    days?: Prisma.HabitDayCreateNestedManyWithoutUserHabitInput;
};
export type UserHabitUncheckedCreateWithoutUserInput = {
    id?: string;
    habitId: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    logs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserHabitInput;
    days?: Prisma.HabitDayUncheckedCreateNestedManyWithoutUserHabitInput;
};
export type UserHabitCreateOrConnectWithoutUserInput = {
    where: Prisma.UserHabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserHabitCreateWithoutUserInput, Prisma.UserHabitUncheckedCreateWithoutUserInput>;
};
export type UserHabitCreateManyUserInputEnvelope = {
    data: Prisma.UserHabitCreateManyUserInput | Prisma.UserHabitCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type UserHabitUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserHabitWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserHabitUpdateWithoutUserInput, Prisma.UserHabitUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.UserHabitCreateWithoutUserInput, Prisma.UserHabitUncheckedCreateWithoutUserInput>;
};
export type UserHabitUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.UserHabitWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserHabitUpdateWithoutUserInput, Prisma.UserHabitUncheckedUpdateWithoutUserInput>;
};
export type UserHabitUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.UserHabitScalarWhereInput;
    data: Prisma.XOR<Prisma.UserHabitUpdateManyMutationInput, Prisma.UserHabitUncheckedUpdateManyWithoutUserInput>;
};
export type UserHabitScalarWhereInput = {
    AND?: Prisma.UserHabitScalarWhereInput | Prisma.UserHabitScalarWhereInput[];
    OR?: Prisma.UserHabitScalarWhereInput[];
    NOT?: Prisma.UserHabitScalarWhereInput | Prisma.UserHabitScalarWhereInput[];
    id?: Prisma.StringFilter<"UserHabit"> | string;
    userId?: Prisma.StringFilter<"UserHabit"> | string;
    habitId?: Prisma.StringFilter<"UserHabit"> | string;
    repeatType?: Prisma.EnumRepeatTimeFilter<"UserHabit"> | $Enums.RepeatTime;
    interval?: Prisma.IntNullableFilter<"UserHabit"> | number | null;
    startDate?: Prisma.DateTimeNullableFilter<"UserHabit"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"UserHabit"> | Date | string | null;
};
export type UserHabitCreateWithoutHabitInput = {
    id?: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutHabitsInput;
    logs?: Prisma.HabitLogCreateNestedManyWithoutUserHabitInput;
    days?: Prisma.HabitDayCreateNestedManyWithoutUserHabitInput;
};
export type UserHabitUncheckedCreateWithoutHabitInput = {
    id?: string;
    userId: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    logs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserHabitInput;
    days?: Prisma.HabitDayUncheckedCreateNestedManyWithoutUserHabitInput;
};
export type UserHabitCreateOrConnectWithoutHabitInput = {
    where: Prisma.UserHabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserHabitCreateWithoutHabitInput, Prisma.UserHabitUncheckedCreateWithoutHabitInput>;
};
export type UserHabitCreateManyHabitInputEnvelope = {
    data: Prisma.UserHabitCreateManyHabitInput | Prisma.UserHabitCreateManyHabitInput[];
    skipDuplicates?: boolean;
};
export type UserHabitUpsertWithWhereUniqueWithoutHabitInput = {
    where: Prisma.UserHabitWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserHabitUpdateWithoutHabitInput, Prisma.UserHabitUncheckedUpdateWithoutHabitInput>;
    create: Prisma.XOR<Prisma.UserHabitCreateWithoutHabitInput, Prisma.UserHabitUncheckedCreateWithoutHabitInput>;
};
export type UserHabitUpdateWithWhereUniqueWithoutHabitInput = {
    where: Prisma.UserHabitWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserHabitUpdateWithoutHabitInput, Prisma.UserHabitUncheckedUpdateWithoutHabitInput>;
};
export type UserHabitUpdateManyWithWhereWithoutHabitInput = {
    where: Prisma.UserHabitScalarWhereInput;
    data: Prisma.XOR<Prisma.UserHabitUpdateManyMutationInput, Prisma.UserHabitUncheckedUpdateManyWithoutHabitInput>;
};
export type UserHabitCreateWithoutLogsInput = {
    id?: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutHabitsInput;
    habit: Prisma.HabitCreateNestedOneWithoutUserHabitsInput;
    days?: Prisma.HabitDayCreateNestedManyWithoutUserHabitInput;
};
export type UserHabitUncheckedCreateWithoutLogsInput = {
    id?: string;
    userId: string;
    habitId: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    days?: Prisma.HabitDayUncheckedCreateNestedManyWithoutUserHabitInput;
};
export type UserHabitCreateOrConnectWithoutLogsInput = {
    where: Prisma.UserHabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserHabitCreateWithoutLogsInput, Prisma.UserHabitUncheckedCreateWithoutLogsInput>;
};
export type UserHabitUpsertWithoutLogsInput = {
    update: Prisma.XOR<Prisma.UserHabitUpdateWithoutLogsInput, Prisma.UserHabitUncheckedUpdateWithoutLogsInput>;
    create: Prisma.XOR<Prisma.UserHabitCreateWithoutLogsInput, Prisma.UserHabitUncheckedCreateWithoutLogsInput>;
    where?: Prisma.UserHabitWhereInput;
};
export type UserHabitUpdateToOneWithWhereWithoutLogsInput = {
    where?: Prisma.UserHabitWhereInput;
    data: Prisma.XOR<Prisma.UserHabitUpdateWithoutLogsInput, Prisma.UserHabitUncheckedUpdateWithoutLogsInput>;
};
export type UserHabitUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitsNestedInput;
    habit?: Prisma.HabitUpdateOneRequiredWithoutUserHabitsNestedInput;
    days?: Prisma.HabitDayUpdateManyWithoutUserHabitNestedInput;
};
export type UserHabitUncheckedUpdateWithoutLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    days?: Prisma.HabitDayUncheckedUpdateManyWithoutUserHabitNestedInput;
};
export type UserHabitCreateWithoutDaysInput = {
    id?: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    user: Prisma.UserCreateNestedOneWithoutHabitsInput;
    habit: Prisma.HabitCreateNestedOneWithoutUserHabitsInput;
    logs?: Prisma.HabitLogCreateNestedManyWithoutUserHabitInput;
};
export type UserHabitUncheckedCreateWithoutDaysInput = {
    id?: string;
    userId: string;
    habitId: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    logs?: Prisma.HabitLogUncheckedCreateNestedManyWithoutUserHabitInput;
};
export type UserHabitCreateOrConnectWithoutDaysInput = {
    where: Prisma.UserHabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserHabitCreateWithoutDaysInput, Prisma.UserHabitUncheckedCreateWithoutDaysInput>;
};
export type UserHabitUpsertWithoutDaysInput = {
    update: Prisma.XOR<Prisma.UserHabitUpdateWithoutDaysInput, Prisma.UserHabitUncheckedUpdateWithoutDaysInput>;
    create: Prisma.XOR<Prisma.UserHabitCreateWithoutDaysInput, Prisma.UserHabitUncheckedCreateWithoutDaysInput>;
    where?: Prisma.UserHabitWhereInput;
};
export type UserHabitUpdateToOneWithWhereWithoutDaysInput = {
    where?: Prisma.UserHabitWhereInput;
    data: Prisma.XOR<Prisma.UserHabitUpdateWithoutDaysInput, Prisma.UserHabitUncheckedUpdateWithoutDaysInput>;
};
export type UserHabitUpdateWithoutDaysInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitsNestedInput;
    habit?: Prisma.HabitUpdateOneRequiredWithoutUserHabitsNestedInput;
    logs?: Prisma.HabitLogUpdateManyWithoutUserHabitNestedInput;
};
export type UserHabitUncheckedUpdateWithoutDaysInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    logs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserHabitNestedInput;
};
export type UserHabitCreateManyUserInput = {
    id?: string;
    habitId: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
};
export type UserHabitUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    habit?: Prisma.HabitUpdateOneRequiredWithoutUserHabitsNestedInput;
    logs?: Prisma.HabitLogUpdateManyWithoutUserHabitNestedInput;
    days?: Prisma.HabitDayUpdateManyWithoutUserHabitNestedInput;
};
export type UserHabitUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    logs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserHabitNestedInput;
    days?: Prisma.HabitDayUncheckedUpdateManyWithoutUserHabitNestedInput;
};
export type UserHabitUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    habitId?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserHabitCreateManyHabitInput = {
    id?: string;
    userId: string;
    repeatType?: $Enums.RepeatTime;
    interval?: number | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
};
export type UserHabitUpdateWithoutHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user?: Prisma.UserUpdateOneRequiredWithoutHabitsNestedInput;
    logs?: Prisma.HabitLogUpdateManyWithoutUserHabitNestedInput;
    days?: Prisma.HabitDayUpdateManyWithoutUserHabitNestedInput;
};
export type UserHabitUncheckedUpdateWithoutHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    logs?: Prisma.HabitLogUncheckedUpdateManyWithoutUserHabitNestedInput;
    days?: Prisma.HabitDayUncheckedUpdateManyWithoutUserHabitNestedInput;
};
export type UserHabitUncheckedUpdateManyWithoutHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    repeatType?: Prisma.EnumRepeatTimeFieldUpdateOperationsInput | $Enums.RepeatTime;
    interval?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserHabitCountOutputType = {
    logs: number;
    days: number;
};
export type UserHabitCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    logs?: boolean | UserHabitCountOutputTypeCountLogsArgs;
    days?: boolean | UserHabitCountOutputTypeCountDaysArgs;
};
export type UserHabitCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitCountOutputTypeSelect<ExtArgs> | null;
};
export type UserHabitCountOutputTypeCountLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitLogWhereInput;
};
export type UserHabitCountOutputTypeCountDaysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitDayWhereInput;
};
export type UserHabitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    habitId?: boolean;
    repeatType?: boolean;
    interval?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
    logs?: boolean | Prisma.UserHabit$logsArgs<ExtArgs>;
    days?: boolean | Prisma.UserHabit$daysArgs<ExtArgs>;
    _count?: boolean | Prisma.UserHabitCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userHabit"]>;
export type UserHabitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    habitId?: boolean;
    repeatType?: boolean;
    interval?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userHabit"]>;
export type UserHabitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    habitId?: boolean;
    repeatType?: boolean;
    interval?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["userHabit"]>;
export type UserHabitSelectScalar = {
    id?: boolean;
    userId?: boolean;
    habitId?: boolean;
    repeatType?: boolean;
    interval?: boolean;
    startDate?: boolean;
    endDate?: boolean;
};
export type UserHabitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "habitId" | "repeatType" | "interval" | "startDate" | "endDate", ExtArgs["result"]["userHabit"]>;
export type UserHabitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
    logs?: boolean | Prisma.UserHabit$logsArgs<ExtArgs>;
    days?: boolean | Prisma.UserHabit$daysArgs<ExtArgs>;
    _count?: boolean | Prisma.UserHabitCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserHabitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
};
export type UserHabitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    habit?: boolean | Prisma.HabitDefaultArgs<ExtArgs>;
};
export type $UserHabitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UserHabit";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        habit: Prisma.$HabitPayload<ExtArgs>;
        logs: Prisma.$HabitLogPayload<ExtArgs>[];
        days: Prisma.$HabitDayPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        habitId: string;
        repeatType: $Enums.RepeatTime;
        interval: number | null;
        startDate: Date | null;
        endDate: Date | null;
    }, ExtArgs["result"]["userHabit"]>;
    composites: {};
};
export type UserHabitGetPayload<S extends boolean | null | undefined | UserHabitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserHabitPayload, S>;
export type UserHabitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserHabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserHabitCountAggregateInputType | true;
};
export interface UserHabitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UserHabit'];
        meta: {
            name: 'UserHabit';
        };
    };
    findUnique<T extends UserHabitFindUniqueArgs>(args: Prisma.SelectSubset<T, UserHabitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserHabitClient<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserHabitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserHabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserHabitClient<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserHabitFindFirstArgs>(args?: Prisma.SelectSubset<T, UserHabitFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserHabitClient<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserHabitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserHabitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserHabitClient<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserHabitFindManyArgs>(args?: Prisma.SelectSubset<T, UserHabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserHabitCreateArgs>(args: Prisma.SelectSubset<T, UserHabitCreateArgs<ExtArgs>>): Prisma.Prisma__UserHabitClient<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserHabitCreateManyArgs>(args?: Prisma.SelectSubset<T, UserHabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserHabitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserHabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserHabitDeleteArgs>(args: Prisma.SelectSubset<T, UserHabitDeleteArgs<ExtArgs>>): Prisma.Prisma__UserHabitClient<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserHabitUpdateArgs>(args: Prisma.SelectSubset<T, UserHabitUpdateArgs<ExtArgs>>): Prisma.Prisma__UserHabitClient<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserHabitDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserHabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserHabitUpdateManyArgs>(args: Prisma.SelectSubset<T, UserHabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserHabitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserHabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserHabitUpsertArgs>(args: Prisma.SelectSubset<T, UserHabitUpsertArgs<ExtArgs>>): Prisma.Prisma__UserHabitClient<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserHabitCountArgs>(args?: Prisma.Subset<T, UserHabitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserHabitCountAggregateOutputType> : number>;
    aggregate<T extends UserHabitAggregateArgs>(args: Prisma.Subset<T, UserHabitAggregateArgs>): Prisma.PrismaPromise<GetUserHabitAggregateType<T>>;
    groupBy<T extends UserHabitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserHabitGroupByArgs['orderBy'];
    } : {
        orderBy?: UserHabitGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserHabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserHabitFieldRefs;
}
export interface Prisma__UserHabitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    habit<T extends Prisma.HabitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HabitDefaultArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    logs<T extends Prisma.UserHabit$logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserHabit$logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    days<T extends Prisma.UserHabit$daysArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserHabit$daysArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserHabitFieldRefs {
    readonly id: Prisma.FieldRef<"UserHabit", 'String'>;
    readonly userId: Prisma.FieldRef<"UserHabit", 'String'>;
    readonly habitId: Prisma.FieldRef<"UserHabit", 'String'>;
    readonly repeatType: Prisma.FieldRef<"UserHabit", 'RepeatTime'>;
    readonly interval: Prisma.FieldRef<"UserHabit", 'Int'>;
    readonly startDate: Prisma.FieldRef<"UserHabit", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"UserHabit", 'DateTime'>;
}
export type UserHabitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelect<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    include?: Prisma.UserHabitInclude<ExtArgs> | null;
    where: Prisma.UserHabitWhereUniqueInput;
};
export type UserHabitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelect<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    include?: Prisma.UserHabitInclude<ExtArgs> | null;
    where: Prisma.UserHabitWhereUniqueInput;
};
export type UserHabitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelect<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    include?: Prisma.UserHabitInclude<ExtArgs> | null;
    where?: Prisma.UserHabitWhereInput;
    orderBy?: Prisma.UserHabitOrderByWithRelationInput | Prisma.UserHabitOrderByWithRelationInput[];
    cursor?: Prisma.UserHabitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserHabitScalarFieldEnum | Prisma.UserHabitScalarFieldEnum[];
};
export type UserHabitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelect<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    include?: Prisma.UserHabitInclude<ExtArgs> | null;
    where?: Prisma.UserHabitWhereInput;
    orderBy?: Prisma.UserHabitOrderByWithRelationInput | Prisma.UserHabitOrderByWithRelationInput[];
    cursor?: Prisma.UserHabitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserHabitScalarFieldEnum | Prisma.UserHabitScalarFieldEnum[];
};
export type UserHabitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelect<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    include?: Prisma.UserHabitInclude<ExtArgs> | null;
    where?: Prisma.UserHabitWhereInput;
    orderBy?: Prisma.UserHabitOrderByWithRelationInput | Prisma.UserHabitOrderByWithRelationInput[];
    cursor?: Prisma.UserHabitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserHabitScalarFieldEnum | Prisma.UserHabitScalarFieldEnum[];
};
export type UserHabitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelect<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    include?: Prisma.UserHabitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserHabitCreateInput, Prisma.UserHabitUncheckedCreateInput>;
};
export type UserHabitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserHabitCreateManyInput | Prisma.UserHabitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserHabitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    data: Prisma.UserHabitCreateManyInput | Prisma.UserHabitCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserHabitIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserHabitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelect<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    include?: Prisma.UserHabitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserHabitUpdateInput, Prisma.UserHabitUncheckedUpdateInput>;
    where: Prisma.UserHabitWhereUniqueInput;
};
export type UserHabitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserHabitUpdateManyMutationInput, Prisma.UserHabitUncheckedUpdateManyInput>;
    where?: Prisma.UserHabitWhereInput;
    limit?: number;
};
export type UserHabitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserHabitUpdateManyMutationInput, Prisma.UserHabitUncheckedUpdateManyInput>;
    where?: Prisma.UserHabitWhereInput;
    limit?: number;
    include?: Prisma.UserHabitIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserHabitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelect<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    include?: Prisma.UserHabitInclude<ExtArgs> | null;
    where: Prisma.UserHabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserHabitCreateInput, Prisma.UserHabitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserHabitUpdateInput, Prisma.UserHabitUncheckedUpdateInput>;
};
export type UserHabitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelect<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    include?: Prisma.UserHabitInclude<ExtArgs> | null;
    where: Prisma.UserHabitWhereUniqueInput;
};
export type UserHabitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserHabitWhereInput;
    limit?: number;
};
export type UserHabit$logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where?: Prisma.HabitLogWhereInput;
    orderBy?: Prisma.HabitLogOrderByWithRelationInput | Prisma.HabitLogOrderByWithRelationInput[];
    cursor?: Prisma.HabitLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitLogScalarFieldEnum | Prisma.HabitLogScalarFieldEnum[];
};
export type UserHabit$daysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitDaySelect<ExtArgs> | null;
    omit?: Prisma.HabitDayOmit<ExtArgs> | null;
    include?: Prisma.HabitDayInclude<ExtArgs> | null;
    where?: Prisma.HabitDayWhereInput;
    orderBy?: Prisma.HabitDayOrderByWithRelationInput | Prisma.HabitDayOrderByWithRelationInput[];
    cursor?: Prisma.HabitDayWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitDayScalarFieldEnum | Prisma.HabitDayScalarFieldEnum[];
};
export type UserHabitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserHabitSelect<ExtArgs> | null;
    omit?: Prisma.UserHabitOmit<ExtArgs> | null;
    include?: Prisma.UserHabitInclude<ExtArgs> | null;
};
export {};
