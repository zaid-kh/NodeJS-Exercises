import mongoose from "mongoose";

const detailsSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      minLength: 10,
    },
    price: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return value >= 0;
        },
        message: "invalid price, price has to be positive.",
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      minLength: 2,
      //! minLength might not work,, might need validator
    },
    phoneNumber: {
      type: String,
      minLength: 10,
      maxLength: 10,
    },
    dateAdded: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default detailsSchema;
