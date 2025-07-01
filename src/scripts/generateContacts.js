import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`Successfully generated and added ${number} contact(s).`);
    console.log(
      `Total number of contacts in the file: ${updatedContacts.length}`,
    );
  } catch (error) {
    console.error('Error while generating contacts:', error);
  }
};

generateContacts(5);
