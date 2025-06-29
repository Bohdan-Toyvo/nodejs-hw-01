import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  const data = JSON.stringify(contacts, null, 2);

  try {
    await fs.writeFile(PATH_DB, data, 'utf8');
  } catch (error) {
    console.error(error);
  }
};
