[
    .[]
    |
    {
      message: .commit .message,
      name: .commit .committer .name,
      parents: [
          .parents[]
          .html_url
      ]
    }
]
