import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ItemInputData, Items } from "../models/items.model";
import { ItemService } from "../items.service";

@Resolver()
export class ItemsResolver{
    constructor(private itemService: ItemService){}
    @Query((returns)=> Items)
    getItem(){
        return{
            id: 1,
            name: 'ps5',
            description: 'gaing console',
        }
    }

    @Mutation((returns)=> Items)
    createItem(@Args('createItemData') createItemData: ItemInputData){
        return this.itemService.createItem(createItemData);
    }
}
