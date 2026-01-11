import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor(){
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({title, slug, content, featuredImage, status, userId}){
    try {
      console.log('REQUEST: createPost', { title, slug, status, userId })
      const payload = { title, content, featuredImage, status, userId }
      const res = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        payload
      )
      console.log('RESPONSE: createPost', res)
      return res
    } catch (error) {
      console.error('ERROR: createPost', error)
      return false
    }
  }

  async updatePost(id, data){
    try {
      console.log('REQUEST: updatePost', { id, ...data })

      // Only allow fields that are expected by the collection schema
      const allowed = ['title', 'content', 'featuredImage', 'status', 'userId']
      const payload = {}
      for (const key of allowed) {
        if (key in data && typeof data[key] !== 'undefined') payload[key] = data[key]
      }

      const res = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id,
        payload
      )
      console.log('RESPONSE: updatePost', res)
      return res
    } catch (error) {
      console.error('ERROR: updatePost', error)
      return false
    }
  }

  async deletePost(id){
    try {
      console.log('REQUEST: deletePost', { id })
      const res = await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id
      )
      console.log('RESPONSE: deletePost', res)
      return res
    } catch (error) {
      console.error('ERROR: deletePost', error)
      return false
    }
  }

  async getPost(id){
    try {
      console.log('REQUEST: getPost', { id })
      const res = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        id
      )
      console.log('RESPONSE: getPost', res)
      return res
    } catch (error) {
      console.error('ERROR: getPost', error)
      return false
    }
  }

  async getPosts(queries = [Query.equal('status', 'active')]){
    try {
      console.log('REQUEST: getPosts', { queries })
      const res = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      )
      console.log('RESPONSE: getPosts', res)
      return res
    } catch (error) {
      console.error('ERROR: getPosts', error)
      return false
    }
  }

  async uploadFile(file){
    try {
      console.log('REQUEST: uploadFile', { name: file?.name })
      const res = await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      )
      console.log('RESPONSE: uploadFile', res)
      return res
    } catch (error) {
      console.error('ERROR: uploadFile', error)
      return false
    }
  }

  async deleteFile(fileId){
    try {
      if (!fileId) {
        console.warn('deleteFile called with empty fileId, skipping')
        return false
      }

      console.log('REQUEST: deleteFile', { fileId })
      const res = await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
      console.log('RESPONSE: deleteFile', res)
      return res
    } catch (error) {
      // common: file might already be deleted — log and continue
      console.error('ERROR: deleteFile', error)
      return false
    }
  }

  getFilePreview(fileId) {
    // Using view instead of preview because preview is blocked on free plan
    return this.bucket.getFileView(import.meta.env.VITE_APPWRITE_BUCKET_ID, fileId);
  }
}

const service = new Service()
export default service
