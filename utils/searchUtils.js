const filterByCriteria = function(data, criteria) {
  if (criteria) {
    if (data.option && data.option.includes(criteria)) {
      return true;
    }
    if (data.isCmdList && data.cmd && data.cmd.length > 0) {
      for (let i = data.cmd.length - 1; i >= 0; i--) {
        if (filterByCriteria(data.cmd[i])) {
          return true;
        }
      }
    } else if (data.cmd && data.cmd.includes(criteria) || data.keymap && data.keymap.includes(criteria)) {
      return true;
    }
  }
  return false;
}

const convertDataToVo = function(data) {
  return {
    cmd: data.cmd || data.keymap,
    ...data
  };
}

const getSearchResult = function(datas, criteria) {
  if (!datas) {
    return [];
  }
  return datas.filter(data => filterByCriteria(data, criteria)).map(data => convertDataToVo(data));
}



module.exports = {
  getSearchResult: getSearchResult
}