import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Items } from "./entities/item.entity";

@Injectable()
export class ItemService{
    constructor(
        @InjectRepository(Items) private _itemsRepository : Repository<Items>,
    ){}

    getItem(){
        return this._itemsRepository.find();
    }
    createItem(createItemData: any){    
        const newItem = this._itemsRepository.create(createItemData);
        return this._itemsRepository.save(newItem);
    }
}