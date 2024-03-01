const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  CompaignName: {
    type: String,
    required: true,
    default:"none"
  },

  AddFormat: {
    type: String,
    default:"none"
  },

  ImageSize: {
    type: String,
    required: true,
    default:"none"
  },

  DestinationUrl: {
    type: String,
    required: true,
    default:"none"
  },

  ChannelFeed: {
    type: String,
    default:"none"
  },

  Verification: {
    type: String,
    default:"none"
  },

  UploadCreatives: {
    type: String,
    default:"none"
  },

  PricingModal: {
    type: String,
    required: true,
    default:"none"
  },

  BidingValue: {
    type: String,
    required: true,
    default:"none"
  },

  CompaignBudget: {
    type: String,
    required: true,
    default:"none"
  },

  DailyBudget: {
    type: String,
    required: true,
    default:"none"
  },

  Countries: {
    type: String,
    default:"none"
  },

  Device: {
    type: String,
    default:"none"
  },

  OperatingSystem: {
    type: String,
    default:"none"
  },

  Browser: {
    type: String,
    default:"none"
  },

  CType: {
    type: String,
    default:"none"
  },

  Language: {
    type: String,
    default:"none"
  },

  IpRange: {
    type: String,
    default:"none"
  },
});


module.exports=mongoose.model("Formdata",FormSchema);