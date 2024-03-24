// eslint-disable-next-line no-undef
data = {
  categories: [
    {
      id: 'c1',
      name: 'chats',
      forums: ['f1']
    }
  ],
  forums: [
    {
      id: 'f1',
      name: 'fishing',
      description: 'let talk fishing',
      categoryId: 'c1',
      threads: ['t1']
    }
  ],
  users: [
    {
      id: 'u1',
      name: 'BEBY'
    }
  ],
  threads: [
    {
      id: 't1',
      title: 'what is your favorite food ?',
      publishedAt: 1681681861,
      posts: [],
      userId: 'u1'
    }
  ],
  posts: [
    {
      id: 'p1',
      publishedAt: 1681681861,
      userId: 'u1',
      text: 'I like burgers, and you ?',
      threadId: 't1'
    }
  ]

}
// eslint-disable-next-line no-undef
data.posts.filter(post => post.userId === 'u1')
