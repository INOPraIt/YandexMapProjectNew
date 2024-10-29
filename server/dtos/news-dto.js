module.exports = class NewsDto {
  named;
  description;
  image;
  id;

  constructor(model) {
    this.named = model.named;
    this.description = model.description;
    this.image = model.image;
    this.id = model._id;
  }
}