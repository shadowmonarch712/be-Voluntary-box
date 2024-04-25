import { Module } from '@nestjs/common';
import { ItemsResolver } from './resolvers/items.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from './entities/item.entity';
import { ItemService } from './items.service';

@Module({
    imports: [TypeOrmModule.forFeature([Items])],
    providers: [ItemsResolver, ItemService],
    exports: [ItemService],
})
export class ItemsModule {}
