let arr = excel;

let titleMap = {};  //用来保存标题在res数组中的索引
let index = 0;

let res = [];
let invalidList = [];
for (let obj of arr) {

  if (obj.titleCh === "" || (obj.desCh === "" && obj.desJp === "")) {
    invalidList.push(obj);
    continue;
  }

  //空字符用另一语言替换
  obj.desCh = obj.desCh === "" ? obj.desJp : obj.desCh;
  obj.desJp = obj.desJp === "" ? obj.desCh : obj.desJp;

  if (!(obj.titleCh in titleMap)) {
    titleMap[obj.titleCh] = index++;  //保存索引后，index自增

    //构造初始声音list
    let voiceList = [];
    let voice = {
      desCh: obj.desCh,
      desJp: obj.desJp,
      url: "kohigashihitona/" + obj.file_name + "." + obj.suffix
    }
    voiceList.push(voice);
    //构造初始声音list
    res.push({
      titleCh: obj.titleCh,
      titleJp: obj.titleJp,
      voice: voiceList
    })
  }
  else {
    let titleIndex = titleMap[obj.titleCh]; //用标题去取索引值
    let voiceList = res[titleIndex].voice;
    let voice = {
      desCh: obj.desCh,
      desJp: obj.desJp,
      url: "kohigashihitona/" + obj.file_name + "." + obj.suffix
    }
    voiceList.push(voice);

  }
}
const MAINFEST = res;