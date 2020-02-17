const listHelper = require('../utils/list_helper')

const emptyList = []

const listWithOneBlog = [
	{
		_id: '5a422aa71b54a676234d17f8',
		title: 'Go To Statement Considered Harmful',
		author: 'Edsger W. Dijkstra',
		url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
		likes: 5,
		__v: 0
	}
]

const listWithManyBlogs = [
	{
		"_id": "5e4adff90fd84852287dbc5c",
		"title": "Hyvä blogi",
		"author": "Minä",
		"url": "testiurli.com",
		"likes": 5,
		"__v": 0
	}, {
		"_id": "5e4ae0530fd84852287dbc5d",
		"title": "Toinen blogi",
		"author": "Authori",
		"url": "testiurli2.com",
		"likes": 11,
		"__v": 0
	}, {
		"_id": "5e4ae10087cef828d8fff8b9",
		"title": "Kolmas blogi",
		"author": "Jebajee",
		"url": "testiurli3.com",
		"likes": 23,
		"__v": 0
	}, {
		"_id": "5e4ae47d21dcf950d0b1b67a",
		"title": "Neljäs blogi",
		"author": "Jebajee",
		"url": "testiurli4.com",
		"likes": 42,
		"__v": 0
	}, {
		"_id": "5e4ae698d9c704459453d480",
		"title": "Viides blogi",
		"author": "jerpsansaa",
		"url": "testiurli5.com",
		"likes": 64,
		"__v": 0
	}
]

test('dummy returns one', () => {
  const result = listHelper.dummy(emptyList)
  expect(result).toBe(1)
})

describe('total likes', () => {
	test("empty list returns 0", () => {
		const result = listHelper.totalLikes(emptyList)
		expect(result).toBe(0)
	})
	
	test('when list has only one blog equals the likes of that', () => {
		const result = listHelper.totalLikes(listWithOneBlog)
		expect(result).toBe(5)
	})
	
	test('when list has many blogs equals the likes of those', () => {
		const result = listHelper.totalLikes(listWithManyBlogs)
		expect(result).toBe(145)
	})
})

describe('favourite blog', () => {
	test("empty list returns null", () => {
		const result = listHelper.favouriteBlog(emptyList)
		expect(result).toBe(null)
	})
	
	test("list with one blog returns the blog", () => {
		const result = listHelper.favouriteBlog(listWithOneBlog)
		expect(result).toEqual(listWithOneBlog[0])
	})
	
	test("list with many blogs returns the correct blog", () => {
		const result = listHelper.favouriteBlog(listWithManyBlogs)
		expect(result).toEqual(listWithManyBlogs[4])
	})
})

describe('most blogs', () => {
	test("empty list returns null", () => {
		const result = listHelper.mostBlogs(emptyList)
		expect(result).toBe(null)
	})
	
	test("list with one author returns the author", () => {
		const expected = {
			author: listWithOneBlog[0].author,
			blogs: 1
		}
		
		const result = listHelper.mostBlogs(listWithOneBlog)
		expect(result).toEqual(expected)
	})
	
	test("list with many authors returns the correct author", () => {
		const expected = {
			author: "Jebajee",
			blogs: 2
		}
		
		const result = listHelper.mostBlogs(listWithManyBlogs)
		expect(result).toEqual(expected)
	})
})

describe('most likes', () => {
	test("empty list returns null", () => {
		const result = listHelper.mostLikes(emptyList)
		expect(result).toBe(null)
	})
	
	test("list with one author returns the author", () => {
		const expected = {
			author: listWithOneBlog[0].author,
			likes: listWithOneBlog[0].likes
		}
		
		const result = listHelper.mostLikes(listWithOneBlog)
		expect(result).toEqual(expected)
	})
	
	test("list with many authors returns the correct author", () => {
		const expected = {
			author: "Jebajee",
			likes: 65
		}
		
		const result = listHelper.mostLikes(listWithManyBlogs)
		expect(result).toEqual(expected)
	})
})