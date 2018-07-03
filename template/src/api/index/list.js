import axios from 'axios'
import { INDEX_LIST_GET } from "../index";

async function get(params) {
  let formData = new FormData();
  formData.append('page', params.page);
  return axios({
    method: 'post',
    url: INDEX_LIST_GET,
    headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
    data: formData
  })
}

async function del() {
  let formData = new FormData();
  formData.append('page', params.page);
  return axios({
    method: 'post',
    url: '//b.yunke.yunxi.tv/yunke/activity/list',
    headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
    data: formData
  })
}

export {
  get,
  del
}
