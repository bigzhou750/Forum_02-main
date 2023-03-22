
export interface HotPostModel {
  index: number
  id: string;
  title: string;
}

export function transHotPost(data: any) {
  const res: HotPostModel = {
    index: data.index,
    id: data.$id,
    title: data.title
  }
  return res
}

export function transHotPosts(data: any) {
  let res: HotPostModel[] = []
  for (let item of data) {
    res.push(transHotPost(item))
  }
  return res
}