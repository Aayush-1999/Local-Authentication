var express=require("express"),
    mongoose=require("mongoose"),
    bodyParser=require("body-parser"),
    User=require("./models/user")
    passport=require("passport"),
    passportLocal=require("passport-local"),
    passportLocalMongoose=require("passport-local-mongoose"),
    expressSession=require("express-session");

var app=express();
mongoose.connect("mongodb://127.0.0.1/auth-demo-app",{useNewUrlParser:true});
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.use(expressSession({
      secret:"one is fairer than the other",
      resave:false,
      saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/",function(req,res){
     res.render("home");
});

app.get("/secret", isloggedin ,function(req,res){
    res.render("secret");
});

app.get("/register",function(req,res){
    res.render("register");
});

app.post("/register",function(req,res){
    User.register(new User({username:req.body.username}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/secret");
        });
    });
});

app.get("/login",function(req,res){
    res.render("login");
});
app.post("/login",passport.authenticate("local",{
    successRedirect:"/secret",
    failureRedirect:"/login"
}),function(req,res){
});

app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
})

function isloggedin(req, res,next){
    if(req.isAuthenticated()){
       return next();
    }
    res.redirect("/login");
}

app.listen(3000)
{
    console.log("server is running");
};