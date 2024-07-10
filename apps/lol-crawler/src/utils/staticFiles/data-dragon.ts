import * as fs from 'fs';
import * as path from 'path';
import { ItemDTO } from '../../models/league';

const patch = '14.13.1';

const dataDragonDataPath = path.join(__dirname, patch, 'data', 'en_US');

const getAllItemsData = (): ItemDTO => {
  const itemPath = path.join(dataDragonDataPath, 'item.json');
  try {
    const data = fs.readFileSync(itemPath, 'utf-8');
    return JSON.parse(data) as ItemDTO;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
};

const getItemDataById = (id: number) => {
  const allItems = getAllItemsData();
  return allItems.data[id];
};

export { getAllItemsData, getItemDataById };
