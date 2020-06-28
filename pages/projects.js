// import matter from 'gray-matter'
// import ReactMarkdown from 'react-markdown'

import React from "react";
import { ProjectPage, MultiColumn } from "../components/index";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    const markdownBody = props.content
    const frontmatter = props.data
  }

  render() {
    return (
      <ProjectPage {...this.props} >
        <MultiColumn bgImage={this.props.bgImage} />
      </ProjectPage>
      );
  }
}

export default Projects;

Projects.getInitialProps = async function () {
  const siteConfig = await import(`../data/config.json`);

  const bgImage = require(`../public/images/1920x1080_Art_1.png?resize&sizes[]=300&sizes[]=600&sizes[]=1000`);

  const headInfo = await import(`../content/head-info.md`);
  const contactInfo = await import(`../content/contact-info.md`);
  const contentOne = await import(`../content/project1.md`);
  const contentTwo = await import(`../content/skillset/sp-index-2.md`);
  const contentThree = await import(`../content/skillset/sp-index-3.md`);

  const metadata = '';//matter(content.default);
  return {
      ...metadata,
      siteConfig,
      headInfo,
      bgImage,
      contactInfo,
      contentOne,
      contentTwo,
      contentThree
  };
};
