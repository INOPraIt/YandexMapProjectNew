const NewsModel = require('../models/news-model');
const NewsDto = require('../dtos/news-dto');

class NewsService {
  async createnews(named, description, image) {
    const news = await NewsModel.create({ 
      named, 
      description, 
      image
    });

    const newsDto = new NewsDto(news);

    return { news: newsDto, success: true };
  }

  async getAllNews() {
    const news = await NewsModel.find();
    return news;
  }

  async deleteNews(named) {
    const result = await NewsModel.deleteOne({ named });
    return result.deletedCount > 0;
  }
}

module.exports = new NewsService();