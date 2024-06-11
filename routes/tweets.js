import express from 'express';
import User from '../models/User.js'
import Tweet from '../models/Tweet.js'
// import TweetsList from '../../tweeeter_app/src/components/TweetsList/index.jsx';

const router = express.Router();

// POST  /tweets/
router.post('/', async (req, res) => {
    console.log(req.body);
    const {username, newTweet} = req.body;
    const dbUser = await User.findOne({username});

    //cheack if user exists
    if(dbUser){
        console.log(dbUser);
        
        const tweet = await Tweet.create({content: newTweet, user: dbUser._id, username: dbUser.user});
        return res.json(tweet)
    } else {
        const newUser = await User.create({username});
        console.log(newUser);
        const tweet = await Tweet.create({content: newTweet, user: newUser._id, username: newUser.user});
        return res.json(tweet)
    }

    // res.send('creating new tweet....')
});

router.get("/", async (req, res) => {
    const tweets = await Tweet.find();
    res.send(tweets);
  });
  


router.delete('/', async (req, res) => {
    res.send('deleting tweet....')
});

router.put('/', async (req, res) => {
    res.send('updating tweet....')
});




export default router;