import Service from './Service';

class CommentsService extends Service {
  /**
   * Gets friends list
   * @param {Object} comment
   * @returns {Promise<AxiosResponse<any>|*>}
   */
  async add_comment(comment) {
    try {
      return await this.http.post(`${this.$apiURL}/comments`, comment);
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export default CommentsService;
