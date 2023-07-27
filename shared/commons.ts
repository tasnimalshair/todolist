/* eslint-disable prettier/prettier */
export const returnRes = (res, statusCode, status, msg, data) => {
    return res.status(statusCode).json({
      status: {
        status: status,
        msg: msg,
      },
      data: data ? data : [],
    });
  };
  