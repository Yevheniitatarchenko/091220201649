import Service from './Service';

class CommentsService extends Service {
  /**
   * Gets friends list
   * @param {Object} news
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async add_comment(news) {
    try {
      return await this.http.post(`${this.$apiURL}/comments`, news);
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export default CommentsService;
