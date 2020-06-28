import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import { Layout, TextContent } from "../components/index";
import CodeBlock from '../components/code-block';

const ProjectOne = props => {
  
  const frontmatter = props.data;
  const blocks = props.content.split('---');
  
  const imageRender = (uri) => {
    return uri.replace( /\.\.\/public/, '');
  };

  const ImageWrapper = (props) => {
    return (
      <img className="wrapped-image" src={props.src} alt={props.alt} />
    )
  };

  const MarkdownBlock = (props) => {
    return (
      <ReactMarkdown 
        className={`content-block-${props.id}`}
        source={props.source} 
        includeNodeIndex={true}
        transformImageUri={imageRender}
        renderers={{code: CodeBlock}, {image: ImageWrapper}}
       />
    )
  }

  return (
    <Layout>
      <TextContent>
        {blocks.map((value, index) => {
          return <MarkdownBlock key={index} id={index} source={value} />
        })}
      </TextContent>
    </Layout>
  );
};

export default ProjectOne;

ProjectOne.getInitialProps = async function() {
  const siteConfig = await import(`../data/config.json`);
  const content = await import(`../content/project1.md`);
  const metadata = matter(content.default);
  return {
    ...metadata,
    ...siteConfig
  };
};
