const transform = (doc, ret, options) => {
  ret.id = doc._id;
  delete ret._id;
  return ret;
}

module.exports = {
  timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
  toObject: { transform: transform },
  toJSON: { transform: transform }
}