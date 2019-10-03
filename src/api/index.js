import request from '../util/request'

export const workspace = (data) => request.get('/workspace/list', data);
