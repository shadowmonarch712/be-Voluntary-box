import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User{
    @Field(type=>Int)
    id: number;
    
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    email:string;

    @Field()
    password: string;

    @Field() 
    roles: string;
}

@InputType()
export class loginInputData{
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    roles: string;
}