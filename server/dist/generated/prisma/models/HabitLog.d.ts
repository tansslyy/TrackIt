import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type HabitLogModel = runtime.Types.Result.DefaultSelection<Prisma.$HabitLogPayload>;
export type AggregateHabitLog = {
    _count: HabitLogCountAggregateOutputType | null;
    _min: HabitLogMinAggregateOutputType | null;
    _max: HabitLogMaxAggregateOutputType | null;
};
export type HabitLogMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    userHabitId: string | null;
    status: $Enums.Status | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HabitLogMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    userHabitId: string | null;
    status: $Enums.Status | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HabitLogCountAggregateOutputType = {
    id: number;
    date: number;
    userHabitId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type HabitLogMinAggregateInputType = {
    id?: true;
    date?: true;
    userHabitId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HabitLogMaxAggregateInputType = {
    id?: true;
    date?: true;
    userHabitId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HabitLogCountAggregateInputType = {
    id?: true;
    date?: true;
    userHabitId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type HabitLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitLogWhereInput;
    orderBy?: Prisma.HabitLogOrderByWithRelationInput | Prisma.HabitLogOrderByWithRelationInput[];
    cursor?: Prisma.HabitLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HabitLogCountAggregateInputType;
    _min?: HabitLogMinAggregateInputType;
    _max?: HabitLogMaxAggregateInputType;
};
export type GetHabitLogAggregateType<T extends HabitLogAggregateArgs> = {
    [P in keyof T & keyof AggregateHabitLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHabitLog[P]> : Prisma.GetScalarType<T[P], AggregateHabitLog[P]>;
};
export type HabitLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitLogWhereInput;
    orderBy?: Prisma.HabitLogOrderByWithAggregationInput | Prisma.HabitLogOrderByWithAggregationInput[];
    by: Prisma.HabitLogScalarFieldEnum[] | Prisma.HabitLogScalarFieldEnum;
    having?: Prisma.HabitLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HabitLogCountAggregateInputType | true;
    _min?: HabitLogMinAggregateInputType;
    _max?: HabitLogMaxAggregateInputType;
};
export type HabitLogGroupByOutputType = {
    id: string;
    date: Date;
    userHabitId: string;
    status: $Enums.Status;
    createdAt: Date;
    updatedAt: Date;
    _count: HabitLogCountAggregateOutputType | null;
    _min: HabitLogMinAggregateOutputType | null;
    _max: HabitLogMaxAggregateOutputType | null;
};
type GetHabitLogGroupByPayload<T extends HabitLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HabitLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HabitLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HabitLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HabitLogGroupByOutputType[P]>;
}>>;
export type HabitLogWhereInput = {
    AND?: Prisma.HabitLogWhereInput | Prisma.HabitLogWhereInput[];
    OR?: Prisma.HabitLogWhereInput[];
    NOT?: Prisma.HabitLogWhereInput | Prisma.HabitLogWhereInput[];
    id?: Prisma.StringFilter<"HabitLog"> | string;
    date?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    userHabitId?: Prisma.StringFilter<"HabitLog"> | string;
    status?: Prisma.EnumStatusFilter<"HabitLog"> | $Enums.Status;
    createdAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    userHabit?: Prisma.XOR<Prisma.UserHabitScalarRelationFilter, Prisma.UserHabitWhereInput>;
};
export type HabitLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userHabitId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    userHabit?: Prisma.UserHabitOrderByWithRelationInput;
};
export type HabitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HabitLogWhereInput | Prisma.HabitLogWhereInput[];
    OR?: Prisma.HabitLogWhereInput[];
    NOT?: Prisma.HabitLogWhereInput | Prisma.HabitLogWhereInput[];
    date?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    userHabitId?: Prisma.StringFilter<"HabitLog"> | string;
    status?: Prisma.EnumStatusFilter<"HabitLog"> | $Enums.Status;
    createdAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    userHabit?: Prisma.XOR<Prisma.UserHabitScalarRelationFilter, Prisma.UserHabitWhereInput>;
}, "id">;
export type HabitLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userHabitId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.HabitLogCountOrderByAggregateInput;
    _max?: Prisma.HabitLogMaxOrderByAggregateInput;
    _min?: Prisma.HabitLogMinOrderByAggregateInput;
};
export type HabitLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.HabitLogScalarWhereWithAggregatesInput | Prisma.HabitLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.HabitLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HabitLogScalarWhereWithAggregatesInput | Prisma.HabitLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"HabitLog"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"HabitLog"> | Date | string;
    userHabitId?: Prisma.StringWithAggregatesFilter<"HabitLog"> | string;
    status?: Prisma.EnumStatusWithAggregatesFilter<"HabitLog"> | $Enums.Status;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HabitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"HabitLog"> | Date | string;
};
export type HabitLogCreateInput = {
    id?: string;
    date: Date | string;
    status?: $Enums.Status;
    createdAt: Date | string;
    updatedAt?: Date | string;
    userHabit: Prisma.UserHabitCreateNestedOneWithoutLogsInput;
};
export type HabitLogUncheckedCreateInput = {
    id?: string;
    date: Date | string;
    userHabitId: string;
    status?: $Enums.Status;
    createdAt: Date | string;
    updatedAt?: Date | string;
};
export type HabitLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userHabit?: Prisma.UserHabitUpdateOneRequiredWithoutLogsNestedInput;
};
export type HabitLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userHabitId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HabitLogCreateManyInput = {
    id?: string;
    date: Date | string;
    userHabitId: string;
    status?: $Enums.Status;
    createdAt: Date | string;
    updatedAt?: Date | string;
};
export type HabitLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HabitLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userHabitId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HabitLogListRelationFilter = {
    every?: Prisma.HabitLogWhereInput;
    some?: Prisma.HabitLogWhereInput;
    none?: Prisma.HabitLogWhereInput;
};
export type HabitLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HabitLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userHabitId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HabitLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userHabitId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HabitLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    userHabitId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HabitLogCreateNestedManyWithoutUserHabitInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutUserHabitInput, Prisma.HabitLogUncheckedCreateWithoutUserHabitInput> | Prisma.HabitLogCreateWithoutUserHabitInput[] | Prisma.HabitLogUncheckedCreateWithoutUserHabitInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutUserHabitInput | Prisma.HabitLogCreateOrConnectWithoutUserHabitInput[];
    createMany?: Prisma.HabitLogCreateManyUserHabitInputEnvelope;
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
};
export type HabitLogUncheckedCreateNestedManyWithoutUserHabitInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutUserHabitInput, Prisma.HabitLogUncheckedCreateWithoutUserHabitInput> | Prisma.HabitLogCreateWithoutUserHabitInput[] | Prisma.HabitLogUncheckedCreateWithoutUserHabitInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutUserHabitInput | Prisma.HabitLogCreateOrConnectWithoutUserHabitInput[];
    createMany?: Prisma.HabitLogCreateManyUserHabitInputEnvelope;
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
};
export type HabitLogUpdateManyWithoutUserHabitNestedInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutUserHabitInput, Prisma.HabitLogUncheckedCreateWithoutUserHabitInput> | Prisma.HabitLogCreateWithoutUserHabitInput[] | Prisma.HabitLogUncheckedCreateWithoutUserHabitInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutUserHabitInput | Prisma.HabitLogCreateOrConnectWithoutUserHabitInput[];
    upsert?: Prisma.HabitLogUpsertWithWhereUniqueWithoutUserHabitInput | Prisma.HabitLogUpsertWithWhereUniqueWithoutUserHabitInput[];
    createMany?: Prisma.HabitLogCreateManyUserHabitInputEnvelope;
    set?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    disconnect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    delete?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    update?: Prisma.HabitLogUpdateWithWhereUniqueWithoutUserHabitInput | Prisma.HabitLogUpdateWithWhereUniqueWithoutUserHabitInput[];
    updateMany?: Prisma.HabitLogUpdateManyWithWhereWithoutUserHabitInput | Prisma.HabitLogUpdateManyWithWhereWithoutUserHabitInput[];
    deleteMany?: Prisma.HabitLogScalarWhereInput | Prisma.HabitLogScalarWhereInput[];
};
export type HabitLogUncheckedUpdateManyWithoutUserHabitNestedInput = {
    create?: Prisma.XOR<Prisma.HabitLogCreateWithoutUserHabitInput, Prisma.HabitLogUncheckedCreateWithoutUserHabitInput> | Prisma.HabitLogCreateWithoutUserHabitInput[] | Prisma.HabitLogUncheckedCreateWithoutUserHabitInput[];
    connectOrCreate?: Prisma.HabitLogCreateOrConnectWithoutUserHabitInput | Prisma.HabitLogCreateOrConnectWithoutUserHabitInput[];
    upsert?: Prisma.HabitLogUpsertWithWhereUniqueWithoutUserHabitInput | Prisma.HabitLogUpsertWithWhereUniqueWithoutUserHabitInput[];
    createMany?: Prisma.HabitLogCreateManyUserHabitInputEnvelope;
    set?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    disconnect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    delete?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    connect?: Prisma.HabitLogWhereUniqueInput | Prisma.HabitLogWhereUniqueInput[];
    update?: Prisma.HabitLogUpdateWithWhereUniqueWithoutUserHabitInput | Prisma.HabitLogUpdateWithWhereUniqueWithoutUserHabitInput[];
    updateMany?: Prisma.HabitLogUpdateManyWithWhereWithoutUserHabitInput | Prisma.HabitLogUpdateManyWithWhereWithoutUserHabitInput[];
    deleteMany?: Prisma.HabitLogScalarWhereInput | Prisma.HabitLogScalarWhereInput[];
};
export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status;
};
export type HabitLogCreateWithoutUserHabitInput = {
    id?: string;
    date: Date | string;
    status?: $Enums.Status;
    createdAt: Date | string;
    updatedAt?: Date | string;
};
export type HabitLogUncheckedCreateWithoutUserHabitInput = {
    id?: string;
    date: Date | string;
    status?: $Enums.Status;
    createdAt: Date | string;
    updatedAt?: Date | string;
};
export type HabitLogCreateOrConnectWithoutUserHabitInput = {
    where: Prisma.HabitLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitLogCreateWithoutUserHabitInput, Prisma.HabitLogUncheckedCreateWithoutUserHabitInput>;
};
export type HabitLogCreateManyUserHabitInputEnvelope = {
    data: Prisma.HabitLogCreateManyUserHabitInput | Prisma.HabitLogCreateManyUserHabitInput[];
    skipDuplicates?: boolean;
};
export type HabitLogUpsertWithWhereUniqueWithoutUserHabitInput = {
    where: Prisma.HabitLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.HabitLogUpdateWithoutUserHabitInput, Prisma.HabitLogUncheckedUpdateWithoutUserHabitInput>;
    create: Prisma.XOR<Prisma.HabitLogCreateWithoutUserHabitInput, Prisma.HabitLogUncheckedCreateWithoutUserHabitInput>;
};
export type HabitLogUpdateWithWhereUniqueWithoutUserHabitInput = {
    where: Prisma.HabitLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.HabitLogUpdateWithoutUserHabitInput, Prisma.HabitLogUncheckedUpdateWithoutUserHabitInput>;
};
export type HabitLogUpdateManyWithWhereWithoutUserHabitInput = {
    where: Prisma.HabitLogScalarWhereInput;
    data: Prisma.XOR<Prisma.HabitLogUpdateManyMutationInput, Prisma.HabitLogUncheckedUpdateManyWithoutUserHabitInput>;
};
export type HabitLogScalarWhereInput = {
    AND?: Prisma.HabitLogScalarWhereInput | Prisma.HabitLogScalarWhereInput[];
    OR?: Prisma.HabitLogScalarWhereInput[];
    NOT?: Prisma.HabitLogScalarWhereInput | Prisma.HabitLogScalarWhereInput[];
    id?: Prisma.StringFilter<"HabitLog"> | string;
    date?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    userHabitId?: Prisma.StringFilter<"HabitLog"> | string;
    status?: Prisma.EnumStatusFilter<"HabitLog"> | $Enums.Status;
    createdAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HabitLog"> | Date | string;
};
export type HabitLogCreateManyUserHabitInput = {
    id?: string;
    date: Date | string;
    status?: $Enums.Status;
    createdAt: Date | string;
    updatedAt?: Date | string;
};
export type HabitLogUpdateWithoutUserHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HabitLogUncheckedUpdateWithoutUserHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HabitLogUncheckedUpdateManyWithoutUserHabitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HabitLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    userHabitId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habitLog"]>;
export type HabitLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    userHabitId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habitLog"]>;
export type HabitLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    userHabitId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habitLog"]>;
export type HabitLogSelectScalar = {
    id?: boolean;
    date?: boolean;
    userHabitId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type HabitLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "userHabitId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["habitLog"]>;
export type HabitLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
};
export type HabitLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
};
export type HabitLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userHabit?: boolean | Prisma.UserHabitDefaultArgs<ExtArgs>;
};
export type $HabitLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HabitLog";
    objects: {
        userHabit: Prisma.$UserHabitPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        userHabitId: string;
        status: $Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["habitLog"]>;
    composites: {};
};
export type HabitLogGetPayload<S extends boolean | null | undefined | HabitLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HabitLogPayload, S>;
export type HabitLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HabitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HabitLogCountAggregateInputType | true;
};
export interface HabitLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HabitLog'];
        meta: {
            name: 'HabitLog';
        };
    };
    findUnique<T extends HabitLogFindUniqueArgs>(args: Prisma.SelectSubset<T, HabitLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HabitLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HabitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HabitLogFindFirstArgs>(args?: Prisma.SelectSubset<T, HabitLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HabitLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HabitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HabitLogFindManyArgs>(args?: Prisma.SelectSubset<T, HabitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HabitLogCreateArgs>(args: Prisma.SelectSubset<T, HabitLogCreateArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HabitLogCreateManyArgs>(args?: Prisma.SelectSubset<T, HabitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HabitLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HabitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HabitLogDeleteArgs>(args: Prisma.SelectSubset<T, HabitLogDeleteArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HabitLogUpdateArgs>(args: Prisma.SelectSubset<T, HabitLogUpdateArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HabitLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, HabitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HabitLogUpdateManyArgs>(args: Prisma.SelectSubset<T, HabitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HabitLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HabitLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HabitLogUpsertArgs>(args: Prisma.SelectSubset<T, HabitLogUpsertArgs<ExtArgs>>): Prisma.Prisma__HabitLogClient<runtime.Types.Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HabitLogCountArgs>(args?: Prisma.Subset<T, HabitLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HabitLogCountAggregateOutputType> : number>;
    aggregate<T extends HabitLogAggregateArgs>(args: Prisma.Subset<T, HabitLogAggregateArgs>): Prisma.PrismaPromise<GetHabitLogAggregateType<T>>;
    groupBy<T extends HabitLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HabitLogGroupByArgs['orderBy'];
    } : {
        orderBy?: HabitLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HabitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HabitLogFieldRefs;
}
export interface Prisma__HabitLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    userHabit<T extends Prisma.UserHabitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserHabitDefaultArgs<ExtArgs>>): Prisma.Prisma__UserHabitClient<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HabitLogFieldRefs {
    readonly id: Prisma.FieldRef<"HabitLog", 'String'>;
    readonly date: Prisma.FieldRef<"HabitLog", 'DateTime'>;
    readonly userHabitId: Prisma.FieldRef<"HabitLog", 'String'>;
    readonly status: Prisma.FieldRef<"HabitLog", 'Status'>;
    readonly createdAt: Prisma.FieldRef<"HabitLog", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"HabitLog", 'DateTime'>;
}
export type HabitLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where: Prisma.HabitLogWhereUniqueInput;
};
export type HabitLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where: Prisma.HabitLogWhereUniqueInput;
};
export type HabitLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HabitLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HabitLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HabitLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitLogCreateInput, Prisma.HabitLogUncheckedCreateInput>;
};
export type HabitLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HabitLogCreateManyInput | Prisma.HabitLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HabitLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    data: Prisma.HabitLogCreateManyInput | Prisma.HabitLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HabitLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HabitLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitLogUpdateInput, Prisma.HabitLogUncheckedUpdateInput>;
    where: Prisma.HabitLogWhereUniqueInput;
};
export type HabitLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HabitLogUpdateManyMutationInput, Prisma.HabitLogUncheckedUpdateManyInput>;
    where?: Prisma.HabitLogWhereInput;
    limit?: number;
};
export type HabitLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitLogUpdateManyMutationInput, Prisma.HabitLogUncheckedUpdateManyInput>;
    where?: Prisma.HabitLogWhereInput;
    limit?: number;
    include?: Prisma.HabitLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HabitLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where: Prisma.HabitLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitLogCreateInput, Prisma.HabitLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HabitLogUpdateInput, Prisma.HabitLogUncheckedUpdateInput>;
};
export type HabitLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
    where: Prisma.HabitLogWhereUniqueInput;
};
export type HabitLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitLogWhereInput;
    limit?: number;
};
export type HabitLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitLogSelect<ExtArgs> | null;
    omit?: Prisma.HabitLogOmit<ExtArgs> | null;
    include?: Prisma.HabitLogInclude<ExtArgs> | null;
};
export {};
