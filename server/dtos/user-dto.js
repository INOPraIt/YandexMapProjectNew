module.exports = class UserDto {
  email;
  fullname;
  id;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.fullname = model.fullname
  }
}