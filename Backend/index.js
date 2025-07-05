const PORT = 3000;
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const multer = require('multer')
const path = require("path")
const cors = require('cors');
const { text } = require('stream/consumers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const mongodb_url = "mongodb+srv://vanshbandwal93:1XuutEUoUdcCILvV@cluster0.d6vgs1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connect = mongoose.connect(mongodb_url)
connect.then(()=>{
    console.log("Database is connected successfully")
}).catch((err)=>{
    console.log("database is not connected successfully",err)
})

app.get('/',(req,res)=>{
    res.send("Express app is running")
})

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage:storage})

app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('service'),(req,res)=>{
    res.json({
        success:true,
        image_url:`http://localhost:${PORT}/images/${req.file.filename}`
    })
})

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    discription:{
      type:String,
      required:true,

    },
    image:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
})

app.post('/addservice',async(req,res)=>{
  console.log(req.body)
    let products = await Product.find({})
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id+1
    }
    else{
        id = 1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        discription:req.body.discription
    })
    console.log(product)
    await product.save()
    res.json({
        success:true,
        name:req.body.name,
        message:'Services is successfully added'
    })
})

//creating api for removing item

app.post('/removeproduct',async(req,res)=>{
    console.log(req.body)
    let userdata  = await Product.findOneAndDelete({id:req.body.id})
    console.log('removed')
    res.json({
        success:true,
        name:req.body.name,
        userdata:userdata
    })
})

app.get('/allservices',async(req,res)=>{
    let Services = await Product.find({})
    res.json({
      success:true,
      Services:Services
    })
})
//Reviews
const Review = mongoose.model("Review",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    discription:{
      type:String,
      required:true,

    },
    image:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
})

app.post('/addReview',async(req,res)=>{
  console.log(req.body)
        let reviews = await Review.find({})
        let id;
        if(reviews.length>0){
            let last_product_array = reviews.slice(-1)
            let last_product = last_product_array[0]
            id = last_product.id+1
        }
        else{
            id = 1;
        }
    const review = new Review({
        id:id,
        name:req.body.name,
        image:req.body.image,
        discription:req.body.discription,

    })
    console.log(review)
    await review.save()
    res.json({
        success:true,
        name:req.body.name,
        message:'Review is added successfully'
    })
})


app.post('/removeReview',async(req,res)=>{
    console.log(req.body)
    let userdata  = await Review.findOneAndDelete({id:req.body.id})
    console.log('removed')
    res.json({
        success:true,
        name:req.body.name,
        userdata:userdata
    })
})

app.get('/allReview',async(req,res)=>{
    let Services = await Review.find({})
    res.json({
      success:true,
      Services:Services
    })
})
//servicespage
const ServicePage = mongoose.model("ServicePage",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    discription:{
      type:String,
      required:true,

    },
    image:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
})

app.post('/addServicePage',async(req,res)=>{
  console.log(req.body)
    let ser = await ServicePage.find({})
    let id;
    if(ser.length>0){
        let last_product_array = ser.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id+1
    }
    else{
        id = 1;
    }
    const servicePage = new ServicePage({
        id:id,
        name:req.body.name,
        image:req.body.image,
        discription:req.body.discription,
    })
    console.log(servicePage)
    await servicePage.save()
    res.json({
        success:true,
        name:req.body.name,
        message:'Services is successfully added'
    })
})


app.post('/removeServicePage',async(req,res)=>{
    console.log(req.body)
    let userdata  = await ServicePage.findOneAndDelete({id:req.body.id})
    console.log('removed')
    res.json({
        success:true,
        name:req.body.name,
        userdata:userdata
    })
})

app.get('/allServicePage',async(req,res)=>{
    let Services = await ServicePage.find({})
    res.json({
      success:true,
      Services:Services
    })
})
//Images
const Images = mongoose.model("Images",{
    id:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
})

app.post('/addImages',async(req,res)=>{
  console.log(req.body)
    let ser = await Images.find({})
    let id;
    if(ser.length>0){
        let last_product_array = ser.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id+1
    }
    else{
        id = 1;
    }
    const Image = new Images({
        id:id,
        image:req.body.image,
    })
    console.log(Image)
    await Image.save()
    res.json({
        success:true,
        name:req.body.name,
        message:'Image is added successfully'
    })
})
  

app.post('/removeImages',async(req,res)=>{
    console.log(req.body)
    let userdata  = await Images.findOneAndDelete({id:req.body.id})
    console.log('removed')
    res.json({
        success:true,
        name:req.body.name,
        userdata:userdata
    })
})

app.get('/allImages',async(req,res)=>{
    let Services = await Images.find({})    
    res.json({
      success:true,
      Services:Services
    })
})

//Reviewpage
const Reviewpage = mongoose.model("Reviewpage",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    discription:{
      type:String,
      required:true,

    },
    image:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
})

app.post('/addReviewpage',async(req,res)=>{
  console.log(req.body)
    let Reviewpages = await Reviewpage.find({})
    let id;
    if(Reviewpages.length>0){
        let last_product_array = Reviewpages.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id+1
    }
    else{
        id = 1;
    }
    const reviewPage = new Reviewpage({
        id:id,
        name:req.body.name,
        image:req.body.image,
        discription:req.body.discription,
    })
    console.log(reviewPage)
    await reviewPage.save()
    res.json({
        success:true,
        name:req.body.name,
        message:'Review is added successfully'
    })
})


app.post('/removeReviewpage',async(req,res)=>{
    console.log(req.body)
    let userdata = await Reviewpage.findOneAndDelete({id:req.body.id})
    console.log('removed')
    res.json({
        success:true,
        name:req.body.name,
        userdata:userdata
    })
})
app.get('/allReviewpage',async(req,res)=>{
    let Services = await Reviewpage.find({})
    res.json({
      success:true,
      Services:Services
    })
})
const Contact = mongoose.model('Contact', {
  id:Number,
  name: String,
  last:String,
  email: String,
  phone: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
app.post('/contact',async(req,res)=>{
    const {first,last,email,phone,textarea} = req.body;
    //  let contact = await Contact.find({})
    // let id;
    // if(contact.length>0){
    //     let last_product_array = contact.slice(-1)
    //     let last_product = last_product_array[0]
    //     id = last_product.id+1
    // }
    // else{
    //     id = 1;
    // }
     let contact = await Contact.find({})
    let id;
    if(contact.length>0){
        let last_product_array = contact.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id+1
    }
    else{
        id = 1;
    }
    const contactform = new Contact({
        id:id,
        name:first,
        last:last,
        email:email,
        phone:phone,
        message:textarea
    })
    await contactform.save()
    res.json({
        success:true,
        message:'We will contact you Soon'
    })

})
app.post('/removeClient',async(req,res)=>{
    console.log(req.body)
    let userdata = await Contact.findOneAndDelete({id:req.body.id})
    console.log('removed')
    res.json({
        success:true,
        userdata:userdata
    })
})
app.get('/allClient',async(req,res)=>{
    let Services = await Contact.find({})
    res.json({
      success:true,
      Services:Services
    })
})
app.listen(PORT,(err)=>{
    if(!err){
        console.log(`server running on address http://localhost:${PORT}`)
    }
    else{
        console.log("Err",err)
    }
})