const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	const reducer = (sum, item) => {
		return sum + item.likes
	}
	return blogs.reduce(reducer, 0)
}

const favouriteBlog = (blogs) => {
	let mostLikes = null
	for (let i = 0; i < blogs.length; i++) {
		if (mostLikes == null || blogs[i].likes > mostLikes.likes) {
			mostLikes = blogs[i]
		}
	}
	return mostLikes
}

const getMostBlogs = (authors) => {
	let mostBlogs = null
	for (let i = 0; i < authors.length; i++) {
		if (mostBlogs == null || authors[i].blogs > mostBlogs.blogs) {
			mostBlogs = authors[i]
		}
	}
	return mostBlogs
}

const includesAuthor = (authors, author) => {
	for (let i = 0; i < authors.length; i++) {
		if (authors[i].author == author) {
			return i
		}
	}
	return -1
}

const mostBlogs = (blogs) => {
	let authors = []
	for (let i = 0; i < blogs.length; i++) {
		const index = includesAuthor(authors, blogs[i].author)
		if (index == -1) {
			authors.push(
				{
					author: blogs[i].author,
					blogs: 1
				}
			)
		} else {
			authors[index].blogs = authors[index].blogs + 1
		}
	}
	return getMostBlogs(authors)
}

const mostLikes = (blogs) => {
	let authors = []
	for (let i = 0; i < blogs.length; i++) {
		const index = includesAuthor(authors, blogs[i].author)
		if (index == -1) {
			authors.push(
				{
					author: blogs[i].author,
					likes: blogs[i].likes
				}
			)
		} else {
			authors[index].likes = authors[index].likes + blogs[i].likes
		}
	}
	return favouriteBlog(authors)
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes
}