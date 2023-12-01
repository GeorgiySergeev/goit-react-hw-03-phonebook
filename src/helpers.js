const LOCAL_KEY = 'contacts';

export const getContactsFromLocalStorage = () => {
  const localStorageContacts =
    JSON.parse(localStorage.getItem('contacts')) ?? [];

  return localStorageContacts;
};

export const setContactsToLocalStorage = contacts => {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
};
