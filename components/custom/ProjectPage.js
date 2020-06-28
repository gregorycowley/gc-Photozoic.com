import { Header, Meta } from "../index";

// import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

class ProjectPage extends React.Component {

    constructor(props) {
        super(props);
        const frontmatter = props.data;
        const markdownBody = props.content;

        this.siteTitle = props.siteTitle || '';
        this.siteDescription = props.siteDescription || '';
        this.classes = props.pathname == "info" && "info_page";
        this.backgroundColor = props.bgColor && props.bgColor;
        this.color = props.pathname == "info" && 'white';
        
        console.log( this.props );
    }

    render() {

        return (
            <>
                <Meta
                    siteTitle={this.siteTitle}
                    siteDescription={this.siteDescription}
                />
                <Header className={`${this.classes} test`} siteTitle={this.siteTitle} />
                <main className="container summary">
                    {this.props.children}   
                    Content Goes Here
                </main>
            </>
        )
    }
};


export default ProjectPage;

