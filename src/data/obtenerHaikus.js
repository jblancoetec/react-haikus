import { google } from "googleapis";

const autorizacion = new google.auth.GoogleAuth({
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  keyFile: "./credenciales.json",
});

const cliente = autorizacion.getClient();
const googleSheets = google.sheets({ version: "v4", auth: cliente });
const id = "10yvLseunf7i33KvRg8YvAt2Y8CrMnBndtbZdrYjRNUI";

const obtenerHaikus = async () => {
  const data = await googleSheets.spreadsheets.values.get({
    spreadsheetId: id,
    auth: cliente,
    range: "Hoja1!A2:E",
  });
  return JSON.stringify(data.data.values);
};

export default obtenerHaikus;
