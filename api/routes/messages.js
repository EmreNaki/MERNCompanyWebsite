import express from "express"
const router = express.Router()
import Message from "../models/Message.js"

router.post("/", async(req,res) => {
    try{
        const {mail, name, text} = req.body
        const newMessage = new Message({mail, name, text})
        await newMessage.save()

        res.status(201).json({ success :true, message : "Message saved"})
        
    } catch(err){
        res.status(500).json({success:false, error: err.message})
    }
})
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
}); 


router.get("/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch message" });
  }
});
export default router;