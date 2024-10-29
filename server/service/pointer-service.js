const PointerModel = require('../models/pointer-model');
const PointerDto = require('../dtos/pointer-dto');

class PointerService {
  async createpointer(
    named, 
    description, 
    latitude, 
    longitude, 
    category, 
    opening, 
    closing, 
    phone,
    image
  ) {
    const pointer = await PointerModel.create({ 
      named, 
      description, 
      latitude, 
      longitude, 
      category, 
      opening, 
      closing, 
      phone,
      image
    })

    const pointerDto = new PointerDto(pointer);

    return {pointer: pointerDto, success: true}
  }

  async getAllPointer() {
    const pointers = await PointerModel.find();
    return pointers;
  }

  async deletePointer(named) {
    const result = await PointerModel.deleteOne({ named });
    return result.deletedCount > 0;
  }
}

module.exports = new PointerService();