import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserService } from "../users.service";
import { User, loginInputData } from "../models/user.model";

@Resolver()
export class UserResolver{
    constructor(private userService: UserService){}

    @Query( returns => String)
    login(@Args('loginData') loginData: loginInputData): string{
        return 'hello';
    }
    
}
