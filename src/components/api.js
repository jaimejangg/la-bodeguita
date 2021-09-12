export const getProducts = async () => {
  try {
    let url = "https://sheet.best/api/sheets/cd01c7fd-9a69-41aa-9b51-5c008a9364e8";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};
