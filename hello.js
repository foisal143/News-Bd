// common function for data show
const commonData = (data, limit, container, loader, showBtn) => {
  const teslaContainer = document.getElementById(container);
  // loader section show
  document.getElementById(loader).classList.remove('hidden');
  const limitData = data.slice(0, limit);
  // condition for show all news section
  if (limit && data.length > 3) {
    document.getElementById(showBtn).classList.remove('hidden');
  } else {
    document.getElementById(showBtn).classList.add('hidden');
  }
  teslaContainer.innerHTML = '';
  // loop for data
  limitData.forEach(element => {
    console.log(element);
    const {
      urlToImage,
      url,
      title,
      publishedAt,
      description,
      content,
      author,
    } = element;
    const fullDate = new Date(publishedAt);
    const date = new Date(fullDate).toString();
    // const date = stDate.slice(0, 15);
    teslaContainer.innerHTML += `
        <div class="flex  p-5 md:p-12 flex-col md:flex-row gap-12">
          <div class="md:w-2/5 ">
            <img src="${urlToImage}" alt="">
            <div>
              <p><span class="font-semibold">Author:</span> ${author}</p>
              <p><span class="font-semibold">Published In:</span> ${date}</p>
            </div>
          </div>
          <div class="md:px-12">
            <h2 class="md:text-3xl font-semibold">Title: ${title}</h2>
            <p><span class="font-semibold font-2xl">Discription:</span> ${description}</p>
            <p class="my-5"><span class="font-semibold font-2xl ">Content:</span> ${content}</p>
            <p><span class="font-semibold font-2xl">Url:</span> <a href="${url}"> ${url} </a></p>
          </div>
        </div>
  `;
    // loader section disabled
    document.getElementById(loader).classList.add('hidden');
  });
};
// load tesla data
const loadTeslaData = async limit => {
  const url = `
https://newsapi.org/v2/everything?q=tesla&from=2023-09-30&sortBy=publishedAt&apiKey=167cdc352820421b8621ec6d33606a0b`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    showTeslaData(data.articles, limit);
  } catch (er) {
    console.log(er);
  }
};
// show tesla data
const showTeslaData = (data, limit) => {
  commonData(data, limit, 'teslaContainer', 'loader', 'teslaBtnSec');
};
// show more tesla news section
document.getElementById('teslaSallBtn').addEventListener('click', () => {
  loadTeslaData();
});

loadTeslaData(3);

// load data for apple section

const loadAppleData = async limit => {
  const url = `
https://newsapi.org/v2/everything?q=apple&from=2023-10-29&to=2023-10-29&sortBy=popularity&apiKey=167cdc352820421b8621ec6d33606a0b`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    showAppleData(data.articles, limit);
  } catch (er) {
    console.log(er);
  }
};
// show apple data
const showAppleData = (data, limit) => {
  commonData(data, limit, 'appleContainer', 'loaderApple', 'appleBtnSec');
};

document.getElementById('appleSallBtn').addEventListener('click', () => {
  loadAppleData();
});
loadAppleData(3);

// load data for us section

const loadUsData = async limit => {
  const url = `
https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=167cdc352820421b8621ec6d33606a0b`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    showUsData(data.articles, limit);
  } catch (er) {
    console.log(er);
  }
};
// show us data
const showUsData = (data, limit) => {
  commonData(data, limit, 'usContainer', 'loaderUs', 'usBtnSec');
};

document.getElementById('usSallBtn').addEventListener('click', () => {
  loadUsData();
});
loadUsData(3);

// load data for Wall Street Journal section

const loadWsData = async limit => {
  const url = `
 https://newsapi.org/v2/everything?domains=wsj.com&apiKey=167cdc352820421b8621ec6d33606a0b`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    showWsData(data.articles, limit);
  } catch (er) {
    console.log(er);
  }
};
// show Wall Street Journal data
const showWsData = (data, limit) => {
  commonData(data, limit, 'wsjContainer', 'loaderWsj', 'wsjBtnSec');
};

document.getElementById('wsjSallBtn').addEventListener('click', () => {
  loadWsData();
});
loadWsData(3);
