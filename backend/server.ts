import express, { Request, Response } from 'express';
import cors from 'cors' 
import connectDB from './config/db.js';
import 'dotenv/config'
import session from 'express-session'
import MongoStore   from 'connect-mongo'
import AuthRouter from './routes/AuthRoutes.js';
import ThumbnailRouter from './routes/ThumbnaiRoutes.js';
import UserRouter from './routes/UserRoutes.js';

declare module 'express-session' {
    interface SessionData{
        isLoggedIn: boolean;
        userId:string;
    }
}

const app = express();

app.use(cors({
    origin:['http://localhost:5173','http://localhost:8000'],
    credentials:true
}));
app.use(express.json())

app.use(session({
    secret:process.env.SESSION_SECRET as string,
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge: 1000* 60 * 60* 24* 7},
    store: MongoStore.create({
        mongoUrl:process.env.MONGODB_URI as string,
        collectionName:'sessions'
    })

}))

const port = process.env.PORT || 3000;

app.use('/api/auth',AuthRouter);
app.use('/api/thumbnail',ThumbnailRouter);
app.use('/api/user',UserRouter);


app.listen(port, async () => {
    console.log(`Server is running at http://localhost:${port}`);
    await connectDB();
});