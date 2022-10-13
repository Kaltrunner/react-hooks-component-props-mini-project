import Article from "./Article";

function ArticleList({ posts }) {
    const articles = posts.map((post) => {
    return <Article post={post} key={post.id}/>
    });
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;