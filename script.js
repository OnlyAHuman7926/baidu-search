function search(query) {
  let script = document.createElement("script");
  script.src = "https://suggestion.baidu.com/su?cb=process&wd=" + query;
  document.body.append(script);
}

function process(data) {
  result.innerHTML = "";
  for (let obj of data.s) {
    let e = document.createElement("div");
    e.innerHTML = obj;
    result.append(e);
  };
}

const input = document.querySelector("input");
const result = document.querySelector("div.results");
input.oninput = (e) => {
  search(e.target.value);
}