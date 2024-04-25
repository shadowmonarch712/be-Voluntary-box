import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Items{
    @Field(type=>Int)
    id: number;
    
    @Field()
    name: string;

    @Field()
    description: string;
}

@InputType  ()
export class ItemInputData{
    @Field()
    name: string;

    @Field()
    description: string;
}