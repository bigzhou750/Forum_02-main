const ENDPOINT = "https://ec2-18-134-161-159.eu-west-2.compute.amazonaws.com/v1";//http://localhost/v1
const PROJECT_ID = "640b314367202176ff6d";//63da75cdca2579472d19


const FUNCTIONS = {
  addMembers: "6330202fdc5b24c95c22",
};

const DATABASES = {
  feed: "feed",
  feed_list: "feed_list",
  accounts: "accounts",
};

const COLLECTIONS = {
  feed_blog: "feed_blog",
  feed_post: "feed_post",
  feed_comment: "feed_comment",

  feed_hot: "feed_hot",
  feed_scroll: "feed_scroll",
  feed_recommend: "feed_recommend",
  
  user_public: "user_public",
  user_private: "user_private",
  user_account: "user_account"


};

const IMAGEBUCKETS = {
  blogs: "test"
}

 const portraitImageUrl = (imageId: string): string =>
 `${ENDPOINT}/storage/buckets/${IMAGEBUCKETS.blogs}/files/${imageId}/preview?quality=10&project=${PROJECT_ID}&mode=admin`;

 const imageUrl = (imageId: string): string =>
 `${ENDPOINT}/storage/buckets/${IMAGEBUCKETS.blogs}/files/${imageId}/preview?quality=50&project=${PROJECT_ID}&mode=admin`;
export { ENDPOINT, PROJECT_ID, FUNCTIONS, DATABASES, COLLECTIONS, imageUrl, portraitImageUrl };
