import React from "react"
import Helmet from "react-helmet"

const Meta = ({ description, lang, meta, keywords, title }) => {

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={title}
      titleTemplate={`%s | $title`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
      ].concat(
        keywords.length > 0
          ? {
            name: `keywords`,
            content: keywords.join(`, `),
          }
          : []
      ).concat(meta)}
    />
  );
};

Meta.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: `hellooo`,
  title: `hello`,
  
}

export default Meta;