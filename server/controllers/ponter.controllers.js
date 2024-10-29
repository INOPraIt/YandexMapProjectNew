const pointerService = require('../service/pointer-service');
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

class PointerController {
  async createpointer(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
      }

      const { 
        named, 
        description, 
        latitude, 
        longitude, 
        category, 
        opening, 
        closing, 
        phone 
      } = req.body;
      const image = req.file ? req.file.path : null;
      const pointerData = await pointerService.createpointer( 
        named, 
        description, 
        latitude, 
        longitude, 
        category, 
        opening, 
        closing, 
        phone,
        image
      )
      return res.json(pointerData)
    } catch (e) {
      next(e);
    }
  }

  async getPointers(req, res, next) {
    try {
      const pointers = await pointerService.getAllPointer();
      return res.json(pointers)
    } catch (e) {
      next(e)
    }
  }

  async deletePointer(req, res, next) {
    try {
      const { named } = req.body;
      const deleted = await pointerService.deletePointer(named);
      
      if (!deleted) {
        return res.status(404).json({ success: false, message: 'Точка не найдена' });
      }
      
      return res.json({ success: true, message: 'Точка успешно удалена' });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PointerController();