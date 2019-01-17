
/*
 * GET /book маршрут для получения списка всех книг.
 */
function getBooks(req, res) {

    let book = {
        title: "Happines",
        author: "Daniel Knafo",
        year: 2008,
        pages: 123,
        createdAt:  Date.now,
    };

    res.json(book);
}

/*
 * POST /book для создания новой книги.
 */
function postBook(req, res) {
    let message = {message: "Book successfully added!", error: false }
    res.json(message);

}

//экспортируем все функции
module.exports = { getBooks, postBook };