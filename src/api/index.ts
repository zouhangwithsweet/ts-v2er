import { ajax } from './ajax'

// 最热主题
export const getHotList: any = () => ajax.get('/topics/hot.json', {})

// 最新主题
export const getNowList: any = () => ajax.get('/topics/latest.json', {})

// 所有节点
export const getAllNodes: any = () => ajax.get('/nodes/all.json', {})

// 节点信息
export const getNodeInfo: any = (ops:any) => ajax.get(`/nodes/show.json?name=${ops}`, {})

// 用户主页
export const getUserInfo = (ops: any) => ajax.get('/members/show.json', { params: ops })

// 帖子内容
interface HeaderParams {
  id: string;
}
export const getListHeader = (ops: HeaderParams) => ajax.get('/topics/show.json', { params: ops })

// 帖子回复详情
interface DetailParams {
  topic_id: string;
  page_size?: number;
  page?: number; 
}
export const getListDetail = (ops: DetailParams) => ajax.get('/replies/show.json', { params: ops })
