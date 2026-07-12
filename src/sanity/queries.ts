/** GROQ 查询语句合集 */

export const productsQuery = `*[_type == "product"] | order(order asc) {
  _id, name, "slug": slug.current, category, description, features, image, order
}`;

export const featuredProductsQuery = `*[_type == "product"] | order(order asc)[0...6] {
  _id, name, "slug": slug.current, category, description, features, image, order
}`;

export const productsByCategoryQuery = `*[_type == "product" && category == $category] | order(order asc) {
  _id, name, "slug": slug.current, category, description, features, image, order
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id, name, "slug": slug.current, category, description, features, image, order
}`;

export const newsQuery = `*[_type == "news"] | order(date desc) {
  _id, title, "slug": slug.current, category, summary, content, image, date, views
}`;

export const latestNewsQuery = `*[_type == "news"] | order(date desc)[0...4] {
  _id, title, "slug": slug.current, category, summary, content, image, date, views
}`;

export const newsByCategoryQuery = `*[_type == "news" && category == $category] | order(date desc) {
  _id, title, "slug": slug.current, category, summary, content, image, date, views
}`;

export const newsBySlugQuery = `*[_type == "news" && slug.current == $slug][0] {
  _id, title, "slug": slug.current, category, summary, content, image, date, views
}`;

export const relatedNewsQuery = `*[_type == "news" && slug.current != $slug] | order(date desc)[0...3] {
  _id, title, "slug": slug.current, date
}`;

export const casesQuery = `*[_type == "case"] | order(date desc) {
  _id, title, "slug": slug.current, client, location, description, image, contentImages, products, date
}`;

export const featuredCasesQuery = `*[_type == "case"] | order(date desc)[0...3] {
  _id, title, "slug": slug.current, client, location, description, image, contentImages, products, date
}`;

export const caseBySlugQuery = `*[_type == "case" && slug.current == $slug][0] {
  _id, title, "slug": slug.current, client, location, description, image, contentImages, products, date
}`;

export const bannersQuery = `*[_type == "banner"] | order(order asc) {
  _id, title, subtitle, image, link, order
}`;

export const siteConfigQuery = `*[_type == "siteConfig"][0]`;
