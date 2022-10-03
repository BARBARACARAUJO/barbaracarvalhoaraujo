const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/barbaracarvalhoaraujo/' : '',
  images: { loader: "custom" }
}