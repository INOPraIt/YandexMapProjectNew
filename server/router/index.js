const Router = require('express').Router;
const userController = require('../controllers/user.controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middelware/auth-middleware');
const pointerController = require('../controllers/ponter.controllers');
const newsController = require('../controllers/news.controller');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

//Users
router.post('/registration',
  body('email').isEmail(),
  body('password').isLength({min: 3, max: 32}),
  userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

//Pointers
router.post('/createpointer', 
  upload.single('image'),
  body('named'),
  body('description'),
  body('latitude'),
  body('longitude'),
  body('category'),
  body('opening'),
  body('closing'),
  body('phone'),
  pointerController.createpointer
)
router.get('/pointers', pointerController.getPointers)
router.delete('/deletepointers', pointerController.deletePointer);

//News
router.post('/createnews', 
  upload.single('image'),
  body('named'),
  body('description'),
  newsController.creaternews
);
router.get('/news', newsController.getNews);
router.delete('/deletenews', newsController.deleteNews);


module.exports = router;