import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';


const generatePDF = async (data) => {
  const htmlContent = `
    <html>
      <head>
        <style>
          h1 {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th {
            background-color: #f2f2f2;
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          td {
            border: 1px solid #ddd;
            padding: 8px;
          }
          .footer {
            font-size: 10px;
            font-style: italic;
            margin-top: 20px;
          }

          .container {
            display: flex;
            justify-content: space-between;
          }
          
          .left {
            font-size: 12px;
            float: left;
          }
          
          .right {
            font-size: 12px;
            float: right;
          }
        </style>
      </head>
      <body>
        <h1 style="color: red;">Bon de livraison</h1>
        </br>
        </br>
        <div class="container">
          <p class="left">Bon de livraison n°: ${data.bonNumber}</p>
          <p class="right">Destinataire: ${data.companyName}</p>
        </div>
        <div class="container">
          <p class="left">Date: ${data.date}</p>
          <p class="right">Adresse: ${data.clientAddress}</p>
        </div>
        <div class="container">
          <p class="left">Lien: Degeche</p>
          <p class="right">MF: ${data.mfNumber}</p>
        </div>
        <p style="font-size: 12px;">Numéro de client: ${data.clientNumber}</p>
        <p style="font-size: 12px;">Emis par: Rouissi Slim</p>
        </br>
        <table>
          <thead>
            <tr>
              <th>Référence</th>
              <th>Désignation</th>
              <th>Qté</th>
              <th>Unité</th>
              <th>Prix unitaire</th>
              <th>Montant HT</th>
            </tr>
          </thead>
          <tbody>
            ${data.items.map((item) => `
              <tr>
                <td>${item.reference}</td>
                <td>${item.designation}</td>
                <td>${item.quantity}</td>
                <td>${item.unit}</td>
                <td>${item.unitPrice}</td>
                <td>${item.amount}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div class="footer">
          <p style="font-size: 15px; color: red;"
          >Siege Social </p>
          <p>Adresse: Ras elaain </br>
          2260 Degache</p>
          <p>MF: 171825 1/M</p>
          <p>Email: slimrouissi007@gmail.com</p>
        </div>
      </body>
    </html>
  `;

  const { uri } = await printToFileAsync({ html: htmlContent });
  await shareAsync(uri);
  return uri;
};

export default generatePDF;
