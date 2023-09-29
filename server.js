const express=require('express')
const app=express()

const path =require('path')

const session=require('express-session')
const {v4:uuidv4}=require('uuid')
const router=require('./router.js')



PORT=process.env.PORT||3000
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')


//session middleware

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

//no catche
app.use((req,res,next)=>{
    res.header('Cache-Control','private,no-cache,no-store,must-revalidate')
    res.header('Expires','-1')
    res.header('Pragma','no-cache')
    next()
})




//router middleware
app.use('/route',router)

// static files
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public','assets')))





const data={title:'Login System'}

//index router

app.get('/',(req,res)=>{
    if(req.session.user)
    {
        res.redirect('/route/dashboard')
    }else{
    res.render('base',data)}
})


app.listen(PORT,()=>{
    console.log(`app listening at port http://localhost:${PORT}/`)
})