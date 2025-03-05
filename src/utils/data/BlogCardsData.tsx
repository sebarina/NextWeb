import user2 from "/public/images/profile/user-2.jpg";
import user3 from "/public/images/profile/user-3.jpg";
import img1 from "/public/images/blog/blog-img1.jpg";
import img2 from "/public/images/blog/blog-img2.jpg";
import img3 from "/public/images/blog/blog-img3.jpg";

const BlogCardsData = [
  {
    avatar: user2,
    coveravatar: img1,
    read: "2 min Read",
    title: "As yen tumbles, gadget-loving Japan goes for secondhand iPhones",
    category: "Social",
    name: "Georgeanna Ramero",
    view: "9,125",
    comments: "3",
    time: "Mon, Dec 19",
    url:'/card/0'
  },
  {
    avatar: user2,
    coveravatar: img2,
    read: "2 min Read",
    title:
      "Intel loses bid to revive antitrust case against patent foe Fortress",
    category: "Gadget",
    name: "Georgeanna Ramero",
    view: "4,150",
    comments: "38",
    time: "Sun, Dec 18",
    url:'/card/1'
  },
  {
    avatar: user3,
    coveravatar: img3,
    read: "2 min Read",
    title: "COVID outbreak deepens as more lockdowns loom in China",
    category: "Health",
    name: "Georgeanna Ramero",
    view: "9,480",
    comments: "12",
    time: "Sat, Dec 17",
    url:'/card/2'
  },
];

export default BlogCardsData;