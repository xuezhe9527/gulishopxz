import { v4 as uuidv4 } from 'uuid';

//生成userTempId的临时工具包
function getUserTempId() {
  let userTempId = localStorage.getItem("USERTEMPID_KEY")
  if (!userTempId) {
    userTempId = uuidv4()
    localStorage.setItem("USERTEMPID_KEY", userTempId)
  }
  return userTempId
}

export {
  getUserTempId
}