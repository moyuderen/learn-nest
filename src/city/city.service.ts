import { Injectable } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { City } from './entities/city.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class CityService {
  @InjectEntityManager()
  private cityManager: EntityManager;

  @InjectRepository(City)
  private cityRepository: Repository<City>;

  async init() {
    // const city = new City();
    // city.name = '华北';
    // await this.cityRepository.save(city);

    // const child1 = new City();
    // child1.name = '山东';
    // const parent = await this.cityRepository.findOne({
    //   where: {
    //     name: '华北',
    //   },
    // });

    // if (parent) {
    //   child1.parent = parent;
    // }
    // await this.cityRepository.save(child1);

    const city = new City();
    city.name = '华南';
    await this.cityRepository.save(city);

    const child1 = new City();
    child1.name = '云南';
    const parent = await this.cityRepository.findOne({
      where: {
        name: '华南',
      },
    });

    if (parent) {
      child1.parent = parent;
    }
    await this.cityRepository.save(child1);

    const child2 = new City();
    child2.name = '昆明';
    const parent2 = await this.cityRepository.findOne({
      where: {
        name: '云南',
      },
    });

    if (parent2) {
      child2.parent = parent2;
    }
    await this.cityRepository.save(child2);
  }

  findTrees() {
    return this.cityManager.getTreeRepository(City).findTrees();
  }

  find() {
    return this.cityManager.getTreeRepository(City).find();
  }

  findRoots() {
    return this.cityManager.getTreeRepository(City).findRoots();
  }

  async findDescendantsTree(name: string) {
    const city = await this.cityRepository.findOne({
      where: { name },
    });
    return this.cityManager.getTreeRepository(City).findDescendantsTree(city);
  }

  async findDescendants(name: string) {
    const city = await this.cityRepository.findOne({
      where: { name },
    });
    return this.cityManager.getTreeRepository(City).findDescendants(city);
  }

  async findAncestorsTree(name: string) {
    const city = await this.cityRepository.findOne({
      where: { name },
    });
    return this.cityManager.getTreeRepository(City).findAncestorsTree(city);
  }

  async findAncestors(name: string) {
    const city = await this.cityRepository.findOne({
      where: { name },
    });
    return this.cityManager.getTreeRepository(City).findAncestors(city);
  }

  async findOne(id: number) {
    return await this.cityRepository.findOne({
      where: { id },
    });
  }
}
