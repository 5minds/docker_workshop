import React from 'react';
import styles from './root.component.module.css';

export default class Root extends React.Component {

  state = {
    posts: [],
    pythonResult: 'TestPython',
    nodeResult: 'TestNode'
  }

  constructor(props) {
    super(props);

    this.props = props;
    this.titleField = React.createRef();
    this.messageField = React.createRef();
  }

  componentDidCatch (error, info) {
    this.setState({hasError: true})
  }

  componentDidMount() {
    this.getPosts();
    this.getNode();
    this.getPython();
  }

  render () {
    var postElements = this.state.posts.map(post => {
        return (
        <div className={styles.post}>
            <div className={styles.title}>{post.title}</div>
            <div className={styles.message}>{post.message}</div>
        </div>
        );
    });

    return (
      this.state.hasError ? (
        <div>
          Error
        </div>
      ) : (
        <div className={styles.container}>
            <div>
            {this.state.pythonResult}
            </div>
            <div>
                <div>
                {postElements}
                </div>
                <div className={styles.inputArea}>
                    <input ref={this.titleField} type="text" placeholder="Titel"></input>
                    <textarea ref={this.messageField} placeholder="Nachricht">

                    </textarea>
                    <button onClick={this.handleOnClick.bind(this)}>Post</button>
                </div>
            </div>
            <div>
            {this.state.nodeResult}
            </div>
        </div>
      )
    )
  }

  handleOnClick(e) {
      const title = this.titleField.current.value;
      const message = this.messageField.current.value;

      const post = {
          title: title,
          message: message
      }; 

      fetch('http://localhost:5000/post/', { 
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
          body: JSON.stringify(post) 
        }).then(this.getPosts.bind(this));

        this.titleField.current.value = '';
        this.messageField.current.value = '';
  }

  getPosts() {
    fetch('http://localhost:5000/post/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        this.setState({ posts: myJson});
    });
  }


  getNode() {
    fetch('http://localhost:3000/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        this.setState({ nodeResult: `node: ${myJson.hostname}`});
    });
  }
  
  getPython() {
    fetch('http://localhost:3001/')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        this.setState({ pythonResult: `python: ${myJson.hostname}`});
    });
  }
}
