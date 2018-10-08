const filterByCriteria = function(data, criteria) {
  if (criteria) {
    if (data.option && data.option.toLowerCase().includes(criteria)) {
      return true;
    }
    if (data.isCmdList && data.cmd && data.cmd.length > 0) {
      for (let i = data.cmd.length - 1; i >= 0; i--) {
        if (filterByCriteria(data.cmd[i], criteria)) {
          return true;
        }
      }
    } else if (data.cmd && data.cmd.toLowerCase().includes(criteria) || data.keymap && data.keymap.toLowerCase().includes(criteria)) {
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
  return datas.filter(data => filterByCriteria(data, criteria.toLowerCase())).map(data => convertDataToVo(data));
}



module.exports = {
  getSearchResult: getSearchResult
}