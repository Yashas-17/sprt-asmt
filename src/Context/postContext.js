import React from 'react'

const PostContext = React.createContext({
  postList: [
    {
      id: 1,
      caption: 'Beautiful Sunset',
      mediaUrl: 'https://example.com/sunset.jpg',
      publishedAt: '2024-08-10T12:00:00Z',
    },
    {
      id: 2,
      caption: 'Mountain View',
      mediaUrl: 'https://example.com/mountain.jpg',
      publishedAt: '2024-08-08T10:30:00Z',
    },
  ],
  removePost: () => {},
})

export default PostContext
