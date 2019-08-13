const Comment = [
  // for now to make it simplers (i dont want to type a lot) only comments for one application
  {
    applicationformid: 1,
    commentid: 1,
    body: 'This is great',
    adminid: 1,
    datecreatedat: new Date()
  },
  {
    applicationformid: 1,
    commentid: 2,
    body: 'I beg to differ',
    adminid: 2,
    datecreatedat: new Date()
  },
  {
    applicationformid: 1,
    commentid: 3,
    body: 'I would have to agree with Josue',
    adminid: 3,
    datecreatedat: new Date()
  },
  {
    applicationformid: 1,
    commentid: 4,
    body: 'Yeah!',
    adminid: 1,
    datecreatedat: new Date()
  },
];

module.exports = Comment;
