import { Header, Meta } from "../index";

import ReactMarkdown from "react-markdown";

/**
 * SummaryPage Layout
 * @param {*} props 
 */


class SummaryPage extends React.Component {

    constructor(props) {
        super(props);
        const frontmatter = props.data;
        const markdownBody = props.content;

        this.siteTitle = props.siteTitle || '';
        this.siteDescription = props.siteDescription || '';
        this.classes = props.pathname == "info" && "info_page";
        this.backgroundColor = props.bgColor && props.bgColor;
        this.color = props.pathname == "info" && 'white';
        // console.log( this.props );

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
                    <div id="header" className="summary-header"><ReactMarkdown source={this.props.headInfo.default} /></div>
                    <div id="resume" className="summary-resume"><a href="./gc_resume.pdf">Resume (PDF Download)</a></div>
                    <div id="about_me" className="summary-about"><ReactMarkdown source={this.props.contentOne.default} /></div>
                    <div id="clients" className="summary-clients"><ReactMarkdown source={this.props.contentTwo.default} /></div>
                    <div id="skills" className="summary-skills" ><ReactMarkdown source={this.props.contentThree.default} /></div>
                    <div id="footer" className="summary-footer">
                        <div id="contact" className="summary-contact"><ReactMarkdown source={this.props.contactInfo.default} /></div>
                    </div>
                </main>
            </>
        )
    }
};


export default SummaryPage;

