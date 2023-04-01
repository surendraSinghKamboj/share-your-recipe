export const response = (res, status, message, ...extra) => {
    return res.status(status).json({ message, ...extra })
}