const express=require('express')
const router=express.Router()


const cridential={
    username:'adwaith',
    password:'abcd123'
}

// user validating
router.post('/login',(req,res)=>{
    
    if(req.body.username==cridential.username && req.body.password== cridential.password){
        req.session.user=req.body.username
       

        res.redirect('/route/dashboard')
    }
    else{
        res.render('base',{invalid:'invalid username or password compositon'})
        
    }
  

})

//route for body
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{title:'Login System',user:req.session.user})
    }
    else{
        
        res.redirect('/')
    }
})



//route for log out

router.get('/logout',(req,res)=>{
    
    req.session.destroy((er)=>{
        if(er){
        res.send('OOPS Something went Wrong!')
        console.log(er)
        }
        else{
            // res.render('base',{title:'Login window',logout:'Logout Successfully'})
            res.redirect('/')
        }
    })
    
})


module.exports=router