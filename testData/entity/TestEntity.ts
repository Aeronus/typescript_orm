import { Entity } from '../../src/decorator/EntityDecorator';
import { TestEntityRepository } from '../repository/TestEntityRepository';
import { EntityInterface } from '../../src/entity/EntityInterface';
import { Type } from 'class-transformer';
import 'reflect-metadata';

@Entity({ repositoryClass: TestEntityRepository, baseUri: '/test/api/testEntity' })
export class TestEntity implements EntityInterface {
    public name: string;

    public age: number;

    @Type(() => Date)
    public birthDay: Date;
}
