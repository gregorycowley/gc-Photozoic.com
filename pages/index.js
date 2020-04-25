// import matter from 'gray-matter'
// import ReactMarkdown from 'react-markdown'

import React from "react";
import SummaryPage from "../components/SummaryPage";

class Index extends React.Component {
  constructor(props) {
    super(props);
    const markdownBody = props.content
    const frontmatter = props.data
  }

  render() {
    return <SummaryPage {...this.props} />;
  }
}

export default Index;

Index.getInitialProps = async function () {
    const siteConfig = await import(`../data/config.json`);

    const headInfo = await import(`../content/head-info.md`);
    const contactInfo = await import(`../content/contact-info.md`);

    const metadata = '';//matter(content.default);
    return {
        ...metadata,
        siteConfig,
        headInfo,
        contactInfo,
        contentOne,
        contentTwo,
        contentThree
    };
};

