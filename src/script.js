let count = document.querySelector("#count");
let increaseBtn = document.querySelector("#increase");
let resetBtn = document.querySelector("#reset");
let reset_all = document.querySelector("#reset_all");
let _count = 0;
const zikrCounts = {}
let saved = localStorage.getItem("zikrCounts");
if (saved) {
    Object.assign(zikrCounts, JSON.parse(saved));
}

let radios = document.querySelectorAll("input[name='zikr']");
radios.forEach((radio)=>{
    if (!(radio.id in zikrCounts)) {
        zikrCounts[radio.id] = 0;
    }
    document.querySelector(`#${radio.id}_count`).textContent = zikrCounts[radio.id];
    radio.addEventListener("change",()=>{
        let selected = document.querySelector("input[name='zikr']:checked");
        if (!selected) return;
        _count = zikrCounts[selected.id];
        count.textContent = _count;
        localStorage.setItem("zikrCounts", JSON.stringify(zikrCounts));
        localStorage.setItem("zikrChecked",selected.id);
    })
})

increaseBtn.addEventListener("click",()=>{
    let selected = document.querySelector("input[name='zikr']:checked");
    if (!selected) return;
    _count++;
    zikrCounts[selected.id] = _count;
    localStorage.setItem("zikrCounts", JSON.stringify(zikrCounts));
    count.textContent = _count;
    document.querySelector(`#${selected.id}_count`).textContent = _count;
});

resetBtn.addEventListener("click",()=>{
    let selected = document.querySelector("input[name='zikr']:checked");
    if (!selected) return;
    _count = 0;
    zikrCounts[selected.id] = _count;
    localStorage.setItem("zikrCounts", JSON.stringify(zikrCounts));
    count.textContent = _count;
    document.querySelector(`#${selected.id}_count`).textContent = _count;
})


reset_all.addEventListener("click",()=>{
    let selected = document.querySelectorAll("input[name='zikr']");
    _count = 0;
    count.textContent = _count;
    selected.forEach((select)=>{
        zikrCounts[select.id] = _count;
        document.querySelector(`#${select.id}_count`).textContent = _count;
    })
    localStorage.removeItem("zikrCounts");
    localStorage.removeItem("zikrChecked");
    localStorage.removeItem("themsaved");
    window.location.reload();
})


window.addEventListener("load",()=>{
    let selected = document.querySelector("input[name='zikr']:checked");
    if (selected) {
        _count = zikrCounts[selected.id];
        count.textContent = _count;
    }

    let savedRadio = localStorage.getItem("zikrChecked");
    if (savedRadio) {
        document.querySelector(`#${savedRadio}`).checked = true;
        _count = zikrCounts[savedRadio];
        count.textContent = _count;
    }

    let savedtheme = localStorage.getItem("themsaved");
    if (savedtheme === "red") {
        toggle.checked = true;
        root.style.setProperty('--col1', '#8C1007');
        root.style.setProperty('--col2', '#FFF0C4');
        moods.textContent = "Red Mood"
    }
    else if(savedtheme === "green"){
        toggle.checked = false;
        root.style.setProperty('--col1', '#14453d');
        root.style.setProperty('--col2', '#9affe1');
        moods.textContent = "Green Mood"
    }
})


// Theme changer
let toggle = document.querySelector("#themeToggle");
let root = document.documentElement;
let moods = document.querySelector("#moods");

toggle.addEventListener('change', () => {
  if(toggle.checked){
    root.style.setProperty('--col1', '#8C1007');
    root.style.setProperty('--col2', '#FFF0C4');
    moods.textContent = "Red Mood"
  } else {
    root.style.setProperty('--col1', '#14453d');
    root.style.setProperty('--col2', '#9affe1');
    moods.textContent = "Green Mood"
  }

  localStorage.setItem("themsaved",toggle.checked ? "red":"green");
});