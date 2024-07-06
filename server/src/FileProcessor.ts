import cheerio from 'cheerio';

interface ResultItem {
  username: string;
  profileUrl: string;
}

export function processFiles(followersHtml: string, followingHtml: string): ResultItem[] {
  const followers = extractUsernames(followersHtml);
  const following = extractUsernamesAndUrls(followingHtml);
  
  return following.filter(item => !followers.includes(item.username));
}

function extractUsernames(html: string): string[] {
  const $ = cheerio.load(html);
  const usernames: string[] = [];
  
  $('._a6-p').each((i, elem) => {
    const username = $(elem).find('a').text();
    usernames.push(username);
  });
  
  return usernames;
}

function extractUsernamesAndUrls(html: string): ResultItem[] {
  const $ = cheerio.load(html);
  const items: ResultItem[] = [];
  
  $('._a6-p').each((i, elem) => {
    const anchorElem = $(elem).find('a');
    const username = anchorElem.text();
    const profileUrl = `https://www.instagram.com/${username}`;
    items.push({ username, profileUrl });
  });
  
  return items;
}