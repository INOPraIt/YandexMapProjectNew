module.exports = class PointerDto {
  named;
  description;
  id;
  latitude;
  longitude;
  category;
  opening;
  closing;
  phone;
  image;

  constructor(model) {
    this.named = model.named;
    this.id = model._id;
    this.description = model.description;
    this.latitude = model.latitude;
    this.longitude = model.longitude;
    this.category = model.category;
    this.opening = model.opening;
    this.closing = model.closing;
    this.phone = model.phone;
    this.image = model.image;
  }
}