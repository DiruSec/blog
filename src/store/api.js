import sidebar_store from './modules/sidebar_store';

export default{
  updateTitle: function(string=''){
    document.title = string + ' - ' + sidebar_store.state.genConfig.title;
  },

  parseAjaxData: function(data){
    for (let index in data){
      data[index]['tags'] = data[index]['tag'];
      if (typeof(data[index]['tag']==='string')){
        data[index]['tags'] = [data[index]['tags']]
      }
      data[index]['createdAt'] = data[index]['created'];
      data[index]['_id'] = data[index]['pid'];
      data[index]['pathName'] = data[index]['path'];
      data[index]['updatedAt'] = data[index]['updated']
    }

    return (data)
  },

  parseArchiveData: function(data){
    for (let key in data) {
      for (let index in data[key]) {
        data[key][index]['createdAt'] = data[key][index]['created'];
        data[key][index]['_id'] = data[key][index]['pid'];
        data[key][index]['pathName'] = data[key][index]['path'];
      }
    }
    return (data)
  },
  
  parseArticleData: function(data){
    data['tags'] = data['tag'];
    if (typeof(data['tag']==='string')){
      data['tags'] = [data['tags']]
    }
    data['createdAt'] = data['created'];
    data['_id'] = data['pid'];
    data['pathName'] = data['path'];
    data['updatedAt'] = data['updated']
    return (data)
  },

  parseTagData: function(data){
    for (let index in data){
      data[index]['tagName'] = data[index]['tag'];
      data[index]['tagCount'] = data[index]['count'];
    }

    return (data)
  }
}