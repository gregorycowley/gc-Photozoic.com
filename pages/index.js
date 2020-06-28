import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import { Layout, TextContent } from "../components/index";

const Index = props => {
  
  const frontmatter = props.data;
  const markdownBody = props.content;

  return (
    <Layout>
      <TextContent>
        <ReactMarkdown source={markdownBody} />
      </TextContent>
    </Layout>
  );
};

export default Index;

Index.getInitialProps = async function() {
  const siteConfig = await import(`../data/config.json`);
  const content = await import(`../pages-link/default.md`);
  const metadata = matter(content.default);
  return {
    ...metadata,
    ...siteConfig
  };
};
