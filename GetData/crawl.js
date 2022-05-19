let requestUrl = "http://yugiohprices.com/api/top_100_cards?rarity=rare";

const getData = async (requestUrl) => {
  const res = await fetch(requestUrl);
  if (res.ok) {
    const data = await res.json();
    console.log(data.data);
  }
};

console.log(getData(requestUrl));
