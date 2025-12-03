import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type HabitDayModel = runtime.Types.Result.DefaultSelection<Prisma.$HabitDayPayload>;
export type AggregateHabitDay = {
    _count: HabitDayCountAggregateOutputType | null;
    _min: HabitDayMinAggregateOutputType | null;
    _max: HabitDayMaxAggregateOutputType | null;
};
export type HabitDayMinAggregateOutputType = {
    id: string | null;
    userHabitId: string | null;
    dayOfWeek: $Enums.DayOfWeek | null;
};
export type HabitDayMaxAggregateOutputType = {
    id: string | null;
    userHabitId: string | null;
    dayOfWeek: $Enums.DayOfWeek | null;
};
export type HabitDayCountAggregateOutputType = {
    id: number;
    userHabitId: number;
    dayOfWeek: number;
    _all: number;
};
export type HabitDayMinAggregateInputType = {
    id?: true;
    userHabitId?: true;
    dayOfWeek?: true;
};
export type HabitDayMaxAggregateInputType = {
    id?: true;
    userHabitId?: true;
    dayOfWeek?: true;
};
export type HabitDayCountAggregateInputType = {
    id?: true;
    userHabitId?: true;
    dayOfWeek?: true;
    _all?: true;
};
export type HabitDayAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitDayWhereInput;
    orderBy?: Prisma.HabitDayOrderByWithRelationInput | Prisma.HabitDayOrderByWithRelationInput[];
    cursor?: Prisma.HabitDayWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HabitDayCountAggregateInputType;
    _min?: HabitDayMinAggregateInputType;
    _max?: HabitDayMaxAggregateInputType;
};
export type GetHabitDayAggregateType<T extends HabitDayAggregateArgs> = {
    [P in keyof T & keyof AggregateHabitDay]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHabitDay[P]> : Prisma.GetScalarType<T[P], AggregateHabitDay[P]>;
};
export type HabitDayGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitDayWhereInput;
    orderBy?: Prisma.HabitDayOrderByWithAggregationInput | Prisma.HabitDayOrderByWithAggregationInput[];
    by: Prisma.HabitDayScalarFieldEnum[] | Prisma.HabitDayScalarFieldEnum;
    having?: Prisma.HabitDayScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HabitDayCountAggregateInputType | true;
    _min?: HabitDayMinAggregateInputType;
    _max?: HabitDayMaxAggregateInputType;
};
export type HabitDayGroupByOutputType = {
    id: string;
    userHabitId: string;
    dayOfWeek: $Enums.DayOfWeek;
    _count: HabitDayCountAggregateOutputType | null;
    _min: HabitDayMinAggregateOutputType | null;
    _max: HabitDayMaxAggregateOutputType | null;
};
type GetHabitDayGroupByPayload<T extends HabitDayGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HabitDayGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HabitDayGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HabitDayGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HabitDayGroupByOutputType[P]>;
}>>;
export type HabitDayWhereInput = {
    AND?: Prisma.HabitDayWhereInput | Prisma.HabitDayWhereInput[];
    OR?: Prisma.HabitDayWhereInput[];
    NOT?: Prisma.HabitDayWhereInput | Prisma.HabitDayWhereInput[];
    id?: Prisma.StringFilter<"HabitDay"> | string;
    userHabitId?: Prisma.StringFilter<"HabitDay"> | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFilter<"HabitDay"> | $Enums.DayOfWeek;
    userHabit?: Prisma.XOR<Prisma.UserHabitScalarRelationFilter, Prisma.UserHabitWhereInput>;
};
export type HabitDayOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userHabitId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    userHabit?: Prisma.UserHabitOrderByWithRelationInput;
};
export type HabitDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HabitDayWhereInput | Prisma.HabitDayWhereInput[];
    OR?: Prisma.HabitDayWhereInput[];
    NOT?: Prisma.HabitDayWhereInput | Prisma.HabitDayWhereInput[];
    userHabitId?: Prisma.StringFilter<"HabitDay"> | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFilter<"HabitDay"> | $Enums.DayOfWeek;
    userHabit?: Prisma.XOR<Prisma.UserHabitScalarRelationFilter, Prisma.UserHabitWhereInput>;
}, "id">;
export type HabitDayOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userHabitId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
    _count?: Prisma.HabitDayCountOrderByAggregateInput;
    _max?: Prisma.HabitDayMaxOrderByAggregateInput;
    _min?: Prisma.HabitDayMinOrderByAggregateInput;
};
export type HabitDayScalarWhereWithAggregatesInput = {
    AND?: Prisma.HabitDayScalarWhereWithAggregatesInput | Prisma.HabitDayScalarWhereWithAggregatesInput[];
    OR?: Prisma.HabitDayScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HabitDayScalarWhereWithAggregatesInput | Prisma.HabitDayScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"HabitDay"> | string;
    userHabitId?: Prisma.StringWithAggregatesFilter<"HabitDay"> | string;
    dayOfWeek?: Prisma.EnumDayOfWeekWithAggregatesFilter<"HabitDay"> | $Enums.DayOfWeek;
};
export type HabitDayCreateInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
    userHabit: Prisma.UserHabitCreateNestedOneWithoutDaysInput;
};
export type HabitDayUncheckedCreateInput = {
    id?: string;
    userHabitId: string;
    dayOfWeek: $Enums.DayOfWeek;
};
export type HabitDayUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
    userHabit?: Prisma.UserHabitUpdateOneRequiredWithoutDaysNestedInput;
};
export type HabitDayUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userHabitId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
};
export type HabitDayCreateManyInput = {
    id?: string;
    userHabitId: string;
    dayOfWeek: $Enums.DayOfWeek;
};
export type HabitDayUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
};
export type HabitDayUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userHabitId?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
};
export type HabitDayListRelationFilter = {
    every?: Prisma.HabitDayWhereInput;
    some?: Prisma.HabitDayWhereInput;
    none?: Prisma.HabitDayWhereInput;
};
export type HabitDayOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HabitDayCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userHabitId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
};
export type HabitDayMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userHabitId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
};
export type HabitDayMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userHabitId?: Prisma.SortOrder;
    dayOfWeek?: Prisma.SortOrder;
};
export type HabitDayCreateNestedManyWithoutUserHabitInput = {
    create?: Prisma.XOR<Prisma.HabitDayCreateWithoutUserHabitInput, Prisma.HabitDayUncheckedCreateWithoutUserHabitInput> | Prisma.HabitDayCreateWithoutUserHabitInput[] | Prisma.HabitDayUncheckedCreateWithoutUserHabitInput[];
    connectOrCreate?: Prisma.HabitDayCreateOrConnectWithoutUserHabitInput | Prisma.HabitDayCreateOrConnectWithoutUserHabitInput[];
    createMany?: Prisma.HabitDayCreateManyUserHabitInputEnvelope;
    connect?: Prisma.HabitDayWhereUniqueInput | Prisma.HabitDayWhereUniqueInput[];
};
export type HabitDayUncheckedCreateNestedManyWithoutUserHabitInput = {
    create?: Prisma.XOR<Prisma.HabitDayCreateWithoutUserHabitInput, Prisma.HabitDayUncheckedCreateWithoutUserHabitInput> | Prisma.HabitDayCreateWithoutUserHabitInput[] | Prisma.HabitDayUncheckedCreateWithoutUserHabitInput[];
    connectOrCreate?: Prisma.HabitDayCreateOrConnectWithoutUserHabitInput | Prisma.HabitDayCreateOrConnectWithoutUserHabitInput[];
    createMany?: Prisma.HabitDayCreateManyUserHabitInputEnvelope;
    connect?: Prisma.HabitDayWhereUniqueInput | Prisma.HabitDayWhereUniqueInput[];
};
export type HabitDayUpdateManyWithoutUserHabitNestedInput = {
    create?: Prisma.XOR<Prisma.HabitDayCreateWithoutUserHabitInput, Prisma.HabitDayUncheckedCreateWithoutUserHabitInput> | Prisma.HabitDayCreateWithoutUserHabitInput[] | Prisma.HabitDayUncheckedCreateWithoutUserHabitInput[];
    connectOrCreate?: Prisma.HabitDayCreateOrConnectWithoutUserHabitInput | Prisma.HabitDayCreateOrConnectWithoutUserHabitInput[];
    upsert?: Prisma.HabitDayUpsertWithWhereUniqueWithoutUserHabitInput | Prisma.HabitDayUpsertWithWhereUniqueWithoutUserHabitInput[];
    createMany?: Prisma.HabitDayCreateManyUserHabitInputEnvelope;
    set?: Prisma.HabitDayWhereUniqueInput | Prisma.HabitDayWhereUniqueInput[];
    disconnect?: Prisma.HabitDayWhereUniqueInput | Prisma.HabitDayWhereUniqueInput[];
    delete?: Prisma.HabitDayWhereUniqueInput | Prisma.HabitDayWhereUniqueInput[];
    connect?: Prisma.HabitDayWhereUniqueInput | Prisma.HabitDayWhereUniqueInput[];
    update?: Prisma.HabitDayUpdateWithWhereUniqueWithoutUserHabitInput | Prisma.HabitDayUpdateWithWhereUniqueWithoutUserHabitInput[];
    updateMany?: Prisma.HabitDayUpdateManyWithWhereWithoutUserHabitInput | Prisma.HabitDayUpdateManyWithWhereWithoutUserHabitInput[];
    deleteMany?: Prisma.HabitDayScalarWhereInput | Prisma.HabitDayScalarWhereInput[];
};
export type HabitDayUncheckedUpdateManyWithoutUserHabitNestedInput = {
    create?: Prisma.XOR<Prisma.HabitDayCreateWithoutUserHabitInput, Prisma.HabitDayUncheckedCreateWithoutUserHabitInput> | Prisma.HabitDayCreateWithoutUserHabitInput[] | Prisma.HabitDayUncheckedCreateWithoutUserHabitInput[];
    connectOrCreate?: Prisma.HabitDayCreateOrConnectWithoutUserHabitInput | Prisma.HabitDayCreateOrConnectWithoutUserHabitInput[];
    upsert?: Prisma.HabitDayUpsertWithWhereUniqueWithoutUserHabitInput | Prisma.HabitDayUpsertWithWhereUniqueWithoutUserHabitInput[];
    createMany?: Prisma.HabitDayCreateManyUserHabitInputEnvelope;
    set?: Prisma.HabitDayWhereUniqueInput | Prisma.HabitDayWhereUniqueInput[];
    disconnect?: Prisma.HabitDayWhereUniqueInput | Prisma.HabitDayWhereUniqueInput[];
    delete?: Prisma.HabitDayWhereUniqueInput | Prisma.HabitDayWhereUniqueInput[];
    connect?: Prisma.HabitDayWhereUniqueInput | Prisma.HabitDayWhereUniqueInput[];
    update?: Prisma.HabitDayUpdateWithWhereUniqueWithoutUserHabitInput | Prisma.HabitDayUpdateWithWhereUniqueWithoutUserHabitInput[];
    updateMany?: Prisma.HabitDayUpdateManyWithWhereWithoutUserHabitInput | Prisma.HabitDayUpdateManyWithWhereWithoutUserHabitInput[];
    deleteMany?: Prisma.HabitDayScalarWhereInput | Prisma.HabitDayScalarWhereInput[];
};
export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek;
};
export type HabitDayCreateWithoutUserHabitInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
};
export type HabitDayUncheckedCreateWithoutUserHabitInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
};
export type HabitDayCreateOrConnectWithoutUserHabitInput = {
    where: Prisma.HabitDayWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitDayCreateWithoutUserHabitInput, Prisma.HabitDayUncheckedCreateWithoutUserHabitInput>;
};
export type HabitDayCreateManyUserHabitInputEnvelope = {
    data: Prisma.HabitDayCreateManyUserHabitInput | Prisma.HabitDayCreateManyUserHabitInput[];
    skipDuplicates?: boolean;
};
export type HabitDayUpsertWithWhereUniqueWithoutUserHabitInput = {
    where: Prisma.HabitDayWhereUniqueInput;
    update: Prisma.XOR<Prisma.HabitDayUpdateWithoutUserHabitInput, Prisma.HabitDayUncheckedUpdateWithoutUserHabitInput>;
    create: Prisma.XOR<Prisma.HabitDayCreateWithoutUserHabitInput, Prisma.HabitDayUncheckedCreateWithoutUserHabitInput>;
};
export type HabitDayUpdateWithWhereUniqueWithoutUserHabitInput = {
    where: Prisma.HabitDayWhereUniqueInput;
    data: Prisma.XOR<Prisma.HabitDayUpdateWithoutUserHabitInput, Prisma.HabitDayUncheckedUpdateWithoutUserHabitInput>;
};
export type HabitDayUpdateManyWithWhereWithoutUserHabitInput = {
    where: Prisma.HabitDayScalarWhereInput;
    data: Prisma.XOR<Prisma.HabitDayUpdateManyMutationInput, Prisma.HabitDayUncheckedUpdateManyWithoutUserHabitInput>;
};
export type HabitDayScalarWhereInput = {
    AND?: Prisma.HabitDayScalarWhereInput | Prisma.HabitDayScalarWhereInput[];
    OR?: Prisma.HabitDayScalarWhereInput[];
    NOT?: Prisma.HabitDayScalarWhereInput | Prisma.HabitDayScalarWhereInput[];
    id?: Prisma.StringFilter<"HabitDay"> | string;
    userHabitId?: Prisma.StringFilter<"HabitDay"> | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFilter<"HabitDay"> | $Enums.DayOfWeek;
};
export type HabitDayCreateManyUserHabitInput = {
    id?: string;
    dayOfWeek: $Enums.DayOfWeek;
};
export type HabitDayUpdateWithoutUserHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
};
export type HabitDayUncheckedUpdateWithoutUserHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
};
export type HabitDayUncheckedUpdateManyWithoutUserHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dayOfWeek?: Prisma.EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek;
};
export type HabitDaySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userHabitId?: boolean;
    dayOfWeek?: boolean;
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habitDay"]>;
export type HabitDaySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userHabitId?: boolean;
    dayOfWeek?: boolean;
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habitDay"]>;
export type HabitDaySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userHabitId?: boolean;
    dayOfWeek?: boolean;
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habitDay"]>;
export type HabitDaySelectScalar = {
    id?: boolean;
    userHabitId?: boolean;
    dayOfWeek?: boolean;
};
export type HabitDayOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userHabitId" | "dayOfWeek", ExtArgs["result"]["habitDay"]>;
export type HabitDayInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
};
export type HabitDayIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
};
export type HabitDayIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
};
export type $HabitDayPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HabitDay";
    objects: {
        userHabit: Prisma.$UserHabitPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userHabitId: string;
        dayOfWeek: $Enums.DayOfWeek;
    }, ExtArgs["result"]["habitDay"]>;
    composites: {};
};
export type HabitDayGetPayload<S extends boolean | null | undefined | HabitDayDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HabitDayPayload, S>;
export type HabitDayCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HabitDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HabitDayCountAggregateInputType | true;
};
export interface HabitDayDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HabitDay'];
        meta: {
            name: 'HabitDay';
        };
    };
    findUnique<T extends HabitDayFindUniqueArgs>(args: Prisma.SelectSubset<T, HabitDayFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HabitDayClient<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HabitDayFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HabitDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HabitDayClient<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HabitDayFindFirstArgs>(args?: Prisma.SelectSubset<T, HabitDayFindFirstArgs<ExtArgs>>): Prisma.Prisma__HabitDayClient<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HabitDayFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HabitDayFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HabitDayClient<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HabitDayFindManyArgs>(args?: Prisma.SelectSubset<T, HabitDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HabitDayCreateArgs>(args: Prisma.SelectSubset<T, HabitDayCreateArgs<ExtArgs>>): Prisma.Prisma__HabitDayClient<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HabitDayCreateManyArgs>(args?: Prisma.SelectSubset<T, HabitDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HabitDayCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HabitDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HabitDayDeleteArgs>(args: Prisma.SelectSubset<T, HabitDayDeleteArgs<ExtArgs>>): Prisma.Prisma__HabitDayClient<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HabitDayUpdateArgs>(args: Prisma.SelectSubset<T, HabitDayUpdateArgs<ExtArgs>>): Prisma.Prisma__HabitDayClient<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HabitDayDeleteManyArgs>(args?: Prisma.SelectSubset<T, HabitDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HabitDayUpdateManyArgs>(args: Prisma.SelectSubset<T, HabitDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HabitDayUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HabitDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HabitDayUpsertArgs>(args: Prisma.SelectSubset<T, HabitDayUpsertArgs<ExtArgs>>): Prisma.Prisma__HabitDayClient<runtime.Types.Result.GetResult<Prisma.$HabitDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HabitDayCountArgs>(args?: Prisma.Subset<T, HabitDayCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HabitDayCountAggregateOutputType> : number>;
    aggregate<T extends HabitDayAggregateArgs>(args: Prisma.Subset<T, HabitDayAggregateArgs>): Prisma.PrismaPromise<GetHabitDayAggregateType<T>>;
    groupBy<T extends HabitDayGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HabitDayGroupByArgs['orderBy'];
    } : {
        orderBy?: HabitDayGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HabitDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HabitDayFieldRefs;
}
export interface Prisma__HabitDayClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    userHabit<T extends Prisma.UserHabitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserHabitDefaultArgs<ExtArgs>>): Prisma.Prisma__UserHabitClient<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HabitDayFieldRefs {
    readonly id: Prisma.FieldRef<"HabitDay", 'String'>;
    readonly userHabitId: Prisma.FieldRef<"HabitDay", 'String'>;
    readonly dayOfWeek: Prisma.FieldRef<"HabitDay", 'DayOfWeek'>;
}
export type HabitDayFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitDaySelect<ExtArgs> | null;
    omit?: Prisma.HabitDayOmit<ExtArgs> | null;
    include?: Prisma.HabitDayInclude<ExtArgs> | null;
    where: Prisma.HabitDayWhereUniqueInput;
};
export type HabitDayFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitDaySelect<ExtArgs> | null;
    omit?: Prisma.HabitDayOmit<ExtArgs> | null;
    include?: Prisma.HabitDayInclude<ExtArgs> | null;
    where: Prisma.HabitDayWhereUniqueInput;
};
export type HabitDayFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HabitDayFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HabitDayFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HabitDayCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitDaySelect<ExtArgs> | null;
    omit?: Prisma.HabitDayOmit<ExtArgs> | null;
    include?: Prisma.HabitDayInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitDayCreateInput, Prisma.HabitDayUncheckedCreateInput>;
};
export type HabitDayCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HabitDayCreateManyInput | Prisma.HabitDayCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HabitDayCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitDaySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HabitDayOmit<ExtArgs> | null;
    data: Prisma.HabitDayCreateManyInput | Prisma.HabitDayCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HabitDayIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HabitDayUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitDaySelect<ExtArgs> | null;
    omit?: Prisma.HabitDayOmit<ExtArgs> | null;
    include?: Prisma.HabitDayInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitDayUpdateInput, Prisma.HabitDayUncheckedUpdateInput>;
    where: Prisma.HabitDayWhereUniqueInput;
};
export type HabitDayUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HabitDayUpdateManyMutationInput, Prisma.HabitDayUncheckedUpdateManyInput>;
    where?: Prisma.HabitDayWhereInput;
    limit?: number;
};
export type HabitDayUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitDaySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HabitDayOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitDayUpdateManyMutationInput, Prisma.HabitDayUncheckedUpdateManyInput>;
    where?: Prisma.HabitDayWhereInput;
    limit?: number;
    include?: Prisma.HabitDayIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HabitDayUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitDaySelect<ExtArgs> | null;
    omit?: Prisma.HabitDayOmit<ExtArgs> | null;
    include?: Prisma.HabitDayInclude<ExtArgs> | null;
    where: Prisma.HabitDayWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitDayCreateInput, Prisma.HabitDayUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HabitDayUpdateInput, Prisma.HabitDayUncheckedUpdateInput>;
};
export type HabitDayDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitDaySelect<ExtArgs> | null;
    omit?: Prisma.HabitDayOmit<ExtArgs> | null;
    include?: Prisma.HabitDayInclude<ExtArgs> | null;
    where: Prisma.HabitDayWhereUniqueInput;
};
export type HabitDayDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitDayWhereInput;
    limit?: number;
};
export type HabitDayDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitDaySelect<ExtArgs> | null;
    omit?: Prisma.HabitDayOmit<ExtArgs> | null;
    include?: Prisma.HabitDayInclude<ExtArgs> | null;
};
export {};
