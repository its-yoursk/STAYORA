const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: 
            "https://unsplash.com/photos/tree-with-yellow-blossoms-IDDlWIQ9gDM",
        set: (v) =>
            //ternary operator 
            v ===""
                ? "https://unsplash.com/photos/tree-with-yellow-blossoms-IDDlWIQ9gDM"
                : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports=Listing;