import https from 'https';

const host = "kundanarvaana.in";
const key = "e8f49a21b76442658137cd219e5989e2";
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  `https://${host}/`,
  `https://${host}/kundan-arvaana-4bhk-residences-balewadi`,
  `https://${host}/kundan-arvaana-price-cost-sheet-pune`,
  `https://${host}/kundan-arvaana-baner-balewadi-real-estate-market`,
  `https://${host}/kundan-arvaana-tower-balewadi`,
  `https://${host}/kundan-arvaana-master-plan-floor-plans`,
  `https://${host}/kundan-arvaana-sky-amenities-balewadi`,
  `https://${host}/kundan-arvaana-baner-balewadi-location`,
  `https://${host}/kundan-arvaana-gallery-elevation-balewadi`,
  `https://${host}/kundan-arvaana-maharera-faq-balewadi`
];

async function pingUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`[PING] ${url} -> Status: ${res.statusCode}`);
      resolve(res.statusCode);
    }).on('error', (err) => {
      console.warn(`[PING FAIL] ${url} -> ${err.message}`);
      resolve(null);
    });
  });
}

async function submitIndexNow() {
  const payload = JSON.stringify({
    host: host,
    key: key,
    keyLocation: keyLocation,
    urlList: urlList
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      console.log(`[INDEXNOW] api.indexnow.org response: ${res.statusCode}`);
      resolve(res.statusCode);
    });
    req.on('error', (err) => {
      console.warn(`[INDEXNOW FAIL] ${err.message}`);
      resolve(null);
    });
    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log("==================================================");
  console.log("DIGITAL FORTRESS: SEARCH ENGINE INDEXING DISPATCH");
  console.log("==================================================");

  // 1. Ping Google Sitemap
  await pingUrl(`https://www.google.com/ping?sitemap=https://${host}/sitemap.xml`);

  // 2. Ping Bing Sitemap
  await pingUrl(`https://www.bing.com/ping?sitemap=https://${host}/sitemap.xml`);

  // 3. Dispatch IndexNow push notification
  await submitIndexNow();

  console.log("Search engine indexing ping routine completed.");
}

main();
