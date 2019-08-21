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
      titleTemplate={title}
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
  description: `Personal Website of Mitchell Paterson`,
  title: `Mitchell Paterson`,
  
}

export default Meta;