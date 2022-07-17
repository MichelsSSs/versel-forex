import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  produtonome: string
  produtoimage:string
  produtopreco:string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')
	
	// Instructing the Vercel edge to cache the file
	res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
	
	// generate sitemap here
	const xml = `<?xml version="1.0"?>
  <rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
    <channel>
      <item>
        <id>K456653443_0</id>
        <title>Blue Facebook T-Shirt (Unisex)</title>
        <description>A vibrant blue crewneck T-shirt for all shapes and sizes. Made from 100% cotton.</description>
        <availability>in stock</availability>
        <condition>new</condition>
        <price>10,00 USD</price>
        <link>https://www.facebook.com/facebook_t_shirt</link>
        <image_link>https://www.facebook.com/t_shirt_image_001.jpg</image_link>
        <brand>Facebook</brand>
        <quantity_to_sell_on_facebook>75</quantity_to_sell_on_facebook>
        <google_product_category>Apparel &amp; Accessories &gt; Clothing &gt; Shirts &amp; Tops</google_product_category>
        <sale_price>10,00 USD</sale_price>
        <item_group_id>K456653443_0</item_group_id>
        <gender>unisex</gender>
        <color>royal blue</color>
        <size>M</size>
        <age_group>adult</age_group>
        <material>cotton</material>
        <pattern>stripes</pattern>
      </item>
    </channel>
  </rss>`

  res.end(xml)
}