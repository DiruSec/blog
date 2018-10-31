export default{
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