import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

let client = null;

export async function connectDatabase() {
  // If already connected, reuse client
  if (client) {
    return client;
  }

  client = new Client({
  host: process.env.POSTGRESQL_HOST,
  user: process.env.POSTGRESQL_USER,
  database: process.env.POSTGRESQL_DATABASE,
  password: process.env.POSTGRESQL_PASSWORD,
  port: process.env.POSTGRES_PORT,
    ssl: {
      rejectUnauthorized: true,
      ca:`-----BEGIN CERTIFICATE-----
MIIEUDCCArigAwIBAgIUMbTvVrFO1X+00q1TCSdPfAbK2V0wDQYJKoZIhvcNAQEM
BQAwQDE+MDwGA1UEAww1ZTM4MTlmM2UtYWQ5OC00OTMwLWI2NDYtOWNkNjQ3M2Y1
MTZmIEdFTiAxIFByb2plY3QgQ0EwHhcNMjUxMjA2MDk0MDE1WhcNMzUxMjA0MDk0
MDE1WjBAMT4wPAYDVQQDDDVlMzgxOWYzZS1hZDk4LTQ5MzAtYjY0Ni05Y2Q2NDcz
ZjUxNmYgR0VOIDEgUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCC
AYoCggGBALzJEsoCXq/k00OfLKfxUnVoFrQPD30kophpuITDvmnHwde0mnFpGnyP
6PZwEc2GNZ4LHZkToMj+uP76towt4zurXPKVRk/CRYGJR6Th/DlzOjiwOHrB3KMz
NmWyDDCCNMd0winwFV9snZF+H7yPRdF2tqHwfSpA76PqUblOOFsgzGfEB3LXhF4s
WpS7bbawi9zpT4hDRGtiPo3Ru9JX8aPbAMs5Os7aD28G5mlgCM46p3VuGIjE13FZ
XaryW1cctZ4AVVDiCf2+Vbw9q6scDNCuSkKkOWkGzMCn0bNbqYocRTMcqHyHpS3m
nbgCZyUku+TVXehsgqGlLav/1MDYa9cAp5ZmmdoCFH+joa31hNSMLm+Ya7E9Cg1M
r/fsZCvqOgnT3oQ/vHx8nlrVrhywGlXgPL34P3mCrXbJvWDO7hGcB7qLXhvRcReY
yypu37CnMnDGtDmx1b4DS96w0UJziFmlQy++7UKKTNA5akn+X/ZlUEPeoIj9nLrB
i/VpEPgWowIDAQABo0IwQDAdBgNVHQ4EFgQUVn9Zmd0qyhxlDDKqWMY7cQaa6Tsw
EgYDVR0TAQH/BAgwBgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQAD
ggGBAAYulVXDX3gxWRsys1gV1FUyUWA+bl1ToP1wCNDcXRpp+lwOGiCadcH7rxuc
mG5El1wK7o/32CfTrTMGrVFTjUuJyH8ayUWi1gC7lMOp/ZfvsBzK7vDKTv/smQ3i
sBzrAJhENHFmqKBQf9H0AhFPFO1qu+1AxSUnECHiX6p1eNJzJmvrwi0j1OuF6vRC
W2uKUdf1G698SakxACIDiMAJpzgNWaHnpnvBuLI53w72dbD9BT/U/oXERjYLnOvC
uvVsstkfgI4y/T0OikABZlQJLL4g8FL6wp29pPRYhHRX3+unMpK3KIvf1vN4JMiM
IVKwqG2qr+Qd8YgdgTJr9/vRioENxyWfECD9Agf98Pj5rUNNHi+72j0FCrVRMFRG
JFgbvZhJocb3Pekra4ZMQJhuNx65wihxNh0MlnTa45Ja6F2CBaUqySa9z3IQAHP7
vicYjZYtuIHHafL7NdyKUgThwUSk9yUHQ/M7E2CaP/Ev+2eaYeryqfdi3fTfcjyz
guEing==
-----END CERTIFICATE-----`,   // load CA from env
    },
  });

  try {
    await client.connect();
    console.log("Connected to PostgreSQL");
  } catch (error) {
    console.error("Connection error:", error.message);
    client = null;
    throw error;
  }

  return client;
}

export { client };

