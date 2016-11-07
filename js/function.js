
function $(selector,range){
	var range=range||document;
    if(typeof selector=="string"){
    	if(selector.charAt(0)=="#"){
    		return range.getElementById(selector.substr(1));
    	}
    	if(selector.charAt(0)=="."){
    		return getClass(selector.substr(1),range);
    	}
    	if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
            return range.getElementsByTagName(selector);
    	}
      if(/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)){
        return document.createElement(selector.slice(1,-1))
      }
    }else if(typeof selector=="function"){
       window.onload=selector;   	
    }
}




function getClass(classname,range){
	if(document.getElementsByClassName){
       return range.getElementsByClassName(classname);
	}else{
       var arr=[];
       var all=range.getElementsByTagName('*');
       for(i=0;i<all.length;i++){
       	if(check(all[i].className,classname)){
       		arr.push(all[i]);
       	}
       }
       return arr;
	}
	
}



function check(tagClass,name){
     var arr=tagClass.split(" ");
     for(i=0;i<arr.length;i++){
     	if(arr[i]==name){
     		return true
     	}
     }
     return false;
}



// textcontent
function text(obj,val){
  if(val==undefined){
  if(obj.textContent!=undefined){
     return obj.textContent;
  }
  else{
    return obj.innerText;
  }
}else{
   if(obj.textContent!=undefined){
      obj.textContent=val;
  }
  else{
     obj.textContent=val;
  }
}

}


// 获取通用样式。
function getStyle(obj,attr){
     if(obj.currentStyle){
      return   obj.currentStyle[attr];
     }else{
      return getComputedStyle(obj,null)[attr];
     }
}



//获取子节点
function getChilds(obj){
  var childs=obj.childNodes;
  var newArr=[];
  for(var i=0;i<childs.length;i++){
    if(!(childs[i].nodeType==8||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==""))){
       newArr.push(childs[i]);
    }
    
  }
  return newArr;
}

/*childs[i].nodeType==3;
trim(childs[i].nodeValue)!=""*/

function trim(str){
  return str.replace(/^\s+|\s+$/g,"");
}


//获取第一个子元素

function getFirstChild(parent){
  return getChilds(parent)[0];
}

function getLastChild(parent){
  var childs=getChilds(parent);
  return childs[childs.length-1];
}


function getIndexChild(parent,num){
  return getChilds(parent)[num];
}

//获取下一个兄弟节点

function getNext(obj){
   var next=obj.nextSibling;
   if(!next){
      return false;
    }
   while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
    next=next.nextSibling;
    if(!next){
      return false;
    }
   }
   return next;
}


function getPrevious(obj){
   var previous=obj.previousSibling;
   if(!previous){
      return false;
    }
   while(previous.nodeType==8||(previous.nodeType==3&&trim(previous.nodeValue)=="")){
    previous=previous.previousSibling;
    if(!previous){
      return false;
    }
   }
   return previous;
}


//往对象之前插入
function insertBefore(obj1,obj2){
  var parent=obj2.parentNode;
  parent.insertBefore(obj1,obj2);
}

//往对象之后插入
//往对象之后插入
function insertAfter(obj,endObj){
  var parent=endObj.parentNode;
  var next=getNext(endObj);
  if(next){
     parent.insertBefore(obj,next);
   }
   else{
    parent.appendChild(obj);
   }
}


//
