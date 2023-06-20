class ExpressError {
    constructor(message, status) {
        this.message = message;
        this.status = status;
        console.error(this.stack);
    }

    BadRequest(message = "Bad Request") {
        return new ExpressError(message, 400);
    }

    NotFound(message = "Not Found") {
        return new ExpressError(message, 404);
    }
}


module.exports = ExpressError;