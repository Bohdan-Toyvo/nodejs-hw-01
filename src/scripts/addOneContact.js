import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();

    const newContact = createFakeContact();

    const updatedContacts = [...existingContacts, newContact];

    await writeContacts(updatedContacts);

    console.log('One new contact has been successfully added.');
    console.log(
      `Total number of contacts in the file: ${updatedContacts.length}`,
    );
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

addOneContact();
