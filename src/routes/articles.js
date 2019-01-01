import React, { Component } from 'react'
import ArticleList from '../components/article-list'
import { Route, Switch } from 'react-router-dom'
import Article from '../components/article'

class ArticlesPage extends Component {
  getArticle = ({ match }) => {
    console.log('route: ', match)
    if (!match) return <h1>Select an Article</h1>
    return <Article id={match.params.id} isOpen key={match.params.id} />
  }

  render() {
    return (
      <div>
        <ArticleList />
        <Switch>
          <Route path="/articles/:id" render={this.getArticle} exact />
          <Route path="/articles" render={() => <h1>Select An Article</h1>} exact />
        </Switch>
      </div>
    )
  }
}

export default ArticlesPage
