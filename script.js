function search(query) {
  let script = document.createElement("script");
  script.src = "https://suggestion.baidu.com/su?cb=process&wd=" + query;
  document.body.append(script);
}

function process(data) {
  if (data.q != input.value) return;
  result.innerHTML = "";
  for (let obj of data.s) {
    let e = document.createElement("div");
    e.innerHTML = obj;
    e.onpointerdown = () => {
      input.value = e.innerHTML;
    }
    result.append(e);
  };
}

const input = document.querySelector("input");
const result = document.querySelector("div.results");
input.oninput = (e) => {
  result.style.display = "block";
  search(e.target.value);
}
input.onblur = () => {
  result.style.display = "none";
}

document.getElementById('submit').onclick = () => {
  window.open("https://baidu.com/s?wd=" + input.value, "_blank");
}