import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type HabitModel = runtime.Types.Result.DefaultSelection<Prisma.$HabitPayload>;
export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null;
    _min: HabitMinAggregateOutputType | null;
    _max: HabitMaxAggregateOutputType | null;
};
export type HabitMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    categoryId: string | null;
    isDefault: boolean | null;
    deletedAt: Date | null;
};
export type HabitMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    categoryId: string | null;
    isDefault: boolean | null;
    deletedAt: Date | null;
};
export type HabitCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    categoryId: number;
    isDefault: number;
    deletedAt: number;
    _all: number;
};
export type HabitMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    categoryId?: true;
    isDefault?: true;
    deletedAt?: true;
};
export type HabitMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    categoryId?: true;
    isDefault?: true;
    deletedAt?: true;
};
export type HabitCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    categoryId?: true;
    isDefault?: true;
    deletedAt?: true;
    _all?: true;
};
export type HabitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithRelationInput | Prisma.HabitOrderByWithRelationInput[];
    cursor?: Prisma.HabitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HabitCountAggregateInputType;
    _min?: HabitMinAggregateInputType;
    _max?: HabitMaxAggregateInputType;
};
export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
    [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHabit[P]> : Prisma.GetScalarType<T[P], AggregateHabit[P]>;
};
export type HabitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithAggregationInput | Prisma.HabitOrderByWithAggregationInput[];
    by: Prisma.HabitScalarFieldEnum[] | Prisma.HabitScalarFieldEnum;
    having?: Prisma.HabitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HabitCountAggregateInputType | true;
    _min?: HabitMinAggregateInputType;
    _max?: HabitMaxAggregateInputType;
};
export type HabitGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    categoryId: string | null;
    isDefault: boolean;
    deletedAt: Date | null;
    _count: HabitCountAggregateOutputType | null;
    _min: HabitMinAggregateOutputType | null;
    _max: HabitMaxAggregateOutputType | null;
};
type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HabitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HabitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HabitGroupByOutputType[P]>;
}>>;
export type HabitWhereInput = {
    AND?: Prisma.HabitWhereInput | Prisma.HabitWhereInput[];
    OR?: Prisma.HabitWhereInput[];
    NOT?: Prisma.HabitWhereInput | Prisma.HabitWhereInput[];
    id?: Prisma.StringFilter<"Habit"> | string;
    name?: Prisma.StringFilter<"Habit"> | string;
    description?: Prisma.StringNullableFilter<"Habit"> | string | null;
    categoryId?: Prisma.StringNullableFilter<"Habit"> | string | null;
    isDefault?: Prisma.BoolFilter<"Habit"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"Habit"> | Date | string | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    userHabits?: Prisma.UserHabitListRelationFilter;
};
export type HabitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    userHabits?: Prisma.UserHabitOrderByRelationAggregateInput;
};
export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name_isDefault?: Prisma.HabitNameIsDefaultCompoundUniqueInput;
    AND?: Prisma.HabitWhereInput | Prisma.HabitWhereInput[];
    OR?: Prisma.HabitWhereInput[];
    NOT?: Prisma.HabitWhereInput | Prisma.HabitWhereInput[];
    name?: Prisma.StringFilter<"Habit"> | string;
    description?: Prisma.StringNullableFilter<"Habit"> | string | null;
    categoryId?: Prisma.StringNullableFilter<"Habit"> | string | null;
    isDefault?: Prisma.BoolFilter<"Habit"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"Habit"> | Date | string | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    userHabits?: Prisma.UserHabitListRelationFilter;
}, "id" | "name_isDefault">;
export type HabitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.HabitCountOrderByAggregateInput;
    _max?: Prisma.HabitMaxOrderByAggregateInput;
    _min?: Prisma.HabitMinOrderByAggregateInput;
};
export type HabitScalarWhereWithAggregatesInput = {
    AND?: Prisma.HabitScalarWhereWithAggregatesInput | Prisma.HabitScalarWhereWithAggregatesInput[];
    OR?: Prisma.HabitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HabitScalarWhereWithAggregatesInput | Prisma.HabitScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Habit"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Habit"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Habit"> | string | null;
    categoryId?: Prisma.StringNullableWithAggregatesFilter<"Habit"> | string | null;
    isDefault?: Prisma.BoolWithAggregatesFilter<"Habit"> | boolean;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Habit"> | Date | string | null;
};
export type HabitCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    isDefault?: boolean;
    deletedAt?: Date | string | null;
    category?: Prisma.CategoryCreateNestedOneWithoutHabitInput;
    userHabits?: Prisma.UserHabitCreateNestedManyWithoutHabitInput;
};
export type HabitUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    categoryId?: string | null;
    isDefault?: boolean;
    deletedAt?: Date | string | null;
    userHabits?: Prisma.UserHabitUncheckedCreateNestedManyWithoutHabitInput;
};
export type HabitUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.CategoryUpdateOneWithoutHabitNestedInput;
    userHabits?: Prisma.UserHabitUpdateManyWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userHabits?: Prisma.UserHabitUncheckedUpdateManyWithoutHabitNestedInput;
};
export type HabitCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    categoryId?: string | null;
    isDefault?: boolean;
    deletedAt?: Date | string | null;
};
export type HabitUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitNameIsDefaultCompoundUniqueInput = {
    name: string;
    isDefault: boolean;
};
export type HabitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type HabitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type HabitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type HabitScalarRelationFilter = {
    is?: Prisma.HabitWhereInput;
    isNot?: Prisma.HabitWhereInput;
};
export type HabitListRelationFilter = {
    every?: Prisma.HabitWhereInput;
    some?: Prisma.HabitWhereInput;
    none?: Prisma.HabitWhereInput;
};
export type HabitOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type HabitCreateNestedOneWithoutUserHabitsInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutUserHabitsInput, Prisma.HabitUncheckedCreateWithoutUserHabitsInput>;
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutUserHabitsInput;
    connect?: Prisma.HabitWhereUniqueInput;
};
export type HabitUpdateOneRequiredWithoutUserHabitsNestedInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutUserHabitsInput, Prisma.HabitUncheckedCreateWithoutUserHabitsInput>;
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutUserHabitsInput;
    upsert?: Prisma.HabitUpsertWithoutUserHabitsInput;
    connect?: Prisma.HabitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HabitUpdateToOneWithWhereWithoutUserHabitsInput, Prisma.HabitUpdateWithoutUserHabitsInput>, Prisma.HabitUncheckedUpdateWithoutUserHabitsInput>;
};
export type HabitCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput> | Prisma.HabitCreateWithoutCategoryInput[] | Prisma.HabitUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutCategoryInput | Prisma.HabitCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.HabitCreateManyCategoryInputEnvelope;
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
};
export type HabitUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput> | Prisma.HabitCreateWithoutCategoryInput[] | Prisma.HabitUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutCategoryInput | Prisma.HabitCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.HabitCreateManyCategoryInputEnvelope;
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
};
export type HabitUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput> | Prisma.HabitCreateWithoutCategoryInput[] | Prisma.HabitUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutCategoryInput | Prisma.HabitCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.HabitUpsertWithWhereUniqueWithoutCategoryInput | Prisma.HabitUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.HabitCreateManyCategoryInputEnvelope;
    set?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    disconnect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    delete?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    update?: Prisma.HabitUpdateWithWhereUniqueWithoutCategoryInput | Prisma.HabitUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.HabitUpdateManyWithWhereWithoutCategoryInput | Prisma.HabitUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.HabitScalarWhereInput | Prisma.HabitScalarWhereInput[];
};
export type HabitUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput> | Prisma.HabitCreateWithoutCategoryInput[] | Prisma.HabitUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.HabitCreateOrConnectWithoutCategoryInput | Prisma.HabitCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.HabitUpsertWithWhereUniqueWithoutCategoryInput | Prisma.HabitUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.HabitCreateManyCategoryInputEnvelope;
    set?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    disconnect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    delete?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    connect?: Prisma.HabitWhereUniqueInput | Prisma.HabitWhereUniqueInput[];
    update?: Prisma.HabitUpdateWithWhereUniqueWithoutCategoryInput | Prisma.HabitUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.HabitUpdateManyWithWhereWithoutCategoryInput | Prisma.HabitUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.HabitScalarWhereInput | Prisma.HabitScalarWhereInput[];
};
export type HabitCreateWithoutUserHabitsInput = {
    id?: string;
    name: string;
    description?: string | null;
    isDefault?: boolean;
    deletedAt?: Date | string | null;
    category?: Prisma.CategoryCreateNestedOneWithoutHabitInput;
};
export type HabitUncheckedCreateWithoutUserHabitsInput = {
    id?: string;
    name: string;
    description?: string | null;
    categoryId?: string | null;
    isDefault?: boolean;
    deletedAt?: Date | string | null;
};
export type HabitCreateOrConnectWithoutUserHabitsInput = {
    where: Prisma.HabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitCreateWithoutUserHabitsInput, Prisma.HabitUncheckedCreateWithoutUserHabitsInput>;
};
export type HabitUpsertWithoutUserHabitsInput = {
    update: Prisma.XOR<Prisma.HabitUpdateWithoutUserHabitsInput, Prisma.HabitUncheckedUpdateWithoutUserHabitsInput>;
    create: Prisma.XOR<Prisma.HabitCreateWithoutUserHabitsInput, Prisma.HabitUncheckedCreateWithoutUserHabitsInput>;
    where?: Prisma.HabitWhereInput;
};
export type HabitUpdateToOneWithWhereWithoutUserHabitsInput = {
    where?: Prisma.HabitWhereInput;
    data: Prisma.XOR<Prisma.HabitUpdateWithoutUserHabitsInput, Prisma.HabitUncheckedUpdateWithoutUserHabitsInput>;
};
export type HabitUpdateWithoutUserHabitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    category?: Prisma.CategoryUpdateOneWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateWithoutUserHabitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    isDefault?: boolean;
    deletedAt?: Date | string | null;
    userHabits?: Prisma.UserHabitCreateNestedManyWithoutHabitInput;
};
export type HabitUncheckedCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    isDefault?: boolean;
    deletedAt?: Date | string | null;
    userHabits?: Prisma.UserHabitUncheckedCreateNestedManyWithoutHabitInput;
};
export type HabitCreateOrConnectWithoutCategoryInput = {
    where: Prisma.HabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput>;
};
export type HabitCreateManyCategoryInputEnvelope = {
    data: Prisma.HabitCreateManyCategoryInput | Prisma.HabitCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type HabitUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.HabitWhereUniqueInput;
    update: Prisma.XOR<Prisma.HabitUpdateWithoutCategoryInput, Prisma.HabitUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.HabitCreateWithoutCategoryInput, Prisma.HabitUncheckedCreateWithoutCategoryInput>;
};
export type HabitUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.HabitWhereUniqueInput;
    data: Prisma.XOR<Prisma.HabitUpdateWithoutCategoryInput, Prisma.HabitUncheckedUpdateWithoutCategoryInput>;
};
export type HabitUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.HabitScalarWhereInput;
    data: Prisma.XOR<Prisma.HabitUpdateManyMutationInput, Prisma.HabitUncheckedUpdateManyWithoutCategoryInput>;
};
export type HabitScalarWhereInput = {
    AND?: Prisma.HabitScalarWhereInput | Prisma.HabitScalarWhereInput[];
    OR?: Prisma.HabitScalarWhereInput[];
    NOT?: Prisma.HabitScalarWhereInput | Prisma.HabitScalarWhereInput[];
    id?: Prisma.StringFilter<"Habit"> | string;
    name?: Prisma.StringFilter<"Habit"> | string;
    description?: Prisma.StringNullableFilter<"Habit"> | string | null;
    categoryId?: Prisma.StringNullableFilter<"Habit"> | string | null;
    isDefault?: Prisma.BoolFilter<"Habit"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"Habit"> | Date | string | null;
};
export type HabitCreateManyCategoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    isDefault?: boolean;
    deletedAt?: Date | string | null;
};
export type HabitUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userHabits?: Prisma.UserHabitUpdateManyWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    userHabits?: Prisma.UserHabitUncheckedUpdateManyWithoutHabitNestedInput;
};
export type HabitUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type HabitCountOutputType = {
    userHabits: number;
};
export type HabitCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    userHabits?: boolean | HabitCountOutputTypeCountUserHabitsArgs;
};
export type HabitCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitCountOutputTypeSelect<ExtArgs> | null;
};
export type HabitCountOutputTypeCountUserHabitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserHabitWhereInput;
};
export type HabitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    categoryId?: boolean;
    isDefault?: boolean;
    deletedAt?: boolean;
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
    userHabits?: boolean | Prisma.Habit$userHabitsArgs<ExtArgs>;
    _count?: boolean | Prisma.HabitCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["habit"]>;
export type HabitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    categoryId?: boolean;
    isDefault?: boolean;
    deletedAt?: boolean;
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["habit"]>;
export type HabitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    categoryId?: boolean;
    isDefault?: boolean;
    deletedAt?: boolean;
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
}, ExtArgs["result"]["habit"]>;
export type HabitSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    categoryId?: boolean;
    isDefault?: boolean;
    deletedAt?: boolean;
};
export type HabitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "categoryId" | "isDefault" | "deletedAt", ExtArgs["result"]["habit"]>;
export type HabitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
    userHabits?: boolean | Prisma.Habit$userHabitsArgs<ExtArgs>;
    _count?: boolean | Prisma.HabitCountOutputTypeDefaultArgs<ExtArgs>;
};
export type HabitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
};
export type HabitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.Habit$categoryArgs<ExtArgs>;
};
export type $HabitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Habit";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs> | null;
        userHabits: Prisma.$UserHabitPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        categoryId: string | null;
        isDefault: boolean;
        deletedAt: Date | null;
    }, ExtArgs["result"]["habit"]>;
    composites: {};
};
export type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HabitPayload, S>;
export type HabitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HabitCountAggregateInputType | true;
};
export interface HabitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Habit'];
        meta: {
            name: 'Habit';
        };
    };
    findUnique<T extends HabitFindUniqueArgs>(args: Prisma.SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HabitFindFirstArgs>(args?: Prisma.SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HabitFindManyArgs>(args?: Prisma.SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HabitCreateArgs>(args: Prisma.SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HabitCreateManyArgs>(args?: Prisma.SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HabitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HabitDeleteArgs>(args: Prisma.SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HabitUpdateArgs>(args: Prisma.SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HabitDeleteManyArgs>(args?: Prisma.SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HabitUpdateManyArgs>(args: Prisma.SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HabitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HabitUpsertArgs>(args: Prisma.SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma.Prisma__HabitClient<runtime.Types.Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HabitCountArgs>(args?: Prisma.Subset<T, HabitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HabitCountAggregateOutputType> : number>;
    aggregate<T extends HabitAggregateArgs>(args: Prisma.Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>;
    groupBy<T extends HabitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HabitGroupByArgs['orderBy'];
    } : {
        orderBy?: HabitGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HabitFieldRefs;
}
export interface Prisma__HabitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.Habit$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Habit$categoryArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    userHabits<T extends Prisma.Habit$userHabitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Habit$userHabitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserHabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HabitFieldRefs {
    readonly id: Prisma.FieldRef<"Habit", 'String'>;
    readonly name: Prisma.FieldRef<"Habit", 'String'>;
    readonly description: Prisma.FieldRef<"Habit", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Habit", 'String'>;
    readonly isDefault: Prisma.FieldRef<"Habit", 'Boolean'>;
    readonly deletedAt: Prisma.FieldRef<"Habit", 'DateTime'>;
}
export type HabitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where: Prisma.HabitWhereUniqueInput;
};
export type HabitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where: Prisma.HabitWhereUniqueInput;
};
export type HabitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithRelationInput | Prisma.HabitOrderByWithRelationInput[];
    cursor?: Prisma.HabitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitScalarFieldEnum | Prisma.HabitScalarFieldEnum[];
};
export type HabitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithRelationInput | Prisma.HabitOrderByWithRelationInput[];
    cursor?: Prisma.HabitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitScalarFieldEnum | Prisma.HabitScalarFieldEnum[];
};
export type HabitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithRelationInput | Prisma.HabitOrderByWithRelationInput[];
    cursor?: Prisma.HabitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HabitScalarFieldEnum | Prisma.HabitScalarFieldEnum[];
};
export type HabitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitCreateInput, Prisma.HabitUncheckedCreateInput>;
};
export type HabitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HabitCreateManyInput | Prisma.HabitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HabitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    data: Prisma.HabitCreateManyInput | Prisma.HabitCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HabitIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HabitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitUpdateInput, Prisma.HabitUncheckedUpdateInput>;
    where: Prisma.HabitWhereUniqueInput;
};
export type HabitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HabitUpdateManyMutationInput, Prisma.HabitUncheckedUpdateManyInput>;
    where?: Prisma.HabitWhereInput;
    limit?: number;
};
export type HabitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HabitUpdateManyMutationInput, Prisma.HabitUncheckedUpdateManyInput>;
    where?: Prisma.HabitWhereInput;
    limit?: number;
    include?: Prisma.HabitIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HabitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where: Prisma.HabitWhereUniqueInput;
    create: Prisma.XOR<Prisma.HabitCreateInput, Prisma.HabitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HabitUpdateInput, Prisma.HabitUncheckedUpdateInput>;
};
export type HabitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
    where: Prisma.HabitWhereUniqueInput;
};
export type HabitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HabitWhereInput;
    limit?: number;
};
export type Habit$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
};
export type Habit$userHabitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HabitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HabitSelect<ExtArgs> | null;
    omit?: Prisma.HabitOmit<ExtArgs> | null;
    include?: Prisma.HabitInclude<ExtArgs> | null;
};
export {};
