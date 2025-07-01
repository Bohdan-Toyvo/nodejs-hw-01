import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log(
      'All contacts have been successfully deleted from the db.json file.',
    );
  } catch (error) {
    console.error('Error while deleting all contacts:', error);
  }
};

removeAllContacts();
