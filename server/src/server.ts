import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { processFiles } from './FileProcessor';

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());

app.post('/api/compare', upload.fields([
  { name: 'followers', maxCount: 1 },
  { name: 'following', maxCount: 1 }
]), (req, res) => {
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  
  if (!files.followers || !files.following) {
    return res.status(400).json({ error: 'Both files are required' });
  }

  const followersHtml = files.followers[0].buffer.toString();
  const followingHtml = files.following[0].buffer.toString();

  const result = processFiles(followersHtml, followingHtml);
  res.json(result);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});