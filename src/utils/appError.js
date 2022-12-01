class AppError{
  constructor(message, statusCode) {
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
  }
  
  sendError(res){
    return res.status(this.statusCode).json({
      status: this.status,
      message: this.message
    })
  };
}
module.exports = AppError;
