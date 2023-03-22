
export interface ScrollPostModel {
  image_link: string
  id: string;
  title: string;
}

export function transScrollPost(data: any) {
  const res: ScrollPostModel = {
    image_link: data.image_link,
    id: data.$id,
    title: data.title
  }
  return res
}

export function transScrollPosts(data: any) {
  let res: ScrollPostModel[] = []
  for (let item of data) {
    res.push(transScrollPost(item))
  }
  return res
}