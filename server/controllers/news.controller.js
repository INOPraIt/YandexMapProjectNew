const newsService = require('../service/news-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

class NewsController {
  async creaternews(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
      }

      const { named, description } = req.body;
      const image = req.file ? req.file.path : null;

      const newsData = await newsService.createnews(named, description, image);
      return res.json(newsData);
    } catch (e) {
      next(e);
    }
  }

  async getNews(req, res, next) {
    try {
      const news = await newsService.getAllNews();
      return res.json(news);
    } catch (e) {
      next(e);
    }
  }

  async deleteNews(req, res, next) {
    try {
      const { named } = req.body;
      const deleted = await newsService.deleteNews(named);
      
      if (!deleted) {
        return res.status(404).json({ success: false, message: 'Новость не найдена' });
      }
      
      return res.json({ success: true, message: 'Новость успешно удалена' });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new NewsController();





// const newsService = require('../service/news-service');
// const { validationResult } = require('express-validator');
// const ApiError = require('../exceptions/api-error');
// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Папка для загрузки изображений
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname); // Уникальное имя файла
//   }
// });

// const upload = multer({ storage });

// class NewsController {
//   async creaternews(req, res, next) {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
//       }
//       const { named, description } = req.body;
//       const image = req.file ? req.file.path : null;

//       const newsData = await newsService.createnews(named, description, image);
//       const success = {
//         createrNews: true
//       };
//       res.cookie({'Create news': success});
//       return res.json(newsData);
//     } catch (e) {
//       next(e);
//     }
//   }

//   async getNews(req, res, next) {
//     try {
//       const news = await newsService.getAllNews();
//       return res.json(news)
//     } catch (e) {
//       next(e)
//     }
//   }
// }

// module.exports = new NewsController();