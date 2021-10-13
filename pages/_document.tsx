import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

import NavBar from '../components/global/NavBar';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body className="bg-bg text-text overflow-x-hidden">
					<NavBar />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
