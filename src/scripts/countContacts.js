import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (error) {
    console.error('Error while counting contacts:', error);
    return 0;
  }
};

console.log(await countContacts());
