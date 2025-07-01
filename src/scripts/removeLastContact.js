import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log(
        'There are no contacts to delete. The db.json file is empty.',
      );
      return;
    }

    const updatedContacts = contacts.slice(0, -1);
    await writeContacts(updatedContacts);

    console.log('The last contact was successfully deleted.');
    console.log(`Contacts left: ${updatedContacts.length}`);
  } catch (error) {
    console.error('Error deleting last contact:', error);
  }
};

removeLastContact();
